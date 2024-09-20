<template>
    <div class="w-full h-screen flex flex-col items-center justify-center bg-color2 gap-5">
        <div class="w-80 h-80 border flex justify-center items-center border-black">
            LOGO
        </div>
        <h1 class="font-dm tracking-widest text-xl font-extrabold text-color6">UD. PADI JAYA</h1>
    </div>
    <div class="w-full h-auto flex">
        <div class="flex lg:flex-row justify-center items-center text-center rounded-3xl bg-color4/20 mx-5 lg:mx-20 py-5">
            <div class="w-full flex flex-col gap-5 px-5 lg:px-10">
                <div>
                    <h1 class="font-dela text-2xl text-color6">TENTANG KAMI</h1>
                    <h2 class="text-xs">Lorem ipsum dolor sit amet.</h2>
                </div>
                <p class="font-dm text-sm lg:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eum sunt sequi eveniet, vero magnam blanditiis dicta voluptas quisquam distinctio at, dolorem libero ullam! Officia cupiditate eius aut eaque ducimus!
                </p>
            </div>
            <div class="w-full justify-center items-center hidden lg:flex">
                <div class="w-80 h-80 border border-black">
                    
                </div>
            </div>
        </div>
    </div>

    <div class="w-full flex flex-col px-5 lg:px-20  mt-20 font-dm items-center text-color7 gap-5">
        <div class="w-full h-auto bg-color4/20 rounded-3xl border p-5 lg:p-20 gap-5 flex flex-col">
            <div class="text-center">
                <h1 class="font-dm tracking-widest font-extrabold text-3xl">F.A.Q</h1>
                <div class="rounded-3xl border-2 border-color7 w-full mt-3"></div>
            </div>
            <div class="w-full flex flex-col">
                <Faq>
                    <template #pertanyaan>
                        Kenapa harus membeli kayu di sini?
                    </template>
                    <template #jawaban>
                        Karena kayu UD. Padi Jaya Lorem, ipsum dolor.
                    </template>
                </Faq>
                <Faq>
                    <template #pertanyaan>
                        Apakah bisa pemesanan dari Jabodetabek?
                    </template>
                    <template #jawaban>
                        Untuk pemesanan dari Jabodetabek Lorem ipsum dolor sit amet.
                    </template>
                </Faq>
                <Faq>
                    <template #pertanyaan>
                        Bagaimanakah cara memesan kayu melalui web?
                    </template>
                    <template #jawaban>
                        Untuk cara memesan saat ini hanya lewat whatsapp atau sms saja, anda bisa menekan icon wa di sebelah kanan ini
                    </template>
                </Faq>
                <Faq>
                    <template #pertanyaan>
                        Apakah UD. Padi Jaya menerima pembayaran transfer?
                    </template>
                    <template #jawaban>
                        UD. Padi Jaya menerima pembayaran transfer melalui bank Mandiri, BCA, dan BRI.
                    </template>
                </Faq>
            </div>
        </div>

        <div class="w-full h-auto mt-2 lg:mt-5 justify-center items-center flex flex-col gap-5 px-5 py-5">
            <h1 class="font-dm tracking-widest text-color7">TEMUKAN KAMI DI</h1>
            <div class="w-80 h-80 flex items-center justify-center border border-black">
                maps
            </div>
        </div>
    </div>
</template>