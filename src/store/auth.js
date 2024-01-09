import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore('auth', ()=>{
    // state
    const currentAccount = ref({
        fullname: 'Ersin Çöl',
        username : 'ErsinnColl',
        avatar: 'https://pbs.twimg.com/profile_images/1744673059154325506/wY-3EVY4_x96.jpg'
    });
    const accounts = ref([
        {
            fullname: 'Ersin Çöl',
            username : 'ErsinnColl',
            avatar: 'https://pbs.twimg.com/profile_images/1744673059154325506/wY-3EVY4_x96.jpg'
        },
        {
            fullname: 'Ersin Çöl',
            username: 'ErsinnCol',
            avatar: '',
        }
    ]);
    // getters

    // actions

    return {
        currentAccount,
        accounts,
    }
})