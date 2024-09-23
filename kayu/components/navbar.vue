<script lang="ts" setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import { useRouter } from 'vue-router'

    const isScrolled = ref(false)
    const isMenuOpen = ref(false)
    const isSearchOpen = ref(false)
    const router = useRouter()

    const isActive = (path: string) => router.currentRoute.value.path === path

        const handleScroll = () => {
            isScrolled.value = window.scrollY > 50
        }

        onMounted(() => {
            window.addEventListener('scroll', handleScroll)
        })

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll)
        })

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value
        }

        const toggleSearch = () => {
            isSearchOpen.value = !isSearchOpen.value
        }
</script>

<template>
    <div class="w-full h-auto justify-center items-center flex fixed z-50">
        <div class="absolute h-full flex items-center lg:left-20">
            <h1 class="lg:text-2xl font-extrabold text-color6 font-archivo">UD. PADI JAYA</h1>
        </div>

        <!-- tombol search -->
        <div class="absolute h-full flex items-center right-16 sm:right-20 z-50">
            <button @click="toggleSearch" class="focus:outline-none">
                <svg v-if="!isSearchOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- search -->
        <form v-if="isSearchOpen" class="absolute w-[80%] top-20 transition-all">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative flex items-center">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="shadow-full shadow-black/20 w-full py-3 ps-10 text-sm text-gray-900 border border-color6 rounded-full bg-gray-50 focus:ring-color6 focus:border-color6" placeholder="Kayu Jati, Kayu Tangan,.." required />
                <button type="submit" class="text-white absolute end-0 bottom- bg-color6 hover:bg-color6/95 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-r-full text-xs px-3 h-full dark:bg-color6 dark:hover:bg-color6 dark:focus:ring-color6">Search</button>
            </div>
        </form>

        <!-- Hamburger Icon -->
        <div class="absolute h-full flex lg:hidden items-center left-16 ">
            <button @click="toggleMenu" class="focus:outline-none">
                <div :class="['w-6 h-1 bg-color6 mb-1 transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></div>
                <div :class="['w-6 h-1 bg-color6 mb-1 transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"></div>
                <div :class="['w-6 h-1 bg-color6 transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></div>
            </button>
        </div>

        <!-- Menu for sm screens -->
        <nav v-if="isMenuOpen" class="absolute w-[95%] top-20 bg-white shadow-lg md:hidden rounded-lg z-50">
            <ul class="flex flex-col items-start p-4 space-y-2 text-sm font-bold text-color4">
                <li>
                    <NuxtLink @click="toggleMenu" :class="{'text-color2' : isActive('/')}" class="hover:text-color5" to="/">HOME</NuxtLink>
                </li>
                <li>
                    <NuxtLink @click="toggleMenu" :class="{'text-color2' : isActive('/about')}" class="hover:text-color5" to="/about">ABOUT US</NuxtLink>
                </li>
                <li>
                    <NuxtLink @click="toggleMenu" :class="{'text-color2' : isActive('/product')}" class="hover:text-color5" to="/product">PRODUCT</NuxtLink>
                </li>
            </ul>
        </nav>

    <!-- Original Nav for md and above -->
        <nav :class="['transition-all duration-300 flex items-center w-full', {'border-none h-16 sm:h-16 md:h-16 lg:h-20 bg-none': !isScrolled, 'bg-white border shadow-full shadow-black/5 h-16 sm:h-16 md:h-16 lg:h-16 rounded-b-full':isScrolled}]">
            <ul class="hidden lg:flex w-full h-[50%] justify-center items-center text-xs lg:text-sm font-bold tracking-widest gap-3 text-color5">
                <li class="md:px-5 lg:px-7 h-full flex items-center">
                    <NuxtLink :class="{'hover:border-none text-color2' : isActive('/')}" class=" hover:border-b hover:border-b-color6" to="/">HOME</NuxtLink>
                </li>
                <li class="md:px-5 lg:px-7 h-full flex items-center">
                    <NuxtLink :class="{'hover:border-none text-color2' : isActive('/about')}" class="hover:border-b hover:border-color6" to="/about">ABOUT US</NuxtLink>
                </li>
                <li class="h-full md:px-5 lg:px-7 flex items-center">
                    <NuxtLink :class="{'hover:border-none text-color2' : isActive('/product')}" class="hover:border-b hover:border-b-color6" to="/product">PRODUCT</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
