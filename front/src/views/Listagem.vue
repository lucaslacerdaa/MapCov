<template>
  <div class="container">
    <div id="card">
      <!--
        Neste caso terá que gerar uma lista de acordo com o vetor que venha do back
        Exemplo: Se vier 10 objetos JSON terá que ser impreso 10 cards de Pacientes todos
        eles com seus respectivos valoes. 
      -->
      <CardPacienteComponent />
      <CardPacienteComponent />
      <CardPacienteExemploComponent />    
    </div>



  </div>
</template>

<script>
  import CardPacienteComponent from '../components/1. CardPacienteComponent/CardPacienteComponent.vue'
  import CardPacienteExemploComponent from '../components/2.CardPacienteComponent_exemplo/CardPacienteExemploComponent.vue'
  
  export default {
    name: 'Listagem',
    components: {
      CardPacienteComponent,
      //Componente exemplo, excluir após envio.
      CardPacienteExemploComponent,
    },
  }

  
</script>

<style>
*{
  font-family: 'Poppins', sans-serif;
  background-color: rgb(233, 233, 233);
  color: rgb(100, 100, 100);
};
</style>