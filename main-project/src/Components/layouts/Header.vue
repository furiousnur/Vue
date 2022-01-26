<template>
    <div>
        <h1>Header</h1>
        <ul>
            <li v-for="student in students" :key="student">{{student}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
      // props: ['myName'],
         props: {
             students: {
                  type: Array,
                  required: true
             }
        }
    }
</script>