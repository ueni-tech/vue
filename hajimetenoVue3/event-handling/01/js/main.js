const app = Vue.createApp({
  data: () => ({
    message: ''
  }),
  methods: {
    clickHandler: function($event, message) {
      // console.log(message);
      this.message = message;
      console.log($event.target);
    }
  }
});
app.mount('#app');