var app = Vue.createApp({
     data(){
         return{
            count: 0,
             title: 'Event and method arguments'
         }
     },
    methods: {
         getCurrentTime() {
             let ct = new Date();
             return new Date();
         },
        increase(amount){
             this.count = this.count + amount;
        },
        decrease(amount){
             this.count = this.count - amount;
        },
        test(ev){
             console.log('test');
             console.log(ev);
        }
    }
});

app.mount("#app");