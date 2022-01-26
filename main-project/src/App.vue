 <template>
      <div class="div">
        <Header :students="students"/>
        <Footer/>
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
                  students: ['Nur', 'Delo', 'Trisha']
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