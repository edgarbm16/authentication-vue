
<template>
    <authenticator>
        <template v-slot="{user, signOut}">
            <div class="container">
                <h1>
                    Welcome, {{ user.username }}
                </h1>
                <button @click="signOut">Sign Out</button>
            </div>
        </template>
    </authenticator>
</template>

<script lang="ts" setup>
    import { Authenticator } from '@aws-amplify/ui-vue';
    import '@aws-amplify/ui-vue/styles.css'
</script>