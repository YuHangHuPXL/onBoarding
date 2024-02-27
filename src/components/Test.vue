<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/stores/auth.store'

const store = useAuthStore()

async function testFunction(): Promise<void> {
	await store.getUserInfo()
}
</script>

<template>
	<button @click="store.login({ username: 'yuhang@yuhang.be', password: 'string' })" />
	<br />
	<button @click="testFunction" />
</template>

<style scoped></style>
