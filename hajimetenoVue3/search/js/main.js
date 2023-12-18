
const app = Vue.createApp({
  data: () => ({
    items: null,
    keyword: '',
    message: '',
  }),
  watch: {
    keyword: function(newKeyword, oldKeyword){
      console.log(newKeyword);
      this.message = 'Waiting for you to stop typing...';
      this.debouncedGetAnswer();
    }
  },
  mounted: function () {
    // this.keyword = 'JavaScript';
    // this.getAnsewr();
    this.debouncedGetAnswer = _.debounce(this.getAnsewr, 1000);
  },
  methods: {
    getAnsewr: function () {
      if(this.keyword === ''){
        console.log('キーワードが入力されていません');
        this.items = null;
        return;
      }

      this.message = 'Loading...';
      const vm = this;
      const params = { page: 1, per_page: 20, query: this.keyword };
      axios.get('https://qiita.com/api/v2/items', { params })
      .then(function(response){
        // console.log(response);
        vm.items = response.data;
      })
      .catch(function(error){
        vm.message = 'Error!' + error;
      })
      .finally(function(){
        vm.message = '';
      });
    }
  },
});
app.mount('#app');