export default {
    actions: {

        async deleteEmployee(ctx, ID) {
            await fetch('http://localhost:8888/employees/' + ID, {
                method: 'DELETE'
            })
            ctx.commit('deleteEmployee');
        },
        async changeEmployee(ctx, employee) {
            const res = fetch('http://localhost:8888/employees/' + (employee.ID), {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(employee)
            })
            const changedEmployee = res;
            ctx.commit('changeEmployee', changedEmployee)
        },
        async fetchBitPrice(ctx) {
            const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            const bitPrice = await res.json()
            ctx.commit('updateBitPrice', bitPrice)
        },
        async fetchEmployees(ctx) {
            const res = await fetch('http://localhost:8888/employees')
            const employees = await res.json()
            ctx.commit('updateEmployees', employees)
        },
        addEmployee(ctx, employee) {
            const res = fetch('http://localhost:8888/employees', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(employee)
            })
            const newEmployee = res;
            ctx.commit('updateEmployeesAfterAdding', newEmployee)
        },
        async login(ctx, emp) {
            const res = {
                email: 'a',
                password: 'a'
            }

            if (res.email == emp.email && res.password == emp.password) {
                sessionStorage.setItem('isSignIn', 'true')
                ctx.commit('changeAuthStatus')
            } else {
                console.log("Authorization failed");
            }
        },
        logout(ctx) {
            sessionStorage.removeItem('isSignIn')
            ctx.commit('changeAuthStatus');
        }
    },
    mutations: {
        deleteEmployee() {

        },
        changeEmployee() {

        },
        updateEmployeesAfterAdding(state,) {
            state.MainWrapperKey = state.MainWrapperKey + 1
        },
        updateEmployees(state, employees) {
            state.employeeData = employees
        },
        updateBitPrice(state, bitPrice) {
            state.bitPrice = bitPrice
        },
        changeAuthStatus(state) {
            state.isAuthorized = !state.isAuthorized;
        },

    },
    state: {

        isAuthorized: JSON.parse(sessionStorage.getItem('isSignIn')),
        bitPrice: [],
        employeeData: [],
        MainWrapperKey: 1,
    },
    getters: {
        MainWrapperKey(state) {
            return state.MainWrapperKey
        },
        employeeData(state) {
            return state.employeeData;
        },
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
