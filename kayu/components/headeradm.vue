<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter

const isLoOpen = ref(false);
const router = useRouter(); // Dapatkan instance router

const toggleLo = () => {
    isLoOpen.value = !isLoOpen.value;
}

// Fungsi untuk logout
const logout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem('token'); // Pastikan nama token sesuai dengan yang kamu gunakan

    // Arahkan pengguna ke halaman login
    router.push('admin/login'); // Ganti dengan path login yang sesuai
}
</script>

<template>
    <div class="w-full h-16 lg:px-20 px-14 flex flex-row shadow-lg rounded-b-full fixed justify-between items-center bg-white z-30">
        <div>
            <h1 class="font-archivo lg:text-2xl text-color2">UD. PADI JAYA</h1>
        </div>
        <div class="flex flex-row gap-5 font-bold font-dm text-xs relative">
            <div class="h-full flex flex-row gap-2 items-center text-color2">
                <button @click="toggleLo" class="flex lg:hidden flex-col lg:flex-row items-center">
                    <div class="w-7 h-7 rounded-full">
                        <img src="@/assets/akun.png" alt="">
                    </div>
                    <h1>Admin</h1>
                </button>
                <button class="hidden lg:flex flex-col lg:flex-row items-center cursor-default">
                    <div class="w-7 h-7 rounded-full">
                        <img src="@/assets/akun.png" alt="">
                    </div>
                    <h1>Admin</h1>
                </button>
            </div>
            <button class="px-4 hidden lg:flex items-center gap-2 border-l border-black text-color3" @click="logout">
                <img class="w-5 h-5" src="@/assets/logout.png" alt="">LOGOUT
            </button>
            <button v-if="isLoOpen" class="absolute -bottom-20 -left-10 h-14 w-28 px-3 bg-white rounded-lg flex flex-row gap-2 items-center" @click="logout">
                <img class="w-5 h-5" src="@/assets/logout.png" alt="">LOGOUT
            </button>
        </div>
    </div>
</template>
