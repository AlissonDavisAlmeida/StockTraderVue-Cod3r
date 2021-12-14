<template>
  <v-toolbar color="primary" app dark >
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn color="blue lighten-4" to="/" flat >Inicio</v-btn>
      <v-btn color="blue lighten-4" to="/portfolio" flat>Portfólio</v-btn>
      <v-btn color="blue lighten-4" to="/stocks" flat>Stocks</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn color="blue lighten-4" @click="endDay" flat>Finalizar o dia</v-btn>
      <v-menu offset-y>
        <v-btn flat small color="blue lighten-4" slot="activator">Salvar e Carregar</v-btn>
        <v-list class="lista" rounded>
          <v-list-tile class="listaSalvar" @click="saveData" avatar>
            <v-list-tile-title  >Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile class="listaCarregar" @click="loadDataLocal" avatar>
            <v-list-tile-title >Carregar os Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase white--text text--darken-2 ml-3">
          Saldo:  {{ funds | currency}}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import {mapActions} from "vuex"
export default {
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  },
  methods:{
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay(){
      this.randomizeStocks()
    },
    saveData(){
      const {funds, stockPortfolio, stocks} = this.$store.getters
      this.$http.put("data.json", {funds: funds, stockPortfolio:stockPortfolio, stocks:stocks})

    },
    loadDataLocal(){
      this.loadData()
    }

  }
}
</script>

  <style>
.lista{
  cursor: pointer;
  
}
.listaSalvar, .listaCarregar{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.listaSalvar:hover, .listaCarregar:hover{

  background-color: rgb(79, 79, 250);
  color: white;
  transition: ease-in-out .5s;
  transform: scale(1.05);
  border-radius: 20px;
}
</style>