<template>
    <div class="relative bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                        <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
                    </a>
                </div>
                <NavBar />
            </div>
        </div>
    </div>
    <div class="py-6 px-5 space-y-6" v-if="isLoggedIn">
        <Button @click="signOut" class="bg-indigo-600 hover:bg-indigo-700">
            Выйти
        </Button>
    </div>
    <template v-else>
        <Button class="bg-indigo-600 hover:bg-indigo-700">
            <router-link to="/entrance">
                Вход
            </router-link>
        </Button>
        <Button class="mt-2 bg-indigo-600 hover:bg-indigo-700">
            <router-link to="/register">
                Регистрация
            </router-link>
        </Button>
    </template>
</template>
<script>
import { ref } from 'vue';
import firebase from 'firebase';
import { useRouter } from 'vue-router';

import Button from '../components/Button.vue';
import NavBar from '../components/NavBar.vue';

export default {
    components: { Button, NavBar },
    setup() {
        const router = useRouter()
        const isLoggedIn = ref(true)
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                isLoggedIn.value = true
            } else {
                isLoggedIn.value = false
            }
        })
        const signOut = () => {
            firebase.auth().signOut()
            router.push('/register')
        }
        return { isLoggedIn, signOut }
    }
}
</script>