import stocks from "../../data/stocks"

export default{
    state:{
        stocks:[]
    },
    mutations:{
        setStocks(state, stocks){
            state.stocks = stocks
        }
    },
    actions:{
        // eslint-disable-next-line no-unused-vars
        buyStock({commit}, order){
            console.log(order)
            commit("buyStock", order)
        },
        initStocks({commit}){
            console.log("Chamou o Vuex")
            commit("setStocks", stocks)
        }
    },
    getters:{
        stocks(state){
            return state.stocks
        }
    }
}