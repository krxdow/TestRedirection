<template>
  <div>
    You just signed out!
      <NuxtLink to="/">
          <button>home</button>
      </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({ auth: false })
</script>
