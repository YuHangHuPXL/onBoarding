<script setup lang="ts">
import AppIcon from '@/components/Icon/AppIcon.vue'

const emits = defineEmits<{
	clickAddButton: [void]
}>()

function onClick() {
	emits('clickAddButton')
}
</script>

<template>
	<button
		class="h-[33px] w-[33px] rounded bg-dark-blackPearl"
		@click="onClick"
	>
		<AppIcon
			class="mx-auto"
			icon="plus"
		/>
	</button>
</template>
