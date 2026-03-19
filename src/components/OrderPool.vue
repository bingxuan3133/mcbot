<script setup>
import { computed, ref } from 'vue'
import Order from './Order.vue'

const props = defineProps({
  orderQueue: Array
})

const pending = computed(() => (props.orderQueue ?? []).filter(o => o.status === 'pending').sort((a, b) => {
  if (a.type === 'vip' && b.type !== 'vip') return -1;
  if (a.type !== 'vip' && b.type === 'vip') return 1;
  return a.id - b.id;
}));
const processing = computed(() => (props.orderQueue ?? []).filter(o => o.status === 'processing').sort((a, b) => a.time_started - b.time_started));
const completed = computed(() => (props.orderQueue ?? []).filter(o => o.status === 'completed').sort((a, b) => a.time_completed - b.time_completed));

</script>

<template>
  <div class="order-pool">
    <h2>Order Pool</h2>
    <div class="orders">
      <div class="pending-orders">
        <h3>Pending</h3>
        <Order v-for="order in pending" :key="order.id" :order="order" />
      </div>
      <div class="processing-orders">
        <h3>Processing</h3>
        <Order v-for="order in processing" :key="order.id" :order="order" />
      </div>
      <div class="completed-orders">
        <h3>Completed</h3>
        <Order v-for="order in completed" :key="order.id" :order="order" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-pool {
  padding: 1rem;
}
.orders {
  display: flex;
  gap: 2rem;
}
.orders > div {
  flex: 1;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
  min-width: 200px;
  min-height: 500px;
}
.orders h3 {
  margin-top: 0;
}
</style>