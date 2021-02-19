export default {
    actions: {

        async deleteEmployee(ctx, ID) {
            await fetch('http://localhost:7777/employees/' + ID, {
                method: 'DELETE'
            })
            ctx.commit('deleteEmployee');
        },
        async changeEmployee(ctx, employee) {
            const res = fetch('http://localhost:7777/employees/' + (employee.id), {
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
            const res = await fetch('http://localhost:7777/employees')
            const employees = await res.json()
            ctx.commit('updateEmployees', employees)
        },
        addEmployee(ctx, employee) {
            const res = fetch('http://localhost:7777/employees', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(employee)
            })
            const newEmployee = res;
            ctx.commit('updateEmployeesAfterAdding', newEmployee)
        },

        async login(ctx, emp) {
            console.log(emp);
            // eslint-disable-next-line no-unused-vars
            const res = await fetch('http://localhost:7777/auth', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(emp)
            })

            // eslint-disable-next-line no-constant-condition
            if ( await res.json() ) {
                sessionStorage.setItem('isSignIn', 'true')
                ctx.commit('changeAuthStatusTrue')
            }

            // for(let i = 0; i < employees.length; i++) {
            //     if (employees[i].email === emp.email && employees[i].password === emp.password) {
            //         console.log('authorization happen')
            //         sessionStorage.setItem('isSignIn', 'true')
            //         ctx.commit('changeAuthStatusTrue')
            //         break
            //     }
            // }



        },
        logout(ctx) {
            sessionStorage.removeItem('isSignIn')
            ctx.commit('changeAuthStatusFalse');
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
        changeAuthStatusFalse(state) {
            state.isAuthorized = false;
        },
        changeAuthStatusTrue(state) {
            state.isAuthorized = true;
        },

    },
    state: {

        // isAuthorized: JSON.parse(sessionStorage.getItem('isSignIn')),
        isAuthorized: false,
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
