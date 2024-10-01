<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    const loading = ref(true);

    onMounted(() => {
    // Set a timeout to change loading to false after 3 seconds (3000ms)
    setTimeout(() => {
        loading.value = false;
    }, 3000); // Adjust the time as needed
});
</script>   

<template>
    <LoadingScreen v-if="loading" :class="{'transition-all transform duration-300 translate-y-full': !loading}"/>
    <Navbar/>
    <div class="w-full h-auto flex flex-col overflow-hidden">
        <slot/>
        <Buttonwa/>
        <Footer/>
    </div>
</template>

