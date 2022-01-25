new Vue({
   el: "#app",
   data: {
      name: "Demo Name",
       x: 0,
       y: 0,
   },
    methods: {
        changeName(){
            this.name = 'Nur'
        },
        getCoord(){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        updateName(newName,event){
            this.name = newName;
            console.log(event);
        },
        handleForm(){
            console.log('submit form');
        }
    }
});