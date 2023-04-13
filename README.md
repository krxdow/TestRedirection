### Issue with the redirection with custom login page

I have a personalized login page and I want to redirect the user to the page he was trying to access via the
personalized login page.

By default, without a custom login page , the redirection is done to the page `example.vue`

To see the problem, In the file `server/api/auth/[...].ts` you can comment/uncomment the
line `pages: { signIn: '/login', }`.

```js
// server/api/auth/[...].ts

pages: {
    signIn: '/login'
}
```

In oder to have simple example, I don't add a Github provider.

For the moment, I add the callback option to the signin function in my login page.

```html
// pages/login.vue
<button @click="signIn('credentials', {username, password,callbackUrl:'/example' })">
    Sign in with username and password
</button>
```

I remind you that by default, without customization, this has the behavior I want

# Nuxt 3 Minimal Starter
## Setup
```bash
# yarn
npm install -g yarn
yarn install
```
## Development Server
```bash
npm run dev
```











