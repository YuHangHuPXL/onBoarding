<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/stores/auth.store'

const store = useAuthStore()

async function login(): Promise<void> {
	await store.login({ username: 'yuhang@yuhang.be', password: 'string' })
}
</script>

<template>
	<h2>login</h2>
	<button @click="login" />
</template>

<style scoped></style>
