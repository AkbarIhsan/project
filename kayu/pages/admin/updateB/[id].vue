<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

definePageMeta({
    layout: 'custom',
});

const router = useRouter();
const woodId = ref<number>(0);

interface ApiResponse<T> {
    status: boolean;
    message: string;
    data: T;
}

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

const woodData = ref<Record<string, any>>({
    id_type: '',
    id_wood: '',
    size: '',
    price: '',
    quantity: '',
    image: null as File | null,
});

const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    woodData.value.image = target.files?.[0] || null;
};

// Fungsi untuk fetch jenis kayu dan kayu dari API
const fetchDropdownData = async () => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        // Fetch jenis kayu
        const typeresponse = await useNuxtApp().$axios.get<ApiResponse<TypeWood[]>>('/type-woods', { headers });
        type_wood.value = typeresponse.data.data;

        // Fetch kayu
        const woodresponse = await useNuxtApp().$axios.get<ApiResponse<Woods[]>>('/woods', { headers });
        woods.value = woodresponse.data.data;
    } catch (error) {
        console.error('Error fetching dropdown data:', error);
    }
};

// Fungsi untuk fetch data produk berdasarkan ID
const fetchWoodData = async (id: number) => {
    try {
        const token = localStorage.getItem('token');
        const response = await useNuxtApp().$axios.get(`/bonded-woods/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        woodData.value = { ...response.data };
    } catch (error) {
        console.error('Error fetching wood data:', error);
    }
};

// Fungsi untuk memperbarui data produk
const updateWood = async () => {
    if (!woodData.value.id_type || !woodData.value.id_wood || !woodData.value.size || !woodData.value.price || !woodData.value.quantity) {
        alert('Semua kolom harus diisi.');
        return;
    }

    try {
        const token = localStorage.getItem('token');
        const formData = new FormData();

        // Cek dan tambahkan data
        for (const key in woodData.value) {
            if (woodData.value[key] !== null) {
                formData.append(key, woodData.value[key]);
            }
        }

        // Kirim data
        const response = await useNuxtApp().$axios.post(`/bonded-woods/${woodId.value}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        alert('Data berhasil diperbarui.');
        router.push('/admin'); // Redirect ke halaman admin
    } catch (error: any) {
        console.error('Error updating wood data:', error);
        alert(error.response?.data?.message || 'Terjadi kesalahan saat memperbarui data.');
    }
};

onMounted(() => {
    woodId.value = Number(router.currentRoute.value.params.id);
    fetchWoodData(woodId.value);
    fetchDropdownData();
});
</script>

<template>
    <div class="w-full h-screen flex flex-col font-dm">
        <div class="w-full h-full flex flex-col items-center lg:px-20 px-5">
            <form @submit.prevent="updateWood" class="">
                <h1 class="lg:py-5 w-full lg:text-3xl font-dm text-color2 font-bold text-center">Ubah Data</h1>

                <div class="w-full flex flex-col gap-2">
                    <label for="id_type">Jenis Kayu</label>
                    <select v-model="woodData.id_type" class="text-sm w-full h-11 font-dm border px-3 text-color6 rounded-lg focus:ring-color3 focus:border-color2">
                        <option value="" disabled>Pilih Jenis Kayu</option>
                        <option v-for="type in type_wood" :key="type.id" :value="type.id">
                            {{ type.type_name }}
                        </option>
                    </select>
                </div>

                <div class="w-full flex flex-col gap-2">
                    <label for="id_wood">Kayu</label>
                    <select v-model="woodData.id_wood" class="text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2">
                        <option value="" disabled>Pilih Kayu</option>
                        <option v-for="wood in woods" :key="wood.id" :value="wood.id">
                            {{ wood.wood_name }}
                        </option>
                    </select>
                </div>

                <div class="w-full flex flex-col gap-2">
                    <label for="size">Ukuran</label>
                    <input v-model="woodData.size" class="text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2" placeholder="Masukkan Ukuran" type="text" />
                </div>

                <div class="w-full flex flex-col gap-2">
                    <label for="quantity">Isi</label>
                    <input v-model="woodData.quantity" class="text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2" placeholder="Masukkan Isi" type="text" />
                </div>

                <div class="w-full flex flex-col gap-2">
                    <label for="price">Harga</label>
                    <input v-model="woodData.price" class="text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2" placeholder="Masukkan Harga" type="text" />
                </div>

                <div class="w-full flex flex-col gap-2">
                    <label for="image">Gambar</label>
                    <input @change="onFileChange" class="text-sm file:h-full file:bg-color3 file:font-dm rounded-lg focus:ring-color3 focus:border-color2" type="file" />
                </div>

                <div class="w-full flex justify-center">
                    <button type="submit" class="w-full mt-5 h-11 rounded-lg hover:bg-color3 bg-color3 text-white">Simpan Perubahan</button>
                </div>
            </form>
        </div>
    </div>
</template>
