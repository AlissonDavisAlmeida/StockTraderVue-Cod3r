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
      <v-btn color="blue lighten-4" flat>Finalizar o dia</v-btn>
      <v-menu offset-y>
        <v-btn flat small color="blue lighten-4" slot="activator">Salvar e Carregar</v-btn>
        <v-list >
          <v-list-tile  avatar>
            <v-list-tile-title >Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-title>Carregar os Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>