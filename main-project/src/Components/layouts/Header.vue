<template>
    <div>
        <h1>Header</h1>
        <ul>
            <li v-for="student in students" :key="student">{{student}}</li>
        </ul>
        <p>{{name}}</p>
        <button @click="updateName">Click Me</button>
    </div>
</template>

<script>
    export default {
      // props: ['myName'],
         props: {
             students: {
                  type: Array,
                  required: true
             },
              name:{
                  type: String,
                  required: true
              }
        },
      methods:{
           updateName(){
                this.$emit('updateName','Nur Alam');
           }
      }
    }
</script>