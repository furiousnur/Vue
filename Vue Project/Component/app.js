Vue.component('demo-component', {
   data(){
      return {
         name: 'Nur Alam'
      }
   },
   template: `<h3>Name is {{name}}</h3>`,
});

new Vue({
   el: "#app",
});
