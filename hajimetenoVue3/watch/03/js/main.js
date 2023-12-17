// const app = Vue.createApp({
//   data: () => ({
//     firstName: '',
//     lastName: '',
//     fullName: ''
//   }),
//   watch: {
//     firstName: function(val){
//       this.fullName = val + ' ' + this.lastName;
//     },
//     lastName: function(val){
//       this.fullName = this.firstName + ' ' + val;
//     }
//   }
// });
const app = Vue.createApp({
  data: () => ({
    firstName: '',
    lastName: '',
  }),
  computed: {
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    }
  }
});
app.mount('#app');