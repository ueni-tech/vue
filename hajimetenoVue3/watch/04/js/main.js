
const app = Vue.createApp({
  data: () => ({
    colors: [
      { name: 'Red' },
      { name: 'Green' },
      { name: 'Blue' },
    ]
  }),
  watch: {
    colors: {
      handler: function(newVal, oldVal){
        console.log('update');
      },
      deep: true
    }
  },
  methods: {
    onClick: function(){
      this.colors[1].name = 'white';
    }
  }
});
app.mount('#app');