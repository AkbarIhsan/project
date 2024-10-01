<template>
    <NuxtLink v-for="(nonbondedwood) in nonbondedwoods" :key="nonbondedwood.id" :to="`/`" class="w-72 h-96 rounded-3xl relative items-center p-3 overflow-hidden group z-30 shadow-lg bg-white flex flex-col text-color6 font-dm">
        <h1 class="font-dela font-bold tracking-widest py-1 text-center">{{ nonbondedwood.type_name }}</h1>
        <img :src="`http://localhost:8000/storage/${nonbondedwood.image}`" class="w-52 h-52 rounded-t-2xl" alt="">
        <div class="w-full">
            <h1 class="py-3 text-center">{{ nonbondedwood.wood_name }}</h1>
            <div class="flex flex-row justify-between">
                <h1 class="font-extrabold text-xl text-black">Rp {{ nonbondedwood.price }}</h1>
                <h1 class="text-sm">{{ nonbondedwood.size }}</h1>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">    
    import { onMounted } from 'vue';

    interface ApiResponse<T> {
        message: string;
        data: T;
    }

    interface Non_Bonded_woods {
        id: number;
        type_name: string; // Tambahkan type_name
        wood_name: string; // Tambahkan wood_name
        image: string;
        size: string;
        price: number;
    }

    // State untuk menyimpan data produk
    const nonbondedwoods = ref<Non_Bonded_woods[]>([]);

    // Fungsi untuk fetch data dari API
    const fetchNBwood = async () => {
        try {
            const response = await useNuxtApp().$axios.get<ApiResponse<Non_Bonded_woods[]>>('/productNonBonded', {
            });
            nonbondedwoods.value = response.data.data; // Mengakses data dari properti 'data'
            console.log('Data fetched:', response.data.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
onMounted(fetchNBwood);
</script>
