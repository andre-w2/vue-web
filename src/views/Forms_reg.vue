<template>
    <div class="min-h-screen 
            flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="../assets/l.png" alt="Workflow">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Создать аккаунт
                </h2>
            </div>
            <form class="mt-8 space-y-6" action="" method="POST" @submit.prevent="add">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" class="sr-only">Email</label>
                        <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email">
                    </div>
                    <div>
                        <label for="password" class="sr-only">Пароль</label>
                        <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Пароль">
                    </div>
                </div>
                <div>
                    <Button class="bg-indigo-600 hover:bg-indigo-700">
                        Создать
                    </Button>
                    <Button class="bg-red-600 hover:bg-red-700 mt-3">
                        <router-link to="/entrance">
                            Войти в аккаунт
                        </router-link>
                    </Button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import firebase from 'firebase';
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router'

export default {
    components: { Button },
    setup() {
        const email = ref('')
        const password = ref('')

        const router = useRouter();
        const add = () => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(() => {
                    console.log('Successfully registered!');
                    router.push('/')
                })
                .catch(error => {
                    console.log(error.code)
                    alert(error.message);
                });
        }
        return {
            email,
            password,
            add
        }
    }
}
</script>1