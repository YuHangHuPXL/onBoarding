<script setup lang="ts">
import AppIcon from '@/components/Icon/AppIcon.vue'

const emits = defineEmits<{
	open: [void]
}>()
</script>

<template>
	<button>
		<AppIcon icon="dotOptions" />
	</button>
</template>
