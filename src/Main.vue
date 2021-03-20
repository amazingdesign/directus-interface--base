<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <div>I'm Custom Interface!</div>
    <input
      v-model="value"
      @input="handleChange"
    >
    <ReactComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore vuera do not have typings
import { ReactInVue } from 'vuera'

import ReactComponent from './ReactComponent'

export default Vue.extend({
  components: {
    ReactComponent: ReactInVue(ReactComponent),
  },
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
      // @ts-ignore
      this.$emit('input', this.value)
    },
  },
})
</script>
