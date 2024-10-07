<template>
    <div class="w-full h-screen flex fixed border">
        <div class="absolute right-0 bottom-0 flex-col gap-3 justify-end items-end px-2 py-10 flex">
            <div class="w-auto h-auto rounded-xl relative overflow-hidden bg-color6 cursor-pointer">
                <NuxtLink to="tel:+6281945545573"><img class="w-10 h-10 md:w-14 lg:w-14 md:h-14 lg:h-14" src="@\assets\phone-call.png" alt=""></NuxtLink>
            </div>
            <div class="w-auto h-auto rounded-xl relative overflow-hidden cursor-pointer">
                <NuxtLink to="wa.me/081945545573"><img class="w-10 h-10 md:w-14 lg:w-14 md:h-14 lg:h-14" src="@\assets\whatsapp.png" alt=""></NuxtLink>
            </div>
        </div>
    </div>
</template>