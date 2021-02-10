export default {
    actions: {
        async fetchBitPrice(ctx) {
            const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            const bitPrice = await res.json()
            ctx.commit('updateBitPrice', bitPrice)
        },
        login(ctx,emp) {
            console.log('emp is '+emp)
            const res = {
                email: 'a',
                password: 'a'
            }
            if(res.email === emp.email && res.password === emp.password) {
                ctx.commit('changeAuthStatus')
            } else {
                console.log("Authorization failed");
            }
        },
        logout(ctx) {
            ctx.commit('changeAuthStatus');
        }
    },
    mutations: {
        updateBitPrice(state, bitPrice) {
            state.bitPrice = bitPrice
        },
        changeAuthStatus(state) {
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
