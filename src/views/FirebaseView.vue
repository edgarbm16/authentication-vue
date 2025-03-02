<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                v-model="email"
                >            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"
                v-model="password"
                >
            </div>
            <button type="submit" class="btn btn-primary mt-2" @click.prevent="authUser">Submit</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
    import {ref, Ref} from 'vue'
    import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

    let email = ref("")
    let password = ref("")

    const authUser = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
            alert("User signed in successfully!");
        })
        .catch((error) => {
            alert(error.message)
        });
    }
</script>