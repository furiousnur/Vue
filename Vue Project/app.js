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
       },
       src: "https://picsum.photos/id/237/200/300",
       alt: "Alter Image",
       link: "https://google.com",
       myText: "using directive",
       myHtml: "<strong>Hello Nami</strong>",
   },
    methods: {
       Testing: function (){
           return this.title;
       },
        Demo: function (){
           return this.robots.name;
       }
    }
});