export default {
    actions: {
        async fetchBitPrice(ctx) {
            const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            const bitPrice = await res.json()
            ctx.commit('updateBitPrice', bitPrice)
        }
    },
    mutations: {
        updateBitPrice(state, bitPrice) {
            state.bitPrice = bitPrice
        },
        login(state) {
            state.isAuthorized = !state.isAuthorized;
        },

    },
    state: {
        testText: "KekL",
        isAuthorized: false,
        bitPrice: [],
    },
    getters: {
        isAuthorized(state) {
            return state.isAuthorized;
        },
        bitPrice(state) {
            return state.bitPrice;
        },
        testText(state) {
            return state.testText;
        }
    },
}
