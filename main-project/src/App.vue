 <template>
      <div class="div">
        <Header :students="students" :name="name" @updateName="name=$event"/>
        <Footer/>
        <hr>
        <demo-component :firstName="fName" :lastName="lName" :age="age" @updateValue="fName = $event"></demo-component>
      </div>
 </template>

 <script>
      import Header from './Components/layouts/Header';
      import Footer from './Components/layouts/Footer';
      export default {
          data(){
              return{
                  name: 'Nur',
                  students: ['Nur', 'Delo', 'Trisha'],
                  fName: 'Jon',
                  lName: 'Doe',
                  age: 26
              }
          },
        components: {
            Header,
            Footer
        }
      }
 </script>

 <style>
    body{
      font-family: 'Roboto', sans-serif;
    }
 </style>