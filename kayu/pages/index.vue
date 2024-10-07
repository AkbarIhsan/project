<template>
    <div class="w-full h-screen relative bg-color1/20 z-30">
        <img class="absolute w-full h-full bg-cover z-0" src="@\assets\bgkayu.png" alt="">
        <div class="flex flex-col-reverse gap- h-full items-center justify-center pb-20 px-20">
            <!-- <h3 class="absolute text-color7 top-32 text-lg font-dm">#Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, nulla.</h3> -->
            <NuxtLink class="border border-color6 text-color6 hover:scale-95 text-xs lg:text-base font-extrabold rounded-3xl mt-5 py-3 px-7 z-30" to="product">PESAN SEKARANG</NuxtLink>
            <h1 class="font-archivo font-extrabold text-center text-7xl lg:text-[7rem] text-color6 text-shadow-lg">
                PADI JAYA!
            </h1>
            <h6 class="text-color6 font-dm text-xl tracking-widest text-center">SELAMAT DATANG DI </h6>
        </div>
    </div>
    <div class="w-full h-auto pb-20 flex flex-col justify-center relative overflow-hidden gap-20 bg-color1/20 z-0">
        <div class="w-full mt-20 flex justify-center">
            <h1 class="font-dm px-20 text-color5 font-extrabold text-lg md:text-xl lg:text-3xl text-center tracking-widest">JUAL BELI KAYU ASLI INDONESIA</h1>
        </div>
        <div class="w-full h-auto flex">
            <div class="w-full h-auto rounded-3xl mx-5 md:mx-20 lg:mx-20 bg-color4/20 justify-center flex flex-wrap lg:flex-row md:flex-row gap-10 text-color6">
                <div class="w-full lg:max-w-72 h-auto py-10 rounded-3xl flex flex-col justify-center items-center gap-10">
                    <div class="w-full h-full px-5 lg:px-0 gap-5 flex flex-col justify-center items-center">
                        <img class="animate-bounce w-20 h-20" src="@\assets\star.png" alt="">
                        <div class="h-1/2">
                            <h1 class="text-center font-dela">BERKUALITAS</h1>
                            <h1 class="text-center text-sm font-dm font-light">Kami berkomitmen untuk selalu menyediakan kayu yang berkualitas tinggi.</h1>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:max-w-96 h-auto py-10 bg-color5/10 flex flex-col justify-center items-center gap-10">
                    <div class="w-full h-full px-5 lg:px-7 gap-5 flex flex-col justify-center items-center">
                        <img class="animate-bounce w-20 h-20" src="@\assets\discount.png" alt="">
                        <div class="h-1/2">
                            <h1 class="text-center font-dela">TERJANGKAU</h1>
                            <h1 class="text-center text-sm font-dm font-light">Kami menyediakan kayu berkualitas dengan harga yang pas sehingga anda puas, uang pun tidak terkuras</h1>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:max-w-72 h-auto py-10 rounded-3xl flex flex-col justify-center items-center gap-10">
                    <div class="w-full h-full px-5 lg:px-0 gap-5 flex flex-col justify-center items-center">
                        <img class="animate-bounce w-20 h-20" src="@\assets\product.png" alt="">
                        <div class="h-1/2">
                            <h1 class="text-center font-dela">KUANTITAS</h1>
                            <h1 class="text-center text-sm font-dm font-light">Stok kayu kami banyak. Tentu kamu unggul dalam segi kuantitas. Kami terus memasok kayu berkualitas</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-auto px-5 md:px-20 lg:px-20 gap-10 flex flex-col">
            <div class="font-dm w-full flex justify-center text-center font-extrabold text-3xl text-color5 tracking-widest">
                <h1>DAFTAR HARGA</h1>
            </div>

            <!-- tabel harga -->
            <!-- Menampilkan tabel bonded wood untuk setiap wood_name -->
            <div v-for="(woodGroup, woodName) in groupedBondedwoods" :key="woodName" class="w-full">
                <table class="w-full font-dm mt-5">
                    <thead>
                        <tr class="text-center">
                            <th colspan="5" class="bg-color2 text-color1 rounded-t-3xl py-3">{{ woodName }}</th>
                        </tr>
                        <tr class="bg-color4/20 text-color2 text-center">
                            <th>Jenis Kayu</th>
                            <th>Ukuran</th>
                            <th>Isi/m3</th>
                            <th>Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="bondedwood in woodGroup" :key="bondedwood.id" class="text-center">
                            <td>{{ bondedwood.type_name }}</td>
                            <td>{{ bondedwood.size }}</td>
                            <td>{{ bondedwood.quantity }}</td>
                            <td>{{ bondedwood.price }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Menampilkan tabel non bonded wood untuk setiap wood_name -->
            <div v-for="(woodGroup, woodName) in groupedNonBondedwoods" :key="woodName" class="w-full mt-10">
                <table class="w-full font-dm mt-5">
                    <thead>
                        <tr class="text-center">
                            <th colspan="4" class="bg-color2 text-color1 rounded-t-3xl py-3">{{ woodName }}</th>
                        </tr>
                        <tr class="bg-color4/20 text-color2 text-center">
                            <th>Jenis Kayu</th>
                            <th>Ukuran</th>
                            <th>Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="nonbondedwood in woodGroup" :key="nonbondedwood.id" class="text-center">
                            <td>{{ nonbondedwood.type_name }}</td>
                            <td>{{ nonbondedwood.size }}</td>
                            <td>{{ nonbondedwood.price }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';

interface ApiResponse<T> {
    message: string;
    data: T;
}

interface Bonded_woods {
    id: number;
    type_name: string;
    wood_name: string;
    image: string;
    size: string;
    price: number;
    quantity: string;
}

interface Non_Bonded_woods {
    id: number;
    type_name: string;
    wood_name: string;
    image: string;
    size: string;
    price: number;
}

// State untuk menyimpan data produk
const bondedwoods = ref<Bonded_woods[]>([]);
const nonbondedwoods = ref<Non_Bonded_woods[]>([]);

// Fungsi untuk fetch data dari API
const fetchBwood = async () => {
    try {
        const response = await useNuxtApp().$axios.get<Bonded_woods[]>('/productBonded');
        bondedwoods.value = response.data;
        console.log('Data fetched:', response.data); // Cek data respons di sini
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

const fetchNBwood = async () => {
    try {
        const response = await useNuxtApp().$axios.get<ApiResponse<Non_Bonded_woods[]>>('/productNonBonded');
        nonbondedwoods.value = response.data.data; // Mengakses data dari properti 'data'
        console.log('Data fetched:', response.data.data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

// Kelompokkan bondedwoods berdasarkan wood_name
const groupedBondedwoods = computed(() => {
    return bondedwoods.value.reduce((grouped: Record<string, Bonded_woods[]>, wood) => {
        if (!grouped[wood.wood_name]) {
            grouped[wood.wood_name] = [];
        }
        grouped[wood.wood_name].push(wood);
        return grouped;
    }, {});
});

// Kelompokkan nonbondedwoods berdasarkan wood_name
const groupedNonBondedwoods = computed(() => {
    return nonbondedwoods.value.reduce((grouped: Record<string, Non_Bonded_woods[]>, wood) => {
        if (!grouped[wood.wood_name]) {
            grouped[wood.wood_name] = [];
        }
        grouped[wood.wood_name].push(wood);
        return grouped;
    }, {});
});

onMounted(() => {
    fetchNBwood();
    fetchBwood();
});
</script>