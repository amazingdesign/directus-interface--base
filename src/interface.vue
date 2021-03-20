<template>
<div>
	<div>My Custom Interface</div>
	<!-- Expects type string -->
	<input v-model="value" @input="handleChange" />
</div>
</template>

<script>
export default {
	props: {
		value: String,
	},
	methods: {
		handleChange() {
			this.$emit('input', this.value);
		},
	},
};
</script>