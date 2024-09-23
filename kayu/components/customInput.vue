<template>
    <input 
    :type="type as 'text' | 'email' | 'password' | 'number'"
    :class="'w-full h-11 font-dm border px-3 text-color6 placeholder:text-color4 rounded-lg focus:ring-color3 focus:border-color2'"
    :id="id"
    :placeholder="placeholder"
    :name="name"
    :value="value">
</template>

<script setup lang="ts">
    const props = defineProps({
        type: {
            type: String,
            default: 'text'
        },
        id: String,
        placeholder: String,
        name: String,
        value: String
    })
</script>