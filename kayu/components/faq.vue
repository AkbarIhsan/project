<script lang="ts" setup>
    import { ref } from 'vue';

    const isFaqOpen = ref(false);

    const toggleFaq = () => {
        isFaqOpen.value = !isFaqOpen.value;
    };  
</script>

<template>
    <div class="flex flex-row justify-between mt-5 items-center bg-white/50 p-5" :class="{'rounded-3xl':!isFaqOpen, 'rounded-t-3xl':isFaqOpen}">
        <div class="flex flex-row gap-3 text-color2">
            <h1 class=" font-extrabold rounded-full items-center justify-center flex ">&#63;</h1>
            <h1><slot name="pertanyaan"/></h1>
        </div>
        <div class="z-40">
            <button @click="toggleFaq" class="w-6 h-6 cursor-pointer flex items-center">
                <img v-if="!isFaqOpen" class="w-6 h-6 rotate-180" src="@\assets\arrow.png" alt="">
                <img v-else class="w-6 h-6" src="@\assets\arrow.png" alt="">
            </button>
        </div>
    </div>
    <div>
        <div v-if="isFaqOpen" class="w-full h-auto px-10 pb-5 bg-white/50" :class="{'rounded-3xl':!isFaqOpen, 'rounded-b-3xl':isFaqOpen}">
            <p class="text-sm text-color3"><slot name="jawaban"/></p>
        </div>
    </div>
</template>