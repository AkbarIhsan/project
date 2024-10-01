

<template>
    <div class="w-full h-auto">
        <div class="w-full h-full flex flex-col px-5 lg:px-20 justify-center mt-28 gap-10 relative">
            <div class="w-full h-10 rounded-3xl flex justify-around bg-color2 items-center font-dm tracking-widest font-semibold text-color1">
                PRODUCT KAMI
            </div>
            <div class="w-full h-auto rounded-3xl bg-color4/20 flex flex-wrap justify-evenly p-10 gap-5 relative">
                <div class="absolute z-40 rounded-3xl bg-color3 text-white px-4 py-3 -top-6">
                    <h1>BONDED</h1>
                </div>
                <Card/>
            </div>
            <div class="w-full h-auto rounded-3xl bg-color4/20 flex flex-wrap justify-evenly p-10 gap-5 relative">
                <div class="absolute z-40 rounded-3xl bg-color3 text-white px-4 py-3 -top-6">
                    <h1>NON BONDED</h1>
                </div>
                <CardNb/>
            </div>
        </div>
    </div>
</template>