<template>
    <div class="w-full h-auto">
        <div class="w-full h-full flex flex-col px-5 lg:px-20 justify-center mt-28 gap-10">
            <div class="w-full h-14 rounded-3xl flex justify-around font-dm tracking-widest font-semibold text-color2">
                <NuxtLink class="bg-color6 rounded-l-3xl flex w-full h-full items-center justify-center hover:bg-color6/95 z-40 cursor-pointer border-r border-color2" to="">ALL</NuxtLink>
                <NuxtLink class="bg-color6 flex w-full h-full items-center justify-center hover:bg-color6/95 z-40 cursor-pointer border-r border-color2" to="">KASO</NuxtLink>
                <NuxtLink class="bg-color6 flex w-full h-full items-center justify-center hover:bg-color6/95 z-40 cursor-pointer border-r border-color2" to="">BALOK</NuxtLink>
                <NuxtLink class="bg-color6 flex w-full h-full items-center justify-center hover:bg-color6/95 z-40 cursor-pointer border-r border-color2" to="">PAPAN</NuxtLink>
                <NuxtLink class="bg-color6 rounded-r-3xl flex w-full h-full items-center justify-center hover:bg-color6/95 z-40 cursor-pointer" to="">TRIPLEK</NuxtLink>
            </div>
            <div class="w-full h-auto rounded-3xl bg-color4/20 flex flex-wrap justify-evenly p-10 gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
</template>