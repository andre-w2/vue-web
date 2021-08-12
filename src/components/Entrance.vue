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
        <button @click="entrance" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Войти
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Cookies from '../js.cookie.min.mjs';
import md5 from 'js-md5';

export default {
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


