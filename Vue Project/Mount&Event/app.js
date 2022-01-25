const temp = `<h3>Name is {{name}}</h3>`

const app1 = new Vue({
   // el: "#app",
   data: {
      name: "Demo Name",
   },
    template: temp
});

setTimeout(()=>{
   app1.$mount('#app')
}, 2000);