var app = Vue.createApp({
     data(){
         return{
             review:"",
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
    /*computed and method fully different like all methods are use in every request but computed methods use only for computed method request. */
    /*we don't use argument in computed method also computed method use look like data property*/
    computed:{
        totalCount(){
            console.log('count from computed');
            return this.skills.length;
        },
        experienceSkills(){
            let es = this.skills.filter(item =>{
                return item.exp >= 5
            })
            return es;
        }
    },
    methods: {
        removeSkill(i){
            this.skills.splice(i,1);
        },
        // totalCount(){
        //     console.log('count from method');
        //     return this.skills.length;
        // }
    }
});

app.mount("#app");