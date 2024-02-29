<script setup lang="ts">
import { type Component, watch } from 'vue'
import { shallowRef } from 'vue'

import { type Icon, icons } from '@/icons/icons'

const props = defineProps<{
	icon: Icon
}>()

const svgComponent = shallowRef<Component | null>(null)

watch(
	() => props.icon,
	async () => {
		const resolvedComponent = await icons[props.icon]
		console.log(resolvedComponent)

		svgComponent.value = resolvedComponent.default
	},
	{
		immediate: true,
	}
)
</script>

<template>
	<Component :is="svgComponent" />
</template>
