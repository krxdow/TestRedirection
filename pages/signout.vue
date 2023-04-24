<template>
  <div>
    You just signed out!
      <NuxtLink to="/">
          <button>home</button>
      </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ auth: false })
</script>
