<template>
    <div>
        <br>
        <input v-model="username" type="text" placeholder="username (jsmith)">
        <input v-model="password" type="password" placeholder="password (hunter2)">
        <br>
        <button @click="signIn('credentials', {username:'jsmith', password:'hunter2' ,callbackUrl:'/example'})">
            Sign in with username and password
        </button>
        <br>
    </div>
</template>

<script setup lang="ts">


definePageMeta({ auth: false })

const username = ref('')
const password = ref('')

const { signIn } = useAuth()

</script>
