<script setup>

import { defineProps } from 'vue';

defineProps ({
    products: Array,
    addToCart: Function
})

</script>

<template>

    <section
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-4 mx-4 md:mx-0 justify-items-center">
        <div v-for="product in products" class="card bg-base-100 w-full shadow-xl">
            <figure>
                <img class="w-full" :src="product.imageUrl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ product.name }}</h2>
                <p>{{ product.about }}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" @click="addToCart(product)">Buy Now</button>
                </div>
            </div>
        </div>
    </section>
</template>