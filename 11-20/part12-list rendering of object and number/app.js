var app = Vue.createApp({
     data(){
         return{
            aboutMe: {
                name: 'Nur Alam',
                nickName: 'Nur',
                website: 'http://www.nur.com'
            },
             skills: [
                 {name: 'Html', exp: 5},
                 {name: 'Css', exp: 3},
                 {name: 'Js', exp: 2},
             ],
         }
     },
    methods: {

    }
});

app.mount("#app");