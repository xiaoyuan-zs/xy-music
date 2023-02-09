<template>
  <div>
    <h2>歌曲id: {{ info.id }}</h2>
    <h2>歌曲名称: {{ info.name }}</h2>
    <h2>歌曲作者: {{ info.auther }}</h2>
    <h2>歌曲图片: </h2> <img :src="info.picUrl" alt="" width="200">
    <h2>歌曲播放</h2>
    <audio controls autoplay loop>
      <source :src="info.mp3url" type="audio/mpeg"/>
    </audio>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "@/store";
import {Info} from '@/type/music/music'

const store = useStore()

const info = reactive<Info>({
  id: 1,
	name: '',
	auther: '',
	picUrl: '',
	mp3url: ''
})

onMounted( async ()=>{
  await store.getMusicRandom()
  getMusicInfo()
})


const getMusicInfo = ()=>{
  Object.assign(info,store.musicInfo.info)
}




</script>

<style scoped lang="less">

</style>