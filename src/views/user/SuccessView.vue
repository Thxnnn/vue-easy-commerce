<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';


import UserLayout from '@/layouts/UserLayout.vue';

import { useCartStore } from '@/stores/user/cart';

const router = useRouter()

const cartStore = useCartStore()


const orderData = ref({})

onMounted(() => {
    cartStore.loadCheckout()
    if (cartStore.checkout.orderNumber) {
        orderData.value = cartStore.checkout
    }
    // console.log(cartStore.checkout)
})

const orderSuccess = () => {
    localStorage.removeItem('order-data')
    localStorage.removeItem('cart-data')
    router.push({ name: 'home' })
    
}


</script>

<template>
    <UserLayout>
        <div class="md:w-3/4 md:mx-auto mx-4 border-base-200 rounded-lg shadow-lg p-4 my-8">
            <div class="">
                <p class="font-bold text-xl">Your order is sucessful !</p>
                <p>Hi, {{ orderData.name }}</p>
                <p>เตรียมรอรับสินค้าของคุณได้เลย</p>
                
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div class="">
                    <p class="font-bold">Order date</p>
                    <p>{{ orderData.createDate }}</p>
                </div>
                <div class="">
                    <p class="font-bold">Order Number</p>
                    <p>{{ orderData.orderNumber }}</p>
                </div>
                <div class="">
                    <p class="font-bold">Payment method</p>
                    <p>{{ orderData.paymentMethod }}</p>
                </div>
                <div class="">
                    <p class="font-bold">Address</p>
                    <p>{{ orderData.address }}</p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="">
                <div v-for="product in orderData.products" class="flex">
                    <div class="flex-auto w-32">
                        <img :src="product.imageUrl" class="w-full p-4" alt="">
                    </div>
                    <div class="flex-auto w-64">
                        <div class="flex align-top justify-between p-4">
                            <div class="">
                                <p class="font-bold">{{ product.name }}</p>
                                <p class="font-semibold">{{ product.about }}</p>
                            </div>
                            <p>จำนวน: {{ product.quantity }}</p>
                            <p>{{ product.price }} ฿</p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="">
                <div class="flex justify-between">
                    <p class="font-bold">ราคาสินค้าทั้งหมด</p>
                    <p class="font-semibold">{{ orderData.totalPrice }}</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-bold">ค่าส่ง</p>
                    <p class="font-semibold">0</p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
                <p class="font-bold">ราคาทั้งสิ้น</p>
                <p class="font-semibold">{{ orderData.totalPrice }}</p>
            </div>
            <div class="divider"></div>
            <div class="pb-8">
                <p class="font-semibold">ขอบคุณที่ใช้บริการ Meow Shop</p>
            </div>

            <div class="flex justify-center ">
                <button @click="orderSuccess()" class="btn btn-primary">สั่งซื้อเสร็จสิ้น</button>
            </div>
        </div>

    </UserLayout>
</template>
