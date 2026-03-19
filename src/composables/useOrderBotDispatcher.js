import { ref } from 'vue';

export function useOrderBotDispatcher() {
  const botList = ref([]);
  const orderQueue = ref([]);
  const orderCount = ref(0);
  const botCount = ref(0); // decrease when bot is removed
  const botSequence = ref(0); // does not decrease when bot is removed

  function addBot() {
    botCount.value++;
    botSequence.value++;
    botList.value.push({ id: botSequence.value, status: 'idle' });
    assignIdleBots();
  }

  function removeBot() {
    if (botCount.value === 0) return;
    let removedBot = botList.value.pop();
    botCount.value--;
    resetProgress(removedBot);
  }

  function addOrder(order) {
    order.status = 'pending';
    orderQueue.value.push(order);
    orderCount.value++;
    order.id = orderCount.value;
    order.bot_id = null;
    assignIdleBots();
  }

  function resetProgress(removedBot) {
    if (typeof removedBot.currentOrder !== 'undefined') {
      let order = removedBot.currentOrder;
      order.bot_id = null;
      order.status = 'pending';
      delete order.time_started;
      order.progress = 0;
      clearInterval(order.setIntervalId);
    }
  }

  function assignIdleBots() {
    botList.value.filter((x) => x.status === 'idle').forEach((bot) => {
      const order = getPendingOrder();
      if (order) {
        order.bot_id = bot.id;
        bot.currentOrder = order;
        bot.status = 'busy';
        order.status = 'processing';
        order.time_started = new Date();
        order.progress = 0;
        order.setIntervalId = setInterval(() => {
          if (order.progress < 10) {
            order.progress += 2;
          } else {
            // Mark order as completed and free the bot
            order.status = 'completed';
            order.time_completed = new Date();
            bot.status = 'idle';
            bot.currentOrder = null;
            clearInterval(order.setIntervalId);
            assignIdleBots(); // if nothing triggers
          }
        }, 1000);
      }
    });
  }

  function getPendingOrder() {
    let vipOrders = orderQueue.value.filter(order => order.status === 'pending' && order.type === 'vip');
    if (vipOrders.length > 0) {
      return vipOrders[0];
    }
    return orderQueue.value.find(order => order.status === 'pending' && !order.bot_id);
  }

  return {
    botList,
    orderQueue,
    botCount,
    botSequence,
    addBot,
    removeBot,
    addOrder,
    assignIdleBots
  };
}
