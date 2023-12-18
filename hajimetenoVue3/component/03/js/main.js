const buttonCounter = {
  template: '<div><span>count: </span><button @click="countUp">{{count}}</button></div>',
  data: () => ({
    count: 0
  }),
  methods: {
    countUp() {
      this.count++;
    }
  }
}

const app = Vue.createApp({
  data: () => ({
    
  }),
  components: {
    'button-counter': buttonCounter
  }
});
app.mount('#app');