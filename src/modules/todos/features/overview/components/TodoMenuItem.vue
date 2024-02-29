<script setup lang="ts">
import AppIcon from '@/components/Icon/AppIcon.vue'
import AppText from '@/components/text/AppText.vue'

const props = defineProps<{
	icon: string
	menuText: string
}>()
</script>

<template>
	<AppIcon :icon="props.icon" />
	<AppText :text="props.menuText" />
</template>
