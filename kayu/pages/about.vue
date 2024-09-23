<template>
    <div class="w-full h-screen flex flex-col items-center justify-center bg-color1/20 gap-5">
        <div class="w-80 h-80 border flex justify-center items-center border-black">
            LOGO
        </div>
        <h1 class="font-dm tracking-widest text-xl font-extrabold text-color6">UD. PADI JAYA</h1>
    </div>
    <div class="w-full h-auto flex bg-color1/20 relative">
        <div class="flex lg:flex-row justify-center items-center text-center rounded-3xl bg-color4/20 mx-5 lg:mx-20 py-20 relative overflow-hidden">
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
                <div class="absolute w-72 h-[500px] rotate-[25deg] shadow-full">
                    <img class="w-full h-full" src="@\assets\pohonbg.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="absolute hidden lg:flex w-40 right-72 -top-32 h-[600px] rotate-[-59deg] overflow-hidden">
            <img class="w-full h-full" src="@\assets\hiasan.png" alt="">
        </div>
    </div>

    <div class="w-full h-[600px] px-5 lg:px-20 py-20 bg-color1/20">
        <div class="w-full h-full shadow-full rounded-3xl flex items-center justify-center">
            video
        </div>
    </div>

    <div class="w-full flex flex-col px-5 lg:px-20 pb-10 font-dm items-center text-color6 gap-5 bg-color1/20">
        <div class="w-full h-auto bg-color4/20 rounded-3xl border p-5 lg:p-20 gap-5 flex flex-col">
            <div class="text-center">
                <h1 class="font-dm tracking-widest font-extrabold text-3xl">F.A.Q</h1>
                <div class="rounded-3xl border-2 border-color3 w-full mt-3"></div>
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
            <h1 class="font-dm tracking-widest text-color6">TEMUKAN KAMI DI</h1>
            <div class="w-80 h-80 flex items-center justify-center">
                <iframe class="w-full h-full rounded-3xl z-40" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.6933304451077!2d111.98464207400833!3d-7.8222478921985275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78579399336d31%3A0x594efdd4d6ade5d7!2sLunacia!5e0!3m2!1sid!2sid!4v1727098449128!5m2!1sid!2sid" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>