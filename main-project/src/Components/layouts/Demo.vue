<template>
    <div>
        Demo component which one imported by globally.
        <p>First Name: {{firstName}}</p>
        <p>Last Name: {{lastName}}</p>
        <p>Age: {{age}}</p>
        <button @click="updateName">Click Me</button>
    </div>
</template>

<script>
    export default {
        props: {
              firstName: String,
              lastName: String,
              age: Number
        },
        methods: {
              updateName(){
                  // this.firstName = "Nur Alam";
                this.$emit('updateValue', 'Nur Alam');
              }
        }
    }
</script>