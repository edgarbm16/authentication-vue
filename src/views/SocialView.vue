<template>
    <div class="container">
      <h1>
        Social Login        
      </h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>
            Login with Google
          </h3>
          <button @click="loginGoogle">
            Sign in with Google
          </button>
        </div>
        <div class="col">
          <h3>
            Login with Facebook
          </h3>
          <button @click="loginFacebook">
            Sign in with Facebook
          </button>
        </div>
        <div class="col">
          <h3>
            Login with GitHub
          </h3>
          <button>
            Sign in with GitHub
          </button>
        </div>
        <div class="col">
          <h3>
            Login with X
          </h3>
          <button @click="loginX">
            Sign in with X
          </button>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts" setup>

    import {TwitterAuthProvider, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'

    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const xProvider = new TwitterAuthProvider()

    const auth = getAuth()

    const loginGoogle = () => {
      signInWithPopup(auth, googleProvider)
       .then((result) => {
          alert('Logged in successfully!')
        })
       .catch((error) => {
          alert('Error logging in:')
        })
    }

    const loginFacebook = () => {
      signInWithPopup(auth, facebookProvider)
       .then((result) => {
          alert('Logged in successfully!')
        })
       .catch((error) => {
          alert('Error logging in:')
        })
    }

    const loginX = () => {
      signInWithPopup(auth, xProvider)
       .then((result) => {
          alert('Logged in successfully!')
        })
       .catch((error) => {
          alert('Error logging in:')
        })
    }
</script>
  