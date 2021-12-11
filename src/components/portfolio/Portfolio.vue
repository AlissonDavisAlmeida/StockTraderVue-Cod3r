<template>
  <v-layout row wrap>
    <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock"/>
  </v-layout>
</template>

<script>
import {mapGetters} from "vuex"
import Stock from "./Stock.vue"
export default {
  components:{Stock},
  computed: {
    ...mapGetters({
       stocks : "stockPortfolio"
    })
  },

}
</script>

<style>

</style>