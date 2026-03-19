<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  order: Object
})

const orderId = computed(() => String(props.order.id).padStart(3, '0'));

</script>

<template>
  <div class="order">
    <p>{{ orderId }}{{ order.type === "vip" ? "*" : "" }}{{ order.bot_id === null ? "" : ` (Bot: ${order.bot_id})` }}</p>
    <progress v-if="order.status === 'processing'" :value="order.progress" max="10">Processing...</progress>
  </div>
</template>

<style scoped>
.order {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: var(--color-bg);
}
</style>
