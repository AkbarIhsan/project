<script lang="ts" setup>
    definePageMeta({
        layout: 'custom',
    })
</script>

<template>
    <div class="w-full h-auto flex flex-col font-dm">
        <Headeradm/>
        <div class="w-full h-auto flex flex-col lg:px-20 px-5">
            <div class="w-full py-10 gap-2 flex flex-col">
                <h1 class="font-extrabold text-color2 lg:text-4xl">SELAMAT DATANG, Admin</h1>
                <h2 class="text-color3 text-xs">Silahkan edit daftar harga yang ingin anda tampilkan di website</h2>
            </div>
            <div class="w-full h-auto rounded-3xl bg-color4/20 shadow-lg px-5 relative overflow-x-scroll lg:overflow-hidden mb-5">
                <div class="py-5 flex flex-col items-start gap-5">
                    <h1 class="text-3xl font-extrabold text-color2">Daftar Harga</h1>
                    <button class="text-sm font-bold px-5 py-3 bg-blue-800 hover:bg-blue-800/95 rounded-3xl text-white">Tambah Data</button>
                    <table class="w-full text-sm lg:text-base">
                        <thead>
                            <tr class="bg-color4/20 text-color2">
                                <th class="rounded-tl-xl">No.</th>
                                <th>Jenis Kayu</th>
                                <th>Jenis Pohon</th>
                                <th>Ukuran</th>
                                <th>Isi/m3</th>
                                <th>Harga</th>
                                <th class="rounded-tr-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center">
                                <td>1</td>
                                <td>Kaso</td>
                                <td>borneo</td>
                                <td>14x12</td>
                                <td>104btg</td>
                                <td>1.054.333</td>
                                <td class="flex flex-row gap-2 items-center justify-center py-2 text-xs">
                                    <button class="bg-color3 hover:bg-color3/95 text-white px-3 py-2 rounded-3xl">Ubah</button>
                                    <button class="bg-red-700 hover:bg-red-700/95 text-white px-3 py-2 rounded-3xl">Hapus</button>
                                </td>
                            </tr>
                            <tr class="text-center">
                                <td>2</td>
                                <td>Kaso</td>
                                <td>borneo</td>
                                <td>14x12</td>
                                <td>104btg</td>
                                <td>1.054.333</td>
                                <td class="flex flex-row gap-2 items-center justify-center py-2 text-xs">
                                    <button class="bg-color3 hover:bg-color3/95 text-white px-3 py-2 rounded-3xl">Ubah</button>
                                    <button class="bg-red-700 hover:bg-red-700/95 text-white px-3 py-2 rounded-3xl">Hapus</button>
                                </td>
                            </tr>
                            <tr class="text-center">
                                <td>3</td>
                                <td>Kaso</td>
                                <td>borneo</td>
                                <td>14x12</td>
                                <td>104btg</td>
                                <td>1.054.333</td>
                                <td class="flex flex-row gap-2 items-center justify-center py-2 text-xs">
                                    <button class="bg-color3 hover:bg-color3/95 text-white px-3 py-2 rounded-3xl">Ubah</button>
                                    <button class="bg-red-700 hover:bg-red-700/95 text-white px-3 py-2 rounded-3xl">Hapus</button>
                                </td>
                            </tr>
                            <tr class="text-center">
                                <td>4</td>
                                <td>Kaso</td>
                                <td>borneo</td>
                                <td>14x12</td>
                                <td>104btg</td>
                                <td>1.054.333</td>
                                <td class="flex flex-row gap-2 items-center justify-center py-2 text-xs">
                                    <button class="bg-color3 hover:bg-color3/95 text-white px-3 py-2 rounded-3xl">Ubah</button>
                                    <button class="bg-red-700 hover:bg-red-700/95 text-white px-3 py-2 rounded-3xl">Hapus</button>
                                </td>
                            </tr>
                            <tr class="text-center">
                                <td>5</td>
                                <td>Kaso</td>
                                <td>borneo</td>
                                <td>14x12</td>
                                <td>104btg</td>
                                <td>1.054.333</td>
                                <td class="flex flex-row gap-2 items-center justify-center py-2 text-xs">
                                    <button class="bg-color3 hover:bg-color3/95 text-white px-3 py-2 rounded-3xl">Ubah</button>
                                    <button class="bg-red-700 hover:bg-red-700/95 text-white px-3 py-2 rounded-3xl">Hapus</button>
                                </td>
                            </tr>
                            <tr class="text-center">
                                <td>6</td>
                                <td>Kaso</td>
                                <td>borneo</td>
                                <td>14x12</td>
                                <td>104btg</td>
                                <td>1.054.333</td>
                                <td class="flex flex-row gap-2 items-center justify-center py-2 text-xs">
                                    <button class="bg-color3 hover:bg-color3/95 text-white px-3 py-2 rounded-3xl">Ubah</button>
                                    <button class="bg-red-700 hover:bg-red-700/95 text-white px-3 py-2 rounded-3xl">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>