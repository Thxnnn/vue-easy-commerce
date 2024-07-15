<script setup>
import { reactive, ref } from 'vue';

import UserLayout from '@/layouts/UserLayout.vue';

const profileImageUrl = ref('https://i.pinimg.com/564x/20/55/df/2055df0485f28aa1d633de4a51cdb7d3.jpg')

const handleFileUpload = (event) => {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            profileImageUrl.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

const formData = [
    {

        field: 'imgUrl',
        type: "file",
    },
    {
        name: "Email",
        field: 'email',
        placeholder: "Email",
        type: "email",
    },
    {
        name: "Name",
        field: 'name',
        placeholder: "Name",
        type: "text",
    },


]

const userFromData = reactive({
    email: '',
    name: '',
    imgUrl: ''

})

const updateProfile = () => {
    localStorage.setItem('profile-data', JSON.stringify(userFromData))
}


</script>

<template>
    <UserLayout>
        <div class="md:w-3/4 md:mx-auto mx-4 border-base-200 rounded-lg shadow-lg p-8 my-8">
            <p class="text-2xl font-bold">My Profile</p>

            <div class="mt-5">
                <div class="flex flex-col items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img :src="profileImageUrl" alt="">
                        </div>
                    </div>

                    <div v-for="form in formData" class="form-control w-full">
                        <div class="label">
                            <span class="label-text">{{ form.name }}</span>
                        </div>
                        <input v-if="form.type === 'file'" 
                            v-model="userFromData[form.field]" 
                            :type="form.type"
                            class="file-input file-input-sm w-full text-center mb-3" 
                            @change="handleFileUpload" />

                        <input v-else 
                            v-model="userFromData[form.field]" 
                            :type="form.type"
                            :placeholder="form.placeholder" 
                            class="input input-bordered w-full" />
                    </div>
                </div>

                <button @click="updateProfile()" class="w-full mt-4 btn btn-neutral">Update Profile</button>
            </div>
        </div>
    </UserLayout>
</template>
