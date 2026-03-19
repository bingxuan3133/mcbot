<script setup>
import { ref, computed } from 'vue'
import OrderPool from './OrderPool.vue'

const props = defineProps({
  botList: Array,
  botCount: Number,
  addBot: Function,
  removeBot: Function
})

const idle = computed(() => (props.botList ?? []).filter(b => b.status === 'idle'))
const busy = computed(() => (props.botList ?? []).filter(b => b.status === 'busy'))

</script>

<template>
  <div class="bot">
    <h1>Bot info</h1>
    <p>Bot Count: {{ botCount }}</p>
  </div>
</template>

<style scoped>
.bot {
  padding: 1rem;
}
</style>
