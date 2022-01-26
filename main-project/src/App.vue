 <template>
      <div class="div">
        <Header/>
        <Footer/>
        <p>{{name}}</p>
        <p>{{age}}</p>
        <hr>
        <demo-component></demo-component>
      </div>
 </template>

 <script>
      import Header from './Components/layouts/Header';
      import Footer from './Components/layouts/Footer';
      export default {
          data(){
              return{
                  name: 'Nur',
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

 </style>