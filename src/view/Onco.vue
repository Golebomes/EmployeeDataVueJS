<template>
  <div>
    <!--    Header-->
    <v-app-bar
        app
        color="purple"
        dark
    >
      <div class="d-flex align-center;">

      </div>
    </v-app-bar>

    <!--    Sidebar-->
    <v-navigation-drawer app permanent>
      <v-list color="A52A2A" elevation="5">
        <v-list-item>
          <img src="../assets/KazDC.png" height="40" width="195" alt="Logo"/>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
          nav
      >
        <v-list-item link style="color: green">
          <v-list-item-icon>
            <v-icon>{{ 'mdi-application' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content @click="clickMain">
            <v-list-item-title>{{ 'Главное Меню' }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-lifebuoy' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content @click="clickTable">
            <v-list-item-title>{{ 'Таблица' }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-view-dashboard' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content @click="clickControl">
            <v-list-item-title>{{ 'Управление' }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="clickSettings">
          <v-list-item-icon>
            <v-icon>{{ 'mdi-cog' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ 'Настройки' }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>{{ 'mdi-exit-run' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ 'Выход' }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>

    <!--    Main Content-->
    <v-main>

      <router-view v-bind:EmployeeData="EmployeeData"
                   @click-detail="clickDetail"
                   @add-employee="addEmployee"
                   v-bind:selected="selected"
                   @click-changeEmployee="changeEmployee"
                   :key="MainWrapperKey"
                   @click-deleteEmployee="deleteEmployee"
                   @click-savePassword="savePassword"
      />


      <v-snackbar
          v-model="showResultOfChangingPassword"
          :timeout="2000"
          color="green"
          top>
        Пароль успешно изменен
      </v-snackbar>

      <v-snackbar
          v-model="showResultOfNotChangingPassword"
          :timeout="2000"
          color="red"
          top>
        Ошибка при изменении пароля
      </v-snackbar>

      <v-snackbar
          v-model="showResultOfChanging"
          :timeout="5000"
          color="green"
          top>
        Изменение сохранены
      </v-snackbar>


    </v-main>

  </div>
</template>


<script>


import {mapGetters} from 'vuex'


export default {
  name: "Onco",
  components: {},
  computed: mapGetters(['isAuthorized','employeeData','MainWrapperKey']),
  async mounted() {
    await this.$store.dispatch('fetchEmployees')

    this.EmployeeData = this.employeeData;
  },
  methods: {
    savePassword(password) {
      for (let i = 0; i < this.EmployeeData.length; i++) {
        if (this.EmployeeData[i].ID === password.ID && this.EmployeeData[i].password === password.oldPassword) {
          this.EmployeeData[i].password = password.newPassword
          this.selectedEmployeeForPassword = this.EmployeeData[i]
          console.log(this.selectedEmployeeForPassword);
          this.$store.dispatch('changeEmployee',this.selectedEmployeeForPassword)
          this.showResultOfChangingPassword = true;
        }
      }
      if(this.showResultOfChangingPassword === false) {
        this.showResultOfNotChangingPassword = true;
      }

    },
    clickTable() {
      this.$router.push('table');
    },
    clickControl() {
      // this.showSettings = false;
      // this.showControl = true;
      this.$router.push('/control');
    },
    clickMain() {
      this.$router.push('/main')
    },
    clickSettings() {
      // this.showControl = false;
      // this.showSettings = true;
      this.$router.push('/settings');
    },
    clickDetail(selectedEmployee) {
      this.selected = selectedEmployee;
    },
    addEmployee(employee) {
      console.log("Added new employee which is " + employee);
      if(employee.ID != null) {
        this.$store.dispatch('addEmployee', employee);
        this.EmployeeData.push(employee);
        //this.EmployeeData = this.employeeData;
      }
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
    deleteEmployee(ID) {
      this.$store.dispatch('deleteEmployee',ID)
      for (let i = 0; i < this.EmployeeData.length; i++) {
        if (this.EmployeeData[i].id === ID) {
          this.EmployeeData.splice(i, 1);
        }
      }
      this.selected = {};
    },
    changeEmployee(employee) {
      this.$store.dispatch('changeEmployee', employee);
      for (let i = 0; i < this.EmployeeData.length; i++) {
        if (this.EmployeeData[i].id === employee.id) {
          this.EmployeeData.name = employee.name;
          this.EmployeeData.surname = employee.surname;
          this.EmployeeData.patromic = employee.patromic;
          this.EmployeeData.iin = employee.iin;
          this.EmployeeData.email = employee.email;
        }
      }
      this.showResultOfChanging= true;
    }
  },
  data() {
    return {

      selectedEmployeeForPassword: {},
      showSettings: false,
      showControl: false,
      selected: {},
      showResultOfChangingPassword: false,
      showResultOfNotChangingPassword: false,
      showResultOfChanging: false,
      result: 'Пароль успешно изменен',
      EmployeeData: [
        {
          name: 'Мурат',
          surname: 'Мереков',
          patronymic: 'Ержанович',
          iin: '12345678',
          ID: "1001",
          email: "kraken007@gmail.com",
          password: 'a'
        },

      ],
    }
  }
}
</script>

<style scoped>

</style>
