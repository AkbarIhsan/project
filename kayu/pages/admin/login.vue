<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios, { AxiosError } from 'axios';

definePageMeta({
    layout: 'custom',
});

// State untuk email, password, dan error message
const email = ref('');
const password = ref('');
const errorMessage = ref(''); // State untuk menyimpan pesan error

// Tipe untuk respons error dari server
interface ErrorResponse {
    message: string;
    errors?: Record<string, string[]>; // Bisa juga diubah sesuai dengan struktur error dari server
}

// Fungsi untuk toggle visibilitas password
function togglePasswordVisibility(inputField: HTMLInputElement, label: HTMLElement) {
        if (inputField.type === 'password') {
            inputField.type = 'text'
            label.innerHTML = '<img class="lg:h-5 md:h-4 sm:h-4 h-4" src="https://i.ibb.co.com/B6jkXf1/eye-key-look-password-security-see-svgrepo-com.png" alt="">'
        } else {
            inputField.type = 'password'
            label.innerHTML = '<img class="lg:h-5 md:h-4 sm:h-4 h-4" src="https://i.ibb.co.com/Wp1WFhf/eye-password-see-view-svgrepo-com.png" alt="">'
        }
    }

// Dapatkan router untuk navigasi
const router = useRouter();

// Fungsi untuk melakukan login
const login = async () => {
    // Reset error message
    errorMessage.value = '';

    // Validasi input
    if (!email.value || !password.value) {
        errorMessage.value = 'Email dan password tidak boleh kosong.';
        return;
    }

    try {
        const response = await axios.post('http://api.udpadijaya.com/api/login', {
            email: email.value,
            password: password.value,
        });
        console.log('Login berhasil:', response.data);
        localStorage.setItem('token', response.data.token);
        
        // Arahkan ke halaman admin
        router.push('/admin'); 
    } catch (error: unknown) {
        const axiosError = error as AxiosError; 
        if (axiosError.response) {
            const errorData = axiosError.response.data as ErrorResponse; // Type assertion
            errorMessage.value = errorData.message || 'Login gagal.';
            console.error('Login gagal:', errorData);
        } else {
            errorMessage.value = 'Error tidak terduga. Silakan coba lagi.';
            console.error('Error tidak terduga:', axiosError.message);
        }
    }
};

onMounted(() => {
    const passwordToggle = document.querySelector('.js-password-toggle') as HTMLInputElement

    passwordToggle?.addEventListener('change', function () {
        const inputFieldPas = document.querySelector('.js-password') as HTMLInputElement
        const passwordLabel = document.querySelector('.js-password-label') as HTMLElement
        togglePasswordVisibility(inputFieldPas, passwordLabel)
    })
});
</script>

<template>
    <div class="w-full h-screen flex items-center justify-center bg-color1/20">
        <div class="lg:w-[30%] lg:h-[85%] w-full h-full lg:shadow-full rounded-3xl pt-10 flex flex-col lg:bg-white">
            <div class="w-full h-auto flex justify-center">
                <div class="w-36 h-36 lg:w-32 lg:h-32">
                    <img src="@\assets\PADIJAYA.png" alt="">
                </div>
            </div>
            <h1 class="px-5 pt-7 font-dm font-bold text-color3">Login Admin Padi Jaya</h1>
            <form class="w-full h-full flex flex-col p-5 gap-5" @submit.prevent="login"> <!-- Gunakan prevent untuk mencegah reload -->
                <div class="flex flex-col gap-2">
                    <label for="">Email</label>
                    <input v-model="email" class="text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2" placeholder="Masukkan Email" type="email"/>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="">Password</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 right-0 flex items-center px-2">
                            <input class="hidden js-password-toggle" id="togglePasswordVisibility" type="checkbox" />
                            <label class="py-1 text-sm cursor-pointer js-password-label" for="togglePasswordVisibility"><img class="h-4 lg:h-5 md:h-4 sm:h-4 w-4 lg:w-5 md:w-4 sm:w-4" src="https://i.ibb.co.com/Wp1WFhf/eye-password-see-view-svgrepo-com.png" alt=""></label>
                        </div>
                        <input id="inputFieldPas" v-model="password" class="js-password text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2" placeholder="Masukkan Password" type="password"/>
                    </div>
                </div>
                <p class="text-red-500 text-sm">{{ errorMessage }}</p> <!-- Tampilkan pesan error jika ada -->
                <button type="submit" class="w-full h-11 rounded-lg bg-color3 text-white z-50">Masuk</button>
            </form>
        </div>
    </div>
</template>
