<template>
    <div class="w-full bg-color1/20 px-5 md:px-20 lg:px-20 py-5">
        <div class="w-full h-3 bg-color6 rounded-full"></div>
        <div class="w-full h-auto flex flex-col items-center mt-10">
            <div class="w-full flex flex-row text-4xl justify-center lg:justify-start">
                <h1 class="font-archivo font-extrabold text-color2">UD. PADI JAYA</h1>
            </div>
            <div class="flex flex-row w-full h-auto justify-between pt-5">
                <div class="flex flex-col w-1/3 h-full gap-y-4">
                    <h1 class="text-color2 font-semibold">Tentang Kami</h1>
                    <p class="text-color3 font-thin text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non rem dolores necessitatibus tempora! Quibusdam fugit magni animi! Accusamus enim dolorem nihil ut beatae sapiente cupiditate atque officia!</p>
                </div>
                <div class="flex flex-col items-center w-1/4 ">
                    <div class="flex flex-col gap-y-4">
                        <div class="flex">
                            <h1 class="text-color2 font-semibold">Services</h1>
                        </div>
                        <div class="flex flex-col font-thin text-color3 text-sm">
                            <NuxtLink to="">Home</NuxtLink>
                            <NuxtLink to="">About Us</NuxtLink>
                            <NuxtLink to="">Product</NuxtLink>
                        </div>
                        </div>
                    </div>
                <div class="flex flex-col w-1/4 gap-4">
                    <div>
                        <h1 class="text-color2 font-semibold">Follow Us</h1>
                    </div>
                    <div class="flex-col flex font-thin text-color3 text-sm">
                        <NuxtLink to="">Facebook</NuxtLink>
                        <NuxtLink to="">WhatsApp</NuxtLink>
                        <NuxtLink to="">Email</NuxtLink>
                    </div>
                </div>
            </div>
            <!-- <div class="w-20 h-20 border border-black mt-5">
                logo
            </div> -->
            <div class="w-full h-auto flex flex-col justify-center text-center text-xs lg:text-sm text-color2 pt-5">
                <h1 class="font-semibold mt-5">Copyright &copy; 2024 <b>UD. Padi Jaya</b> All Rights Reserved.</h1>
                <p>Seluruh konten, informasi dan transaksi yang terjadi melalui website udpadijaya.com merupakan tanggung jawab UD. Padi Jaya</p>
            </div>
        </div>
    </div>
</template>