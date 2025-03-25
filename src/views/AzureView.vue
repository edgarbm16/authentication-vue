<template>
    <div class="container">
        <h1>
            Login Azure
        </h1>
        <button @click="login()">Login</button>
    </div>
</template>

<script lang="ts" setup>
    import { PublicClientApplication } from '@azure/msal-browser';
    import { defineComponent, onMounted } from 'vue';
    import AzureService from '@/services/AzureService';
    // export default defineComponent({
    //     name: 'AzureView',
        // data(){
        //     return {
        //         account: ''
        //     }
        // },
        // async created() {
        //     const azureService = new AzureService()
        //     $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
        // },
        // setup() {
            onMounted(() => {
                const azureService = new AzureService()
                $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
            })
            const account = ''
            const login = async() => {
                await $msalInstance.
                loginPopup({})
                .then(() => {
                    const myAccounts = this.$msalInstance.getAllAccounts()
                    accounts = myAccounts[0]
                    $emmiter.emit('login', this.account)
                })
                .catch( error => {
                    alert(error)
                })
            }

            return {
                account, login
            }
        // }
        // methods: {
        //     async login(){
        //         await this.$msalInstance.
        //         loginPopup({})
        //         .then(() => {
        //             const myAccounts = this.$msalInstance.getAllAccounts()
        //             this.accounts = myAccounts[0]
        //             this.$emmiter.emit('login', this.account)
        //         })
        //         .catch( error => {
        //             alert(error)
        //         })
        //     }
        // }
    // })
</script>