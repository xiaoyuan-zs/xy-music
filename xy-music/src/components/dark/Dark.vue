<template>
    <lay-config-provider :theme="theme" :dark-partial="darkPartial">
    </lay-config-provider>
</template>

<script setup lang='ts'>

const theme = ref('dark')
const darkPartial = {
    brightness: 100,
    contrast: 90,
    grayscale: 0,
    darkSchemeBackgroundColor: "black",
    darkSchemeTextColor: "white"
}

</script>

<style scoped></style>