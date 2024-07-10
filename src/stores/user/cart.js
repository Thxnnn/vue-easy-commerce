import { defineStore } from "pinia";


export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [
            {
                name: "coffee",
                imageUrl:
                  "https://images.unsplash.com/photo-1642778445549-92ec4fdcbb16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                quantity: 10,
                about: "coffee",
                status: "open",
                price: 100,
                quantity: 1
              },
        ]
    }),
    getters: {
        summaryQuantity (state) {
            return state.items.reduce((acc, item) => acc + item.quantity, 0)
        },
        summaryPrice (state) {
            return state.items.reduce((acc, item) => {
                return acc + (item.price * item.quantity)
            }, 0)
        }
    },
    actions: {
        addToCart (productData) {
            productData.quantity = 1
            this.items.push(productData);
        },
        updateQuantity (index, quantity) {
            this.items[index].quantity = quantity;
        },
        removeItemInCart (index) {
            this.items.splice(index, 1);
        },
    }
})