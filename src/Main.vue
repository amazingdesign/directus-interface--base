<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <div>AD Custom Interface!</div>
    <input
      v-model="value"
      @input="handleChange"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      default: '',
      type: String,
    },
  },
  methods: {
    handleChange() {
      const hello: string = 'Hello!'
      console.log(hello)
      this.$emit('input', this.value)
    },
  },
})
</script>
