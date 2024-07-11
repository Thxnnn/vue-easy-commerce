<script setup>
import { reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import UserLayout from '@/layouts/UserLayout.vue';


import { useCartStore } from '@/stores/user/cart';

const router = useRouter()

const cartStore = useCartStore()

const formData = [
    {
        name: "Email Address",
        field: 'email',
        placeholder: "Email Address",
        type: "email",
    },
    {
        name: "Name",
        field: 'name',
        placeholder: "Name",
        type: "text",
    },
    {
        name: "Address",
        field: 'address',
        placeholder: "Address",
    },
    {
        name: "Note",
        field: 'note',
        placeholder: "Note",
        type: "text",
    }
]

const userFromData = reactive({
    email: '',
    name: '',
    address: '',
    note: '',

})

const Payment = () => {
    console.log(userFromData)
    cartStore.checkout(userFromData)
    router.push({
        name: "success"
    })
}

</script>

<template>
    <UserLayout>
        <div class="">
            <h1 class="text-2xl font-bold mb-3">Checkout</h1>
        </div>
        <div class="flex flex-col-reverse md:flex-row">
            <section class="flex-auto w-full md:w-64 bg-base-200 p-4">
                <div class="">
                    <div v-for="form in formData" class="form-control w-full">
                        <div class="label">
                            <span class="label-text">{{ form.name }}</span>
                        </div>
                        <textarea v-if="form.name === 'Address'" class="textarea textarea-bordered"
                            :placeholder="form.placeholder"></textarea>
                        <input v-else v-model="userFromData[form.field]" :type="form.type"
                            :placeholder="form.placeholder" class="input input-bordered w-full" />
                    </div>

                    <button @click="Payment()" class="w-full mt-4 btn btn-neutral">ชำระเงิน</button>
                </div>
            </section>
            <section class="flex-auto w-full md:w-32 bg-slate-200 p-4">
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
                <div class="divider"></div>
                <div class="p-4">
                    <p class="text-xl font-bold">Order Summary</p>
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
                <div class="p-4 flex justify-between">
                    <p class="font-semibold">ราคาทั้งสิ้น</p>
                    <p>{{ cartStore.summaryPrice }}</p>
                </div>
            </section>
        </div>
    </UserLayout>
</template>
