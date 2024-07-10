
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [
      {
        name: "coffee",
        imageUrl:
          "https://images.unsplash.com/photo-1642778445549-92ec4fdcbb16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 1,
        about: "coffee",
        status: "open",
        price: 100,
      },
      {
        name: "iced latte",
        imageUrl:
          "https://images.unsplash.com/photo-1645592241237-3b05af6c194f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 1,
        about: "iced latte",
        status: "open",
        price: 100,
      },
      {
        name: "latte",
        imageUrl:
          "https://images.unsplash.com/photo-1527678357412-ef45dfbd9ecc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 1,
        about: "latte",
        status: "open",
        price: 100,
      },
      {
        name: "hot coffee",
        imageUrl:
          "https://images.unsplash.com/photo-1540692802289-42509772934e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 1,
        about: "hot coffee",
        status: "open",
        price: 100,
      },
    ]
  }),

  actions: {
    filterProducts (searchText) {
      return this.list.filter(product => product.name.includes(searchText))
    }
  }
})
