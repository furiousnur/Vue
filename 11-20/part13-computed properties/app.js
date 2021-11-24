var app = Vue.createApp({
     data(){
         return{
            show:false,
             skills: [
                 {name: 'Html', exp: 5},
                 {name: 'Css', exp: 3},
                 {name: 'Js', exp: 2},
                 {name: 'php', exp: 6},
                 {name: 'nodejs', exp: 1},
                 {name: 'python', exp: 10},
                 {name: 'go', exp: 8},
             ],
         }
     },
    methods: {
        toggle(){
            this.show = !this.show;
        }
    }
});

app.mount("#app");