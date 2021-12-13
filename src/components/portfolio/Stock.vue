<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="card blue darken-3 white--text">
      <v-card-title class="headline">
        <strong
          >{{ stock.name }} <small>(Preço : {{ stock.price | currency}} | Quantidade: {{stock.quantidade}})</small></strong
        >
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          name="name"
          label="quantidade"
          id="id"
          type="number"
          :error="insufficienteQuant"
          v-model.number="quantidade"
        ></v-text-field>
        <v-btn color="primary" class="white--text" @click="sellStock" :disabled = "insufficienteQuant |quantidade < 1 || !Number.isInteger(quantidade)">
          {{insufficienteQuant? "Insuficiente" :"Vender"}}
          </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantidade: 0,
    };
  },
  computed: {
    insufficienteQuant(){
      return this.quantidade > this.stock.quantidade
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantidade: this.quantidade,
      };

      this.$store.dispatch("sellStock", order)
      this.quantidade = 0;
    },
  },
};
</script>

<style>
.card {
  color: black;
}
</style>