const app1 = new Vue({
   el: "#app1",
   data: {
       value: 'instance 1'
   },
    methods: {
        changeValue(){
            app2.value = 'Changed';
        }
    }
});

const app2 = new Vue({
   el: "#app2",
   data: {
       value: 'instance 2'
   }
});