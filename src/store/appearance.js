import {ref} from "vue";
import {defineStore} from "pinia";

export const useAppearance = defineStore('appearance', ()=>{
    // state
    const name =  ref('lights-out');

    const backgroundColor = ref({
        primary: '#000000',
        secondary: '#16181c',
        third: '#212327',
        modal: '#5b708366'
    })

    const color = ref({
        primary: '#1d9bf0',
        secondary: '#8ecdf8',
        base: '#e7e9ea',
        baseSecondary: '#71767b'
    })

    const boxShadow = ref('rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px')

    const fontSize= ref(16)

    // actions
    const applyStyles = () => {
        const root = document.documentElement
        // background-colors
        root.style.setProperty('--background-primary', backgroundColor.value.primary)
        root.style.setProperty('--background-primary-alpha', backgroundColor.value.primary + 'a6')
        root.style.setProperty('--background-secondary', backgroundColor.value.secondary)
        root.style.setProperty('--background-third', backgroundColor.value.third)
        root.style.setProperty('--background-modal', backgroundColor.value.modal)
        // colors
        root.style.setProperty('--color-primary', color.value.primary)
        root.style.setProperty('--color-primary-alpha', color.value.primary + '12')
        root.style.setProperty('--color-secondary', color.value.secondary)
        root.style.setProperty('--color-base', color.value.base)
        root.style.setProperty('--color-base-secondary', color.value.baseSecondary)
        // box-shadow
        root.style.setProperty('--box-shadow', boxShadow.value)
        // font-size
        root.style.setProperty('--font-size',`${fontSize.value}px`)
    }

    return {
        name,
        backgroundColor,
        color,
        boxShadow,
        fontSize,
        applyStyles,
    }
})