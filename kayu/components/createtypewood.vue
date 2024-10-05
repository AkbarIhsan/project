<script lang="ts" setup>
    import { VueFinalModal } from 'vue-final-modal';
    import axios from 'axios';

    const formData = ref({
        type_name: ''
    });

    const submitForm = async () => {
    try {
        const token = localStorage.getItem('token');
        
        const data = {
            type_name: formData.value.type_name
        };

        console.log('Data yang dikirim:', data);

        const response = await axios.post('http://api.udpadijaya.com/api/type-woods', data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        alert('Data berhasil ditambahkan');
        console.log('Response:', response.data);

        window.location.reload();
    } catch (error: any) {
        console.error('Error submitting form:', error.response ? error.response.data : error.message);
        alert('Terjadi kesalahan saat menyimpan data');
    }
};




</script>

<template>
    <VueFinalModal  
        class="flex justify-center items-center"
        content-class="relative w-full h-full lg:w-auto lg:h-auto lg:py-3 lg:px-2 p-5 rounded-lg bg-white flex flex-col"
        content-transition="vfm-fade"
        overlay-transition="vfm-fade">
        <form class="flex flex-col justify-center gap-2 lg:gap-5 max-w-4xl" @submit.prevent="submitForm" action="" method="post">
            <h1 class="lg:py-5 w-auto lg:text-3xl lg:px-10 font-dm text-color2 font-bold text-center">Tambah Jenis Kayu</h1>

            <div class="w-full px-5 flex flex-col gap-2">
                <label for="">Jenis Kayu</label>
                <input v-model="formData.type_name" class="text-sm w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2" placeholder="Masukkan Jenis Kayu" type="text" />
            </div>
            
            <div class="w-full flex justify-center px-5">
                <button type="submit" class="w-full mt-5 h-11 rounded-lg hover:bg-color3/ bg-color3 text-white">Simpan</button>
            </div>
        </form>

    </VueFinalModal>
</template>