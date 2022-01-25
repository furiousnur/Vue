new Vue({
   el: "#app",
   data: {
        formData:{
            firstName: '',
            lastName: '',
        },
       a: 0,
       b: 0,
       salary: 10,
   },
    methods: {
        handleForm(){
            console.log(this.formData);
        }
    },
    computed:{
        addToA(){
            console.log("A");
            return this.a + this.salary;
        },
        addToB(){
            console.log("B");
            return this.b + this.salary;
        }
    }
});