// plugins/axios.ts

import axios from 'axios';

export default defineNuxtPlugin(() => {
    const apiClient = axios.create({
        baseURL: 'http://localhost:8000/api', // Ganti ini dengan URL server lokal Anda
        // Anda juga bisa menambahkan opsi lain seperti timeout, headers, dll.
    });

  // Menyediakan Axios sebagai bagian dari Nuxt app
    return {
        provide: {
        axios: apiClient,
        },
    };
});
