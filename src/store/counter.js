import { defineStore } from 'pinia'

export const counterStore = defineStore('counter', {
    // arrow function recommended for full type inference
    state: () => {
      return {
        // all these properties will have their type inferred automatically
        count: 0,
      }
    },
    actions: {
        increment() {
            this.count++
        }
    }
  })