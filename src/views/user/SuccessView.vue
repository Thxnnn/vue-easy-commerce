<script setup>
import { onMounted } from 'vue';
import UserLayout from '@/layouts/UserLayout.vue';

import { useCartStore } from '@/stores/user/cart';


const cartStore = useCartStore()

onMounted(() => {
    cartStore.loadCheckout()
    console.log(cartStore.checkout)
})


</script>

<template>
    <UserLayout>
        <div class="">
            <div class="">
                <p>Your order is sucessful !</p>
            </div>
            <div class="divider"></div>
            <div class="">

            </div>
            <div class="divider"></div>
            <div class="">
                <div v-for="item in cartStore.items" class="flex">
                    <div class="flex-1">
                        <img :src="item.imageUrl" class="w-full p-4" alt="">
                    </div>
                    <div class="flex-1">
                        <div class="h-full flex flex-col justify-between py-4">
                            <div class="">
                                <p class="font-semibold">{{ item.name }}</p>
                                <p>จำนวน: {{ item.quantity }}</p>
                            </div>
                            <RouterLink :to="{ name: 'cart' }" class="text-start font-bold">edit</RouterLink>
                        </div>

                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="">
                <div class="flex justify-between">
                    <p class="font-semibold">ราคาสินค้าทั้งหมด</p>
                    <p>{{ cartStore.summaryPrice }}</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-semibold">ค่าส่ง</p>
                    <p>0</p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
                <p class="font-semibold">ราคาทั้งสิ้น</p>
                <p>{{ cartStore.summaryPrice }}</p>
            </div>
            <div class="divider"></div>
            <div class="pb-8">
                <p>ขอบคุณที่ใช้บริการ Meow Shop</p>
            </div>

        </div>
    </UserLayout>
</template>
