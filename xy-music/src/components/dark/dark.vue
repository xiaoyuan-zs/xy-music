<template>
    <div>
        <el-switch 
        @click="toggleDark()"
         v-model="theme"
         inline-prompt
         :active-icon="Moon"
         :inactive-icon="Sunny"
         >
        </el-switch>
    </div>
</template>

<script setup lang='ts'>

import { useDark, useToggle } from '@vueuse/core'
import {Moon,Sunny} from '@element-plus/icons-vue'

let theme = ref<boolean>(false)

const isDark = useDark({
    selector: 'html',
    valueDark: 'dark',
    valueLight: 'light',
})
const toggleDark = useToggle(isDark)


</script>

<style scoped lang="scss">
div {

    span {
        cursor: pointer;
    }
}
</style>