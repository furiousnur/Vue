new Vue({
   el: "#app",
   data: {
       title: "Title Name",
       isItTrue: true,
       cars: ['Toyota', 'Ford', 'Corola'],
       robots: {
           name: "Franky"
       },
       greeting: ()=>{
           return "Hello World";
       }
   }
});