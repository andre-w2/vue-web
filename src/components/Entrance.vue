<template>
<div class="min-h-screen 
            flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="../assets/l.png" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Войти аккаунт
      </h2>
    </div>
    <div class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email</label>
          <input v-model="inputEmail" id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email">
        </div>
        <div>
          <label for="password" class="sr-only">Пароль</label>
          <input v-model="inputPas" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Пароль">
        </div>
      </div>
      <p>{{error}}</p>
      <div>
      	<Button @click="entrance" class="bg-indigo-600 hover:bg-indigo-700">
          	Войти
      	</Button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Button from './Button.vue';
import Cookies from '../js.cookie.min.mjs';
import md5 from 'js-md5';

export default {
	components: {Button},
	data() {
		return {
			inputEmail: '',
			inputPas: '',
			email: Cookies.get('email'),
			pas: Cookies.get('password'),
			error: ''
		}
	},
	methods: {
		entrance() {
			this.error = ''
			if (this.inputEmail && this.inputPas) {

					let a = md5(this.inputEmail)
					let b = md5(this.inputPas)
					
					if (a === this.email && b === this.pas) {
						  localStorage.setItem('email', a);
	     				localStorage.setItem('password',b);
							this.$router.push('/')
					}
			} else {
				this.error = 'Таких данных нет'
			}
		}
	}
}
</script>


