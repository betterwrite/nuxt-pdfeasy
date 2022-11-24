import { defineNuxtPlugin } from '#app'
import PDFEASY from 'pdfeasy/dist/client.esm.js'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      pdf: PDFEASY
    }
  }
})
