<script lang="ts" setup>
    import { onMounted } from 'vue';

    definePageMeta({
        layout: 'custom',
    })

    function togglePasswordVisibility(inputField: HTMLInputElement, label: HTMLElement) {
        if (inputField.type === 'password') {
            inputField.type = 'text'
            label.innerHTML = '<img class="lg:h-5 md:h-4 sm:h-4 h-4" src="https://i.ibb.co.com/B6jkXf1/eye-key-look-password-security-see-svgrepo-com.png" alt="">'
        } else {
            inputField.type = 'password'
            label.innerHTML = '<img class="lg:h-5 md:h-4 sm:h-4 h-4" src="https://i.ibb.co.com/Wp1WFhf/eye-password-see-view-svgrepo-com.png" alt="">'
        }
    }

    onMounted(()=>{
        const passwordToggle = document.querySelector('.js-password-toggle') as HTMLInputElement

        passwordToggle?.addEventListener('change', function () {
            const inputFieldPas = document.querySelector('.js-password') as HTMLInputElement
            const passwordLabel = document.querySelector('.js-password-label') as HTMLElement
            togglePasswordVisibility(inputFieldPas, passwordLabel)
        })
    })
</script>

<template>
    <div class="w-full h-screen flex items-center justify-center bg-color1/20">
        <div class="lg:w-[30%] lg:h-[80%] w-full h-full lg:shadow-full rounded-3xl pt-10 flex flex-col lg:bg-white">
            <div class="w-full h-auto flex justify-center">
                <div class="w-36 h-36 lg:w-32 lg:h-32 border border-black">
                    logo
                </div>
            </div>
            <h1 class="px-5 pt-7 font-dm font-bold text-color3">Login Admin Padi Jaya</h1>
            <form class="w-full h-full flex flex-col p-5 gap-5" action="">
                <div class="flex flex-col gap-2">
                    <label for="">Username</label>
                    <CustomInput class="text-sm" placeholder="Masukkan Username" type="text"/>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="">Password</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 right-0 flex items-center px-2">
                            <input class="hidden js-password-toggle" id="toggle" type="checkbox" />
                            <label class="py-1 text-sm cursor-pointer js-password-label" for="toggle"><img class="h-4 lg:h-5 md:h-4 sm:h-4 w-4 lg:w-5 md:w-4 sm:w-4" src="https://i.ibb.co.com/Wp1WFhf/eye-password-see-view-svgrepo-com.png" alt=""></label>
                        </div>
                        <CustomInput id="inputFieldPas" class="js-password text-sm" placeholder="Masukkan Password" type="password"/>
                    </div>
                </div>
                <button class="w-full h-11 rounded-lg bg-color3 text-white">Masuk</button>
            </form>
        </div>
    </div>
</template>