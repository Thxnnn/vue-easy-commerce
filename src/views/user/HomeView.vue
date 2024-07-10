<script setup>

import UserLayout from '@/layouts/UserLayout.vue';
import Product from '@/components/Product.vue';


import { useProductStore } from '@/stores/user/product';
import { useCartStore } from '@/stores/user/cart';


const productStore = useProductStore()
const cartStore = useCartStore()

const addToCart = (product) => {
    console.log("Hello add to Card")
    console.log(product)
    // console.log(cartStore.addToCart(product))
    cartStore.addToCart(product)
}

</script>

<template>
    <UserLayout>
        <div class="hero bg-base-200 h-96">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello to Meow</h1>

                </div>
            </div>
        </div>

        <Product 
            :products="productStore.list"
            :addToCart="addToCart"
        >

        </Product>
        
    </UserLayout>
</template>
