import { defineStore} from "pinia";
import {ref} from "vue";

export const useModal = defineStore('modal', ()=>{
    // data
    const modal = ref(null);

    // methods
    const setModal = (name, data = null) => {
        modal.value = {name, data}
    }

    const removeModal = () => {
        modal.value = null;
    }

    return {
        modal,
        setModal,
        removeModal,
    }
})