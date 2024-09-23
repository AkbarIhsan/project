<template>
    <NuxtLink :to="`/`" class="w-72 h-96 rounded-3xl relative p-3 overflow-hidden group z-40 shadow-lg bg-white flex flex-col text-color6 font-dm">
        <img :src="data.image" class="w-full h-60 rounded-t-2xl" alt="">
        <h1 class="py-3">{{ data.category }}</h1>
        <h1 class="font-extrabold text-xl text-black">Rp {{ data.price }}</h1>
        <div class="w-full h-full items-center text-sm flex justify-between">
            <h1>{{ data.size }}</h1>
            <h1>{{ data.quantity }} btg</h1>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
    defineProps({
        data: {
        type: Object,
        required: true
    }})
</script>
