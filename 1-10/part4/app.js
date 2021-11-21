var app = Vue.createApp({
     data(){
         return{
             tutorialinfo:{
                 name: 'Vue JS bangla tutorial',
                 githubLink: "https://github.com/furiousnur/Vue",
             },
             htmlCode: '<a target="_blank" href="file:///F:/laragon/www/Vue/1-10/part4/part4.html">Github</a>'
         }
     }
});

app.mount("#app");