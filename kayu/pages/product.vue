<script lang="ts" setup>
    import { ref } from 'vue'

    const items = ref([
        { id: 1, category: 'KASO', image: '/assets/kaso.jpg', price: '1.054.333', size: '4X6X400cm', quantity: 104 },
        { id: 2, category: 'BALOK', image: '/assets/balok.jpg', price: '1.200.000', size: '5X5X500cm', quantity: 50 },
        { id: 3, category: 'PAPAN', image: '/assets/papan.jpg', price: '2.500.000', size: '3X10X300cm', quantity: 200 },
        { id: 4, category: 'TRIPLEK', image: '/assets/triplek.jpg', price: '500.000', size: '3mmX244X122cm', quantity: 100 },
    ])

    const selectedCategory = ref('ALL')

    const filteredItems = computed(() => {
    if (selectedCategory.value === 'ALL') {
        return items.value
    }
    return items.value.filter(item => item.category === selectedCategory.value)
    })

    const filterCategory = (category: string) => {
        selectedCategory.value = category
    }

    const isFilOpen = ref(false);

    const toggleFil = () => {
        isFilOpen.value = !isFilOpen.value;
    };  
</script>

<template>
    <div class="w-full h-auto">
        <div class="w-full h-full flex flex-col px-5 lg:px-20 justify-center mt-28 gap-10 relative">
            <div class="w-full h-10 rounded-3xl flex justify-around font-dm tracking-widest font-semibold text-color1">
                <button @click="filterCategory('ALL')" class="bg-color2 rounded-l-3xl hidden lg:flex w-full h-full items-center justify-center hover:bg-color2/95 z-40 cursor-pointer border-r border-color1">ALL</button>
                <button @click="filterCategory('KASO')" class="bg-color2 hidden lg:flex w-full h-full items-center justify-center hover:bg-color2/95 z-40 cursor-pointer border-r border-color1">KASO</button>
                <button @click="filterCategory('BALOK')" class="bg-color2 hidden lg:flex w-full h-full items-center justify-center hover:bg-color2/95 z-40 cursor-pointer border-r border-color1">BALOK</button>
                <button @click="filterCategory('PAPAN')" class="bg-color2 hidden lg:flex w-full h-full items-center justify-center hover:bg-color2/95 z-40 cursor-pointer border-r border-color1">PAPAN</button>
                <button @click="filterCategory('TRIPLEK')" class="bg-color2 rounded-r-3xl hidden lg:flex w-full h-full items-center justify-center hover:bg-color2/95 z-40 cursor-pointer">TRIPLEK</button>
                <button @click="toggleFil" class="bg-color2 rounded-3xl w-full h-auto flex items-center justify-center lg:hidden hover:bg-color2/95 z-40">FILTER</button>
            </div>
            <div v-if="isFilOpen" class="w-full py-2 rounded-3xl flex flex-col bg-white font-dm border border-color2">
                <ul class="flex flex-col px-5 py-2 text-color2 z-40 text-center font-bold gap-2">
                    <li><button @click="() => { filterCategory('ALL'); toggleFil(); }">ALL</button></li>
                    <li><button @click="() => { filterCategory('KASO'); toggleFil(); }">KASO</button></li>
                    <li><button @click="() => { filterCategory('BALOK'); toggleFil(); }">BALOK</button></li>
                    <li><button @click="() => { filterCategory('PAPAN'); toggleFil(); }">PAPAN</button></li>
                    <li><button @click="() => { filterCategory('TRIPLEK'); toggleFil(); }">TRIPLEK</button></li>
                </ul>
            </div>
            <div class="w-full h-auto rounded-3xl bg-color4/20 flex flex-wrap justify-evenly p-10 gap-5">
                <Card v-for="item in filteredItems" :key="item.id" :data="item"/>
            </div>
        </div>
    </div>
</template>