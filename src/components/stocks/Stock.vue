<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg3>
    <v-card class="card green darken-3 white--text">
      <v-card-title class="headline">
        <strong
          >{{ stock.name }} <small>(Preço: {{ stock.price | currency }}| Quantidade: {{stock.quantidade}})</small></strong
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
          :error="insufficientFunds"
          v-model.number="quantidade"
        ></v-text-field>
        <v-btn color="primary" class="white--text" @click="buyStock" :disabled = " insufficientFunds||quantidade < 1 || !Number.isInteger(quantidade)">
          {{insufficientFunds? "Saldo Insuficiente": "Comprar"}}
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
    funds(){
      return this.$store.getters.funds
    },
    insufficientFunds(){
      return this.quantidade * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantidade: this.quantidade,
      };

      this.$store.dispatch("buyStock", order)
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