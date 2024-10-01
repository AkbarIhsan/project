<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';
import axios from 'axios';
import { VueFinalModal } from 'vue-final-modal';

const props = defineProps<{
    id: number; // pastikan id hanya number
    onUpdate: (data: any) => void;
}>();

const form = ref({
    type_name: '',
    wood_name: '',
    size: '',
    quantity: '',
    price: 0,
    image: '',
});
// Fungsi untuk mengambil data kayu berdasarkan ID
const fetchWoodData = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await useNuxtApp().$axios.get(`http://localhost:8000/api/bonded-woods/${props.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        form.value = response.data; // Mengisi form dengan data produk yang ada
    } catch (error) {
        console.error('Error fetching wood data:', error);
    }
};

// Fungsi untuk mengupdate data
const updateWoodData = async () => {
    try {
        const token = localStorage.getItem('token');
        await useNuxtApp().$axios.post(`http://localhost:8000/api/bonded-woods/${props.id}`, form.value, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        props.onUpdate(form.value); // Mengupdate data di parent
        alert('Data berhasil diupdate!');
    } catch (error) {
        console.error('Error updating wood data:', error);
        alert('Terjadi kesalahan saat mengupdate data.');
    }
};

// Mengambil data saat modal dibuka
onMounted(fetchWoodData);
</script>

<template>
    <VueFinalModal>
        <div class="p-5">
            <h2 class="text-xl font-bold mb-4">Update Data Kayu</h2>
            <form @submit.prevent="updateWoodData">
                <div class="mb-4">
                    <label class="block mb-1">Jenis Kayu</label>
                    <input v-model="form.type_name" type="text" class="border rounded w-full px-3 py-2" required />
                </div>
                <div class="mb-4">
                    <label class="block mb-1">Nama Kayu</label>
                    <input v-model="form.wood_name" type="text" class="border rounded w-full px-3 py-2" required />
                </div>
                <div class="mb-4">
                    <label class="block mb-1">Ukuran</label>
                    <input v-model="form.size" type="text" class="border rounded w-full px-3 py-2" required />
                </div>
                <div class="mb-4">
                    <label class="block mb-1">Isi/m3</label>
                    <input v-model="form.quantity" type="text" class="border rounded w-full px-3 py-2" required />
                </div>
                <div class="mb-4">
                    <label class="block mb-1">Harga</label>
                    <input v-model.number="form.price" type="number" class="border rounded w-full px-3 py-2" required />
                </div>
                <div class="mb-4">
                    <label class="block mb-1">Gambar</label>
                    <input v-model="form.image" type="text" class="border rounded w-full px-3 py-2" />
                </div>
                <div class="flex justify-end">
                    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
                </div>
            </form>
        </div>
    </VueFinalModal>
</template>
