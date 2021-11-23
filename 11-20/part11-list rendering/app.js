var app = Vue.createApp({
     data(){
         return{
             skills: [
                 {name: 'Html', exp: 5},
                 {name: 'Css', exp: 3},
                 {name: 'Js', exp: 2},
             ],
             newSkill: {name:"", exp:0}
         }
     },
    methods: {
        newSkillAdd(){
            this.skills.push(this.newSkill);
            this.newSkill = {};
        },
        removeSkill(index){
            console.log(index);
            this.skills.splice(index, 1);
        }
    }
});

app.mount("#app");