<template>
<div>
	<div>AD Custom Interface!</div>
	<!-- Expects type string -->
	<input v-model="value" @input="handleChange" />
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: {
		value: String,
	},
	methods: {
		handleChange() {
      const hello: string = 'Hello!'
      console.log(hello)
			this.$emit(
       'input',
        this.value
      )
		},
	},
})
</script>