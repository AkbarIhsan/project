<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import { ModalsContainer, useModal } from 'vue-final-modal';
    import Createdata from '~/components/createdata.vue';
    import Createtypewood from '~/components/createtypewood.vue';
    import Createwood from '~/components/createwood.vue';
    import CreatedataN from '~/components/createdataN.vue';

    definePageMeta({
        layout: 'custom',
        middleware: ['auth'],
    });

    interface ApiResponse<T> {
        status: boolean;
        message: string;
        data: T;
    }

    const{open : openCreateModal} = useModal({
        component: Createdata
    })

    const{open : openCreateNModal} = useModal({
        component: CreatedataN
    })

    const{open : openTypeModal} = useModal({
        component: Createtypewood
    })

    const{open : openWoodModal} = useModal({
        component: Createwood
    })

    interface Wood {
        id: number;
        wood_name: string;
    }

    interface Typewood {
        id: number;
        type_name: string;
    }

    interface Bonded_woods {
        id: number;
        type_name: string; // Tambahkan type_name
        wood_name: string; // Tambahkan wood_name
        image: string;
        size: string;
        price: number;
        quantity: string;
    }

    interface Non_Bonded_woods {
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
        const nonbondedwoods = ref<Non_Bonded_woods[]>([]);
    const typewood = ref<Typewood[]>([]);
    const wood = ref<Wood[]>([]);

    // Fungsi untuk fetch data dari API
    const fetchBwood = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await useNuxtApp().$axios.get<Bonded_woods[]>('/bonded-woods', {
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

    const fetchNBwood = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await useNuxtApp().$axios.get<Non_Bonded_woods[]>('/non-bonded-woods', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            nonbondedwoods.value = response.data;
            console.log('Data fetched:', response.data); // Cek data respons di sini
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const fetchTwData = async () => {
        try {
            const token = localStorage.getItem('token');
            // Fetch jenis kayu
            const typeresponse = await useNuxtApp().$axios.get<ApiResponse<Typewood[]>>('/type-woods', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            typewood.value = typeresponse.data.data;
            console.log('Jenis Kayu:', typeresponse.data);

            // Fetch kayu
            const woodresponse = await useNuxtApp().$axios.get<ApiResponse<Wood[]>>('/woods', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            
            wood.value = woodresponse.data.data;
            console.log('Kayu:', woodresponse.data);
        } catch (error) {
            console.error('Error fetching dropdown data:', error);
        }
    };

    const deleteTwood = async (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus jenis kayu ini?')) {
            try {
                const token = localStorage.getItem('token'); // Fetch the token from localStorage or your state management
                await useNuxtApp().$axios.delete(`/type-woods/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // Setelah menghapus, fetch ulang data
                await fetchTwData();
                alert('Produk berhasil dihapus.');
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('Terjadi kesalahan saat menghapus produk.');
            }
        }
    };

    const deleteWood = async (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus kayu ini?')) {
            try {
                const token = localStorage.getItem('token'); // Fetch the token from localStorage or your state management
                await useNuxtApp().$axios.delete(`/woods/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // Setelah menghapus, fetch ulang data
                await fetchTwData();
                alert('Produk berhasil dihapus.');
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('Terjadi kesalahan saat menghapus produk.');
            }
        }
    };


    // Fungsi untuk menghapus produk
    const deleteKayu = async (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
            try {
                const token = localStorage.getItem('token'); // Fetch the token from localStorage or your state management
                await useNuxtApp().$axios.delete(`/bonded-woods/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // Setelah menghapus, fetch ulang data
                await fetchBwood();
                alert('Produk berhasil dihapus.');
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('Terjadi kesalahan saat menghapus produk.');
            }
        }
    };

        // Fungsi untuk menghapus produk
        const deleteNonB = async (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
            try {
                const token = localStorage.getItem('token'); // Fetch the token from localStorage or your state management
                await useNuxtApp().$axios.delete(`/non-bonded-woods/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // Setelah menghapus, fetch ulang data
                await fetchNBwood();
                alert('Produk berhasil dihapus.');
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('Terjadi kesalahan saat menghapus produk.');
            }
        }
    };

    // Mengambil data saat komponen di-mount
    onMounted(()=>{
        fetchNBwood();
        fetchBwood();
        fetchTwData();
    });
</script>

<template>
    <div class="w-full h-auto flex flex-col font-dm">
        <Headeradm />
        <ModalsContainer/>
        <div class="w-full h-auto flex flex-col lg:px-20 px-5">
            <div class="w-full py-10 gap-2 flex flex-col">
                <h1 class="font-extrabold text-color2 lg:text-4xl">SELAMAT DATANG, Admin</h1>
                <h2 class="text-color3 text-xs">Silahkan edit product yang ingin anda tampilkan di website</h2>
            </div>
            <div class="w-full h-auto rounded-3xl bg-color4/20 shadow-lg px-5 relative overflow-x-scroll lg:overflow-hidden mb-5">
                <div class="py-5 flex flex-col justify-center gap-5">
                    <h1 class="text-3xl font-extrabold text-color2">Daftar Product</h1>
                    <div class="flex flex-row gap-2">
                        <button @click="openCreateModal" class="text-sm font-bold px-5 py-3 bg-blue-800 hover:bg-blue-800/95 rounded-3xl text-white">Tambah Data Bonded</button>
                        <button @click="openCreateNModal" class="text-sm font-bold px-5 py-3 bg-blue-800 hover:bg-blue-800/95 rounded-3xl text-white">Tambah Data Non Bonded</button>
                        <button @click="openTypeModal" class="text-sm font-bold px-5 py-3 bg-blue-800 hover:bg-blue-800/95 rounded-3xl text-white">Tambah Jenis Kayu</button>
                        <button @click="openWoodModal" class="text-sm font-bold px-5 py-3 bg-blue-800 hover:bg-blue-800/95 rounded-3xl text-white">Tambah Kayu</button>
                    </div>
                    <table class="w-full text-sm lg:text-base">
                        <thead>
                            <tr class="text-center">
                                <th colspan="8" class="bg-color2 text-color1 rounded-t-3xl py-3">Bonded</th>
                            </tr>
                            <tr class="bg-color4/20 text-color2">
                                <th class="rounded-tl-xl">No.</th>
                                <th>Jenis Kayu</th>
                                <th>Kayu</th>
                                <th>Ukuran</th>
                                <th>Isi/m3</th>
                                <th>Harga</th>
                                <th class="w-32">Gambar</th>
                                <th class="rounded-tr-xl w-44">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(bondedwood, index) in bondedwoods" :key="bondedwood.id" class="text-center">
                                <td>{{ index + 1 }}</td>
                                <td>{{ bondedwood.type_name }}</td>
                                <td>{{ bondedwood.wood_name }}</td>
                                <td>{{ bondedwood.size }}</td>
                                <td>{{ bondedwood.quantity }}</td>
                                <td>{{ bondedwood.price }}</td>
                                <td class="w-32"><img :src="`http://localhost:8000/storage/${bondedwood.image}`" alt="gambar kayu" class="w-16 h-16 ml-7 object-cover" /></td>
                                <td class="w-44 flex flex-row gap-2 items-center justify-center py-2 text-xs">
                                    <button @click="() => $router.push(`/admin/updateB/${bondedwood.id}`)" class="bg-color3 hover:bg-color3/95 text-white px-3 py-2 rounded-3xl">Ubah</button>
                                    <button @click="deleteKayu(bondedwood.id)" class="bg-red-700 hover:bg-red-700/95 text-white px-3 py-2 rounded-3xl">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="w-full text-sm lg:text-base">
                        <thead>
                            <tr class="text-center">
                                <th colspan="8" class="bg-color2 text-color1 rounded-t-3xl py-3">Non Bonded</th>
                            </tr>
                            <tr class="bg-color4/20 text-color2 ">
                                <th class="rounded-tl-xl">No.</th>
                                <th>Jenis Kayu</th>
                                <th>Kayu</th>
                                <th>Ukuran</th>
                                <th>Harga</th>
                                <th>Gambar</th>
                                <th class="rounded-tr-xl w-44">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(nonbondedwood, index) in nonbondedwoods" :key="nonbondedwood.id" class="text-center">
                                <td>{{ index + 1 }}</td>
                                <td>{{ nonbondedwood.type_name }}</td>
                                <td>{{ nonbondedwood.wood_name }}</td>
                                <td>{{ nonbondedwood.size }}</td>
                                <td>{{ nonbondedwood.price }}</td>
                                <td class="w-32"><img :src="`http://localhost:8000/storage/${nonbondedwood.image}`" alt="gambar kayu" class="w-16 h-16 ml-7 object-cover" /></td>
                                <td class="w-44 flex flex-row gap-2 items-center justify-center py-2 text-xs">
                                    <button @click="() => $router.push(`/admin/updateNB/${nonbondedwood.id}`)" class="bg-color3 hover:bg-color3/95 text-white px-3 py-2 rounded-3xl">Ubah</button>
                                    <button @click="deleteNonB(nonbondedwood.id)" class="bg-red-700 hover:bg-red-700/95 text-white px-3 py-2 rounded-3xl">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="w-full text-sm lg:text-base">
                        <thead>
                            <tr class="bg-color4/20 text-color2 flex w-72 justify-between px-5">
                                <th class="rounded-tl-xl">No.</th>
                                <th>Jenis Kayu</th>
                                <th class="rounded-tr-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(type, index) in typewood" :key="type.id" class="text-center w-72 px-5 flex justify-between">
                                <td class="pl-2">{{ index + 1 }}</td>
                                <td>{{ type.type_name }}</td>
                                <td class="flex flex-row gap-2 items-center justify-center py-2 text-xs">
                                    <button @click="deleteTwood(type.id)" class="bg-red-700 hover:bg-red-700/95 text-white px-3 py-2 rounded-3xl">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="w-full text-sm lg:text-base">
                        <thead>
                            <tr class="bg-color4/20 text-color2 w-72 flex justify-between px-5">
                                <th class="rounded-tl-xl">No.</th>
                                <th>Kayu</th>
                                <th class="rounded-tr-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(woods, index) in wood" :key="woods.id" class="text-center flex justify-between w-72 px-5">
                                <td class="pl-2">{{ index + 1 }}</td>
                                <td>{{ woods.wood_name }}</td>
                                <td class="flex flex-row gap-2 items-center justify-center py-2 text-xs">
                                    <button @click="deleteWood(woods.id)" class="bg-red-700 hover:bg-red-700/95 text-white px-3 py-2 rounded-3xl">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>
