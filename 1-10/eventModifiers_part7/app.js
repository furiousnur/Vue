var app = Vue.createApp({
     data(){
         return{
            name:"",
         }
     },
    methods: {
        handleKeyup(e){
            this.name = e.target.value;
        },
        handleFormSubmit(e){
            console.log(e);
        },
        handleCardClick(e){
            console.log(e);
            console.log('card clicked');
        },
        handleViewClick(e){
            console.log(e);
            // e.stopPropagation();
            console.log('view clicked');
        }
    }
});

app.mount("#app");