import Vue from 'vue'
import Vuex from 'vuex'
import EmployeeData from "@/store/modules/EmployeeData";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        EmployeeData
    }

})
