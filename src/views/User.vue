<template>
    <Button class="bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <router-link to="/">
            Назад
        </router-link>
    </Button>
    <div v-if="loading" class="bg-white shadow overflow-hidden sm:rounded-lg">
        <template v-for="user in ShowUserList" :key="user.id">
            <div class="border-t border-gray-200">
                <dl>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Полное имя:
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {{user.name}}
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {{user.email}}
                        </dd>
                    </div>
                </dl>
            </div>
        </template>
    </div>
    <div v-else-if="erros">
        <h1>{{error}}</h1>
    </div>
    <div v-else>
        <h1>loading....</h1>
    </div>
</template>
<script>
import Button from '../components/Button.vue';
import firebase from 'firebase'
import { useRouter } from 'vue-router'
import { ref, onBeforeUnmount } from 'vue'

export default {
    components: { Button },
    setup() {
        const users = ref();
        const loading = ref(false);
        const error = ref('');
        const erros = ref(false)

        const router = useRouter()
        const authListener = firebase.auth().onAuthStateChanged(function(user) {
            if (!user) {
                alert('Вы должны быть зарегистрованны')
                router.push('/')
            }
        })
        onBeforeUnmount(() => {
            authListener()
        })

        return { users, loading, error, erros }
    },
    async created() {
        try {
            let f = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
            if (!f.ok)
                throw new Error(f.statusText)
            let data = await f.json();
            this.users = data;
            this.loading = true
        } catch (err) {
            console.log(err)
            this.error = 'Ошибка загрузки'
            this.erros = true
        }
    },
    computed: {
        ShowUserList() {
            return this.users.map(i => i);
        }
    }
}
</script>