import {defineStore} from "pinia";
import {stateName} from "@/store/state-name";
import {getMusicRandom} from "@/api";
import type {RootObject} from '@/type/music/music'

export const useStore = defineStore(stateName.TEST,{
    state: ()=>({
        musicInfo: <musicInfo>{}
    }),
    getters: {

    },
    actions:{
        async getMusicRandom(){
            let result = await getMusicRandom()
            this.musicInfo = result.data
        }
    }
})