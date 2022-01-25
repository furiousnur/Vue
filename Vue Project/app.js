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

       user: {
           name: 'Nur',
           age: 20,
           greaterAge: 23
       }
   },
    methods: {
       Testing: function (){
           return this.title;
       },
        Demo: function (){
           return this.robots.name;
       },
        changeUser(){
            return this.title === 'Title Name' ? true : false;
        },
        update(){
           setTimeout(()=>{
              this.title = 'My name is Nur';
           },2000);
        }
    }
});