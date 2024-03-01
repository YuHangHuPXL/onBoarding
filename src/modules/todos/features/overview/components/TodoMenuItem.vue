<script setup lang="ts">
import AppIcon from '@/components/Icon/AppIcon.vue'
import AppText from '@/components/text/AppText.vue'

const props = defineProps<{
	icon: string
	menuText: string
}>()
</script>

<template>
	<div class="py-1 text-[14px]">
		<div class="flex">
			<AppIcon
				class="basis-1/4 self-center"
				:icon="props.icon"
			/>
			<AppText
				class="basis-3/4 text-center"
				:text="props.menuText"
			/>
		</div>
	</div>
</template>
