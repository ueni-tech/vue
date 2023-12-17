const app = Vue.createApp({
  data: () => ({
    km: 0,
    m: 0
  }),
  watch: {
    km: function (val) {
      console.log(val);
      this.km = val;
      this.m = val * 1000;
    },
    m: function (val) {
      console.log(val);
      this.km = val / 1000;
      this.m = val;
    }
  }
});
app.mount('#app');