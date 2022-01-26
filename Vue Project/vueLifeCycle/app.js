new Vue({
   el: "#app",
   data: {
      name: "Demo Name",
   },
    methods: {
        updateName(){
            this.name = "Nur";
        },
        killIt(){
            this.$destroy();
        }
    },
    beforeCreate(){
        console.log('running before create');
    },
    created(){
        console.log('running before create');
    },
    beforeMount(){
        console.log('Running before mount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('Before Update');
    },
    updated() {
        console.log('Updated');
    },
    beforeDestroy(){
        console.log('before destroy');
    },
    destroyed(){
        console.log('destroyed');
    }
});