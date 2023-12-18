const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: []
  }),
  methods: {
    addItem: function (e) {
      if (!this.newItem) return;
      let todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo);
      this.newItem = '';
    },
    deleteItem: function (hoge) {
      // console.log(hoge);
      this.todos.splice(hoge, 1);
    }
  }
});
app.mount('#app');