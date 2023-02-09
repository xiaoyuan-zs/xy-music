import {defineStore} from "pinia";
import {stateName} from "@/store/state-name";
import {getMusicRandom} from "@/api";

export const useStore = defineStore(stateName.TEST,{
    state: ()=>({
        musicInfo: ''
    }),
    getters: {

    },
    actions:{
        async getMusicRandom(){
        }
    }
})