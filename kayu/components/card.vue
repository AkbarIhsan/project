<template>
    <NuxtLink v-for="(bondedwood) in bondedwoods" :key="bondedwood.id" :to="`/`" class="w-72 h-96 rounded-3xl relative items-center p-3 overflow-hidden group z-30 shadow-lg bg-white flex flex-col text-color6 font-dm">
        <h1 class="font-dela font-bold tracking-widest py-1 text-center">{{ bondedwood.type_name }}</h1>
        <img :src="`http://localhost:8000/storage/${bondedwood.image}`" class="w-52 h-52 rounded-t-2xl" alt="">
        <div class="w-full">
            <h1 class="py-3 text-center">{{ bondedwood.wood_name }}</h1>
            <h1 class="font-extrabold text-xl text-black">Rp {{ bondedwood.price }}</h1>
            <div class="items-center text-sm flex justify-between">
            <h1>{{ bondedwood.size }}</h1>
            <h1>{{ bondedwood.quantity }}</h1>
        </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">    
    import { onMounted } from 'vue';

    interface Bonded_woods {
        id: number;
        type_name: string; // Tambahkan type_name
        wood_name: string; // Tambahkan wood_name
        image: string;
        size: string;
        price: number;
        quantity: string;
    }

    // State untuk menyimpan data produk
    const bondedwoods = ref<Bonded_woods[]>([]);

    // Fungsi untuk fetch data dari API
    const fetchBwood = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await useNuxtApp().$axios.get<Bonded_woods[]>('/productBonded', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        bondedwoods.value = response.data;
        console.log('Data fetched:', response.data); // Cek data respons di sini
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};
onMounted(fetchBwood);
</script>
