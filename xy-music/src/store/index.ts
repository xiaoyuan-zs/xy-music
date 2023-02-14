import {defineStore} from "pinia";
import {stateName} from "@/store/state-name";

export const useStore = defineStore(stateName.TEST,{
    state: ()=>({
    }),
    getters: {

    },
    actions:{
    }
})