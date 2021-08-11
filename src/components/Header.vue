<template>
<div class="relative bg-white" v-if="localActiv">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
        </a>
      </div>
      <nav class="md:flex space-x-10">

        <router-link to="users" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Пользователи
        </router-link>
        <router-link to="/exit" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Выйти
        </router-link>
      </nav>
    </div>
  </div>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          Личные данные
        </h1>
      </div>
    </header>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Email address
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{email}}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Password
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{pas}}
            </dd>
          </div>
        </dl>
      </div>
    </div>
</div>

<div v-else class="py-6 px-5 space-y-6">
  <div>
    <router-link to="/entrance" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
      Вход
    </router-link>
    <p class="mt-6 text-center text-base font-medium text-gray-500">
      <router-link to="/register" class="text-indigo-600 hover:text-indigo-500">
          Регистрация
      </router-link>
    </p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: localStorage.getItem('email'),
      pas: localStorage.getItem('password')
    }
  },
  computed: {
    localActiv() {
      return this.email ? true : false
    }
  }
}
</script>
