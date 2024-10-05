// plugins/axios.ts

import axios from 'axios';

export default defineNuxtPlugin(() => {
    const apiClient = axios.create({
        baseURL: 'http://api.udpadijaya.com/api', 
    });

    return {
        provide: {
        axios: apiClient,
        },
    };
});
