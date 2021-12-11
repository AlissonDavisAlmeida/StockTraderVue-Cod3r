<template>
<div>

 <div>
   <h1 class="display-3 font-wight-light mb-4">Negocie e Consulte suas ações</h1>
   <v-sheet :elevation="6" color="primary" class="white--text pa-2">
      <v-icon class="mr-3 red--text ">info</v-icon>
      <span >Você pode Salvar e carregar os dados</span>
   </v-sheet>
   <v-sheet :elevation="6" color="success" class="white--text pa-2 mt-3 darken-1">
      <v-icon class="mr-3 yellow--text ">info</v-icon>
      <span >Clique em "Finalizar Dia" para iniciar um novo dia!</span>
   </v-sheet>
   <v-divider class="my-4"/>
   <p class="display-1"><strong>Seu Saldo: </strong>{{ funds }}</p>
 </div>
 
</div>
</template>

<script>
export default {
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  },
}
</script>

<style>
  .painel{
    color: white
  }
</style>