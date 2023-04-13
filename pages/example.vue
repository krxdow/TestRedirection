<template>
  <div>
    <h1>Example page</h1>

      <button @click="signOut({callbackUrl:'/signout'})">Sign out</button>
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta, useAuth } from '#imports'
definePageMeta({ auth: false })

const { getSession, signIn, signOut } = useAuth()



definePageMeta({
  middleware: 'auth',
});
</script>
