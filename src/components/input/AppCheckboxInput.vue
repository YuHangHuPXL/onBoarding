<script setup lang="ts">
import { ref, watch } from 'vue'

const emits = defineEmits<{
	checked: [void]
	unchecked: [void]
}>()

const isChecked = ref<boolean>(false)

watch(isChecked, (newValue) => {
	if (newValue) {
		emits('checked')
	} else {
		emits('unchecked')
	}
})
</script>

<template>
	<input
		v-model="isChecked"
		class="form-checkbox h-5 w-5 shrink-0 rounded-[4px] border-gray-300 bg-transparent text-dark-sanJuan focus:ring-0 focus:ring-offset-0"
		type="checkbox"
	/>
</template>
