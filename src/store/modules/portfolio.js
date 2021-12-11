export default {
    state:{
        funds:10000,
        stocks:[]
    },
    mutations:{
        buyStock(state, order){
            const record = state.stocks.find(elemento => elemento.id === order.stockId)
            if(record){
                record.quantidade += order.quantidade   
            }else{
                state.stocks.push({
                    id: order.stockId, 
                    quantidade : order.quantidade
                })
            }
            state.funds -= order.stockPrice * order.quantidade
        }, 
        sellStock(state, {stockId, stockPrice, quantidade}){
            const record = state.stocks.find(elemento => elemento.id === stockId)
            if(record.quantidade > quantidade){
                record.quantidade -= quantidade
            }else{
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantidade
        }
    },
    actions:{
        sellStock({commit}, order){
            commit("sellStock", order)
        }
    },
    getters: {
        stockPortfolio(state, getters){
            return state.stocks.map(stock =>{
                const record = getters.stocks.find(elemento => elemento.id === stock.id)
                return {
                    id : stock.id,
                    quantidade : stock.quantidade,
                    name : record.name,
                    price : record.price
                }
            })
        },
        funds(state){
            return state.funds
        }
    }
}