<template>
	<div class="bg-white shadow overflow-hidden sm:rounded-lg">
		<div class="px-4 py-5 sm:px-6">
			<h3 class="text-lg leading-6 font-medium text-gray-900">
				Вы точно хотите выйти?
			</h3>
			<p @click="yes" class="mt-1 max-w-2xl text-sm text-gray-500">
				Да
			</p>
			<p class="mt-1 max-w-2xl text-sm text-gray-500">
				<router-link to='/'>
					Нет
				</router-link>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		yes() {
			localStorage.removeItem('email');
			localStorage.removeItem('password');
			this.$router.push('/register')
		}
	}
}
</script>