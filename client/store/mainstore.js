import { defineStore } from 'pinia'
export const useMainStore = defineStore('mainstore', () => {

     const theloader = ref(false)

    const numberregex = computed(() => [
      v => v != '' && v != null || 'This field is required',
      v =>  /^[0-9]+$/.test(v)  || 'Only numbers are allowed'
    ])

    const emailregex = computed(() => [
      v => v != '' && v != null || 'This field is required',
      v => /.+@.+\..+/.test(v) || 'Enter a valid email',
    ])

  let breadcrumb = {
    /* the first navigation menu when its selected the values sit here
      on click we open the first menu
    */
    mainmenu: { value: '', id: '' }, 
    /* secondary navigation menu which values sit here 
      on lcick we open the secondary menu
    */
    secondmenu: { value: '', id: '' }
  }
    return { breadcrumb,numberregex,emailregex }
  })

