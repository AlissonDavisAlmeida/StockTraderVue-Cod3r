import stocks from "../../data/stocks"

export default{
    state:{
        stocks:[]
    },
    mutations:{
        setStocks(state, stocks){
            state.stocks = stocks
        },
        randomizeStocks(state){
            state.stocks.forEach(stock => {
                stock.price  = Math.round(stock.price * (1+  Math.random() -0.45))
            });
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
        },
        randomizeStocks({commit}){
            commit("randomizeStocks")
        }
    },
    getters:{
        stocks(state){
            return state.stocks
        }
    }
}