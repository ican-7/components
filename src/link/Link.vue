<template>
    <a  :class="[
      linkType,
      disabled && 'disabled']"
      class="Luckly-link"
      
        >
      <slot />
    </a>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const props = defineProps({
    type: {
        type: String,
        default: 'default',
      },
    disabled: {
      type: Boolean,
      default: false,
    }
})

const linkType = computed(() => {
  return `link link-${props.type}`
})
</script>


<script lang="ts">
export default {
    name: "LucklyLink",
}
</script>

<style lang="less">
@import './link.less';
</style>
