const app = Vue.createApp({
  data: () => ({
    message: 'Hello, Vue.js!'
  }),
  watch: {
    message: function (newVal, oldVal) {
      console.log(`newVal: ${newVal}, oldVal: ${oldVal}`);
    }
  }
});
app.mount('#app');