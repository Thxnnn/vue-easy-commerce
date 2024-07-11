<script setup>

import { onMounted } from 'vue';
import { RouterView } from 'vue-router'

import { useCartStore } from './stores/user/cart';

const cartStore = useCartStore()

onMounted(() => {
  console.log("havs data")
  cartStore.loadCart()
})


</script>

<template>
  <div>
    <RouterView />
  </div>
</template>