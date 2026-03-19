<script setup>
import OrderPool from '../components/OrderPool.vue'
import Bot from '../components/Bot.vue'
import { useOrderBotDispatcher } from '../composables/useOrderBotDispatcher'

const { botList, botCount, orderQueue, addBot, removeBot, addOrder } = useOrderBotDispatcher()

function debugF() {
  console.log('Debugging McbotView.vue');
  console.log('Bot List:', botList.value);
  console.log('Order Queue:', orderQueue.value);
}
</script>

<template>
  <div class="container">
    <div class="controls">
      <div class="order-controls">
        <h2>New Order</h2>
        <div class="col">
          <button class="btn" @click="addOrder({ type: 'normal' });">New normal order</button>
        </div>
        <div class="col">
          <button class="btn" @click="addOrder({ type: 'vip' });">New VIP order</button>
        </div>
      </div>
      <div class="bot-controls">
        <h2>Bot Management</h2>
        <div class="col">
          <button class="btn" @click="addBot">+ Bot</button>
        </div>
        <div class="col">
          <button class="btn" @click="removeBot">- Bot</button>
        </div>
      </div>
      <Bot :bot-list="botList" :bot-count="botCount" @add-bot="addBot" @remove-bot="removeBot" />
    </div>
    <OrderPool :order-queue="orderQueue" />
  </div>
</template>

<style>
.btn {
  width: 100%;
  height: 100%;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.controls {
  width: 300px;
}
.order-controls,
.bot-controls {
  margin-bottom: 1rem;
  display: table;
}

.col {
  float: left;
  width: 50%;
  overflow: hidden;
}
</style>
