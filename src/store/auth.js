import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', ()=>{
    // state
    const currentAccount = ref({
        id: 1,
        fullname: 'Ersin Çöl',
        username : 'ErsinnColl',
        avatar: 'https://pbs.twimg.com/profile_images/1744673059154325506/wY-3EVY4_x96.jpg'
    });
    const accounts = ref([
        {
            id: 1,
            fullname: 'Ersin Çöl',
            username : 'ErsinnColl',
            avatar: 'https://pbs.twimg.com/profile_images/1744673059154325506/wY-3EVY4_x96.jpg'
        },
        {
            id: 2,
            fullname: 'Ersin Çöl',
            username: 'ErsinnCol',
            avatar: 'https://pbs.twimg.com/profile_images/1744671236053958656/My5RziMN_x96.jpg'
        }
    ]);
    // getters

    // actions
    function setCurrentAccount(account){
        currentAccount.value = account
    }

    return {
        currentAccount,
        accounts,
        setCurrentAccount
    }
})