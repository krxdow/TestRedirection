<template>
  <div>
    <h1>Example page</h1>

      <button @click="signOut({callbackUrl:'/signout'})">Sign out</button>
  </div>

    <div>
        <h3>Authentication Overview</h3>
        <p>
            See all available authentication & session information below. Navigate to different sub-pages to test out the app.
        </p>
        <pre>Status: {{ status }}</pre>
        <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
        <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
        <pre>Decoded JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
        <pre>CSRF Token: {{ csrfToken }}</pre>
        <pre>Providers: {{ providers }}</pre>
        <pre>Session: {{ session }}</pre>
    </div>
</template>

<script lang="ts" setup>

definePageMeta(
    {
        middleware: 'auth'
    }
)



const { data, status, lastRefreshedAt, getCsrfToken, getProviders, signIn, signOut, getSession } = useAuth()
const session = await getSession()
const providers = await getProviders()
const csrfToken = await getCsrfToken()

const headers = useRequestHeaders(['cookie']) as HeadersInit
const { data: token } = await useFetch('/api/token', { headers })


</script>
