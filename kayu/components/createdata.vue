<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { VueFinalModal } from 'vue-final-modal';

interface ApiResponse<T> {
    status: boolean;
    message: string;
    data: T;
}


// Definisikan tipe data untuk jenis kayu dan kayu
interface TypeWood {
    id: number;
    type_name: string;
}

interface Woods {
    id: number;
    wood_name: string;
}

// State untuk menyimpan jenis kayu dan kayu
const type_wood = ref<TypeWood[]>([]);
const woods = ref<Woods[]>([]);

// Data yang akan di-submit
const formData = ref({
    id_type: '',
    id_wood: '',
    size: '',
    quantity: '',
    price: '',
    image: null as File | null, // Ubah ini
});

const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0] || null; // Menggunakan optional chaining untuk mencegah error jika files tidak ada
    formData.value.image = file; // file bisa null, tidak akan menghasilkan error sekarang
};

// Fungsi untuk fetch jenis kayu dan kayu dari API
const fetchDropdownData = async () => {
    try {
        const token = localStorage.getItem('token');
        // Fetch jenis kayu
        const typeresponse = await useNuxtApp().$axios.get<ApiResponse<TypeWood[]>>('/type-woods', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        type_wood.value = typeresponse.data.data;
        console.log('Jenis Kayu:', typeresponse.data);

        // Fetch kayu
        const woodresponse = await useNuxtApp().$axios.get<ApiResponse<Woods[]>>('/woods', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        
        woods.value = woodresponse.data.data;
        console.log('Kayu:', woodresponse.data);
    } catch (error) {
        console.error('Error fetching dropdown data:', error);
    }
};

// Fungsi untuk submit data form
const submitForm = async () => {
    if (!formData.value.id_type || !formData.value.id_wood || !formData.value.size || !formData.value.price || !formData.value.quantity) {
        alert('Semua kolom harus diisi.');
        return;
    }

    try {
        const token = localStorage.getItem('token');
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('id_type', formData.value.id_type);
        formDataToSubmit.append('id_wood', formData.value.id_wood);
        formDataToSubmit.append('size', formData.value.size);
        formDataToSubmit.append('quantity', formData.value.quantity);
        formDataToSubmit.append('price', formData.value.price);
        
        // Coba tanpa gambar terlebih dahulu
        if (formData.value.image) {
            formDataToSubmit.append('image', formData.value.image);
        }

        // Log the FormData entries
        console.log('Form Data:', Array.from(formDataToSubmit.entries()));

        // Mengirim permintaan POST
        const response = await axios.post('http://api.udpadijaya.com/api/bonded-woods', formDataToSubmit, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        
        alert('Data berhasil ditambahkan');
        console.log('Response:', response.data);

        // Refresh halaman setelah berhasil menyimpan
        window.location.reload();
    } catch (error: any) {
        console.error('Error submitting form:', error.response ? error.response.data : error.message);
        alert('Terjadi kesalahan saat menyimpan data');
    }
};





// Fetch data untuk dropdown saat komponen di-mount
onMounted(fetchDropdownData);

</script>


<template>
    <VueFinalModal  
        class="flex justify-center items-center"
        content-class="relative w-full h-full lg:w-[50%] lg:h-[85%] p-5 rounded-lg bg-white flex flex-col"
        content-transition="vfm-fade"
        overlay-transition="vfm-fade">
        <form @submit.prevent="submitForm" class="flex flex-col lg:flex-wrap lg:flex-row justify-center gap-2 lg:gap-5 max-w-4xl">
            <h1 class="lg:py-10 w-full lg:text-3xl font-dm text-color2 font-bold text-center">Tambah Data</h1>

            <div class="w-full lg:w-[45%] flex flex-col gap-2">
                <label for="id_type">Jenis Kayu</label>
                <select v-model="formData.id_type" class="text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2">
                    <option value="" disabled>Pilih Jenis Kayu</option>
                    <option v-for="type in type_wood" :key="type.id" :value="type.id">
                        {{ type.type_name }}
                    </option>
                </select>
            </div>

            <div class="w-full lg:w-[45%] flex flex-col gap-2">
                <label for="id_wood">Kayu</label>
                <select v-model="formData.id_wood" class="text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2">
                    <option value="" disabled>Pilih Kayu</option>
                    <option v-for="wood in woods" :key="wood.id" :value="wood.id">
                        {{ wood.wood_name }}
                    </option>
                </select>
            </div>

            <div class="w-full lg:w-[45%] flex flex-col gap-2">
                <label for="size">Ukuran</label>
                <input v-model="formData.size" class="text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2" placeholder="Masukkan Ukuran" type="text" />
            </div>

            <div class="w-full lg:w-[45%] flex flex-col gap-2">
                <label for="quantity">Isi</label>
                <input v-model="formData.quantity" class="text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2" placeholder="Masukkan Isi" type="text" />
            </div>

            <div class="w-full lg:w-[45%] flex flex-col gap-2">
                <label for="price">Harga</label>
                <input v-model="formData.price" class="text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2" placeholder="Masukkan Harga" type="number" />
            </div>

            <div class="w-full lg:w-[45%] flex flex-col gap-2">
                <label for="image">Gambar</label>
                <input @change="onFileChange" class="text-sm file:h-full file:bg-color3 file:font-dm rounded-lg focus:ring-color3 focus:border-color2" placeholder="Masukkan Gambar" type="file" />
            </div>


            <div class="w-full flex justify-center px-5">
                <button type="submit" class="w-full mt-5 h-11 rounded-lg hover:bg-color3 bg-color3 text-white">Simpan</button>
            </div>
        </form>

    </VueFinalModal>
</template>
