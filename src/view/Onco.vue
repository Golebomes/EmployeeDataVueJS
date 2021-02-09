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
      <v-list color="purple" elevation="5">
        <v-list-item>
          <img src="../assets/logo_kazior_white.png" height="40" width="195" alt="Logo"/>
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

          <v-list-item-content>
            <v-list-item-title>{{ 'Главное Меню' }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-lifebuoy' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ 'Услуги' }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-view-dashboard' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ 'Управление' }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
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

      <MainWrapper v-bind:EmployeeData="EmployeeData"
                   @click-detail="clickDetail"
                   @add-employee="addEmployee"
                   v-bind:selected="selected"
                   @click-changeEmployee="changeEmployee"
      />

    </v-main>

  </div>
</template>


<script>
import MainWrapper from "@/components/user/MainWrapper";
import {mapGetters} from 'vuex'

export default {
  name: "Onco",
  components: {MainWrapper},
  computed: mapGetters(['isAuthorized']),
  methods: {
    clickDetail(selectedEmployee) {
      this.selected = selectedEmployee;
    },
    addEmployee(employee) {
      this.EmployeeData.push(employee);


    },
    logout() {
      this.$router.push('/login');
    },
    changeEmployee(employee) {
      for (let i = 0; i < this.EmployeeData.length; i++) {
        if (this.EmployeeData[i].ID === employee.ID) {
          this.EmployeeData.name = employee.name;
          this.EmployeeData.surname = employee.surname;
          this.EmployeeData.patromic = employee.patromic;
          this.EmployeeData.iin = employee.iin;
          this.EmployeeData.email = employee.email;
        }
      }

    }
  },
  data() {
    return {
      selected: {},
      EmployeeData: [
        {
          name: 'Мурат',
          surname: 'Мереков',
          patronymic: 'Ержанович',
          iin: '12345678',
          ID: "1001",
          email: "kraken007@gmail.com"
        },
        {
          name: 'Канат',
          surname: 'Аскаров',
          patronymic: 'Болатович',
          iin: '122312345',
          ID: "1002",
          email: "kanat78@gmail.com"
        },
        {
          name: 'Мадина',
          surname: 'Айболов',
          patronymic: 'Болатович',
          iin: '48675446',
          ID: "1003",
          email: "madina007@gmail.com"
        },
        {
          name: 'Лаура',
          surname: 'Сагатов',
          patronymic: 'Жандосовна',
          iin: '12398765',
          ID: "1004",
          email: "laura12@gmail.com"
        },
        {
          name: 'Жан',
          surname: 'Алишеров',
          patronymic: 'Канатович',
          iin: '9988715',
          ID: "1005",
          email: "shamil42@gmail.com"
        },
        {
          name: 'Ерден',
          surname: 'Куатов',
          patronymic: 'Башпаевич',
          iin: '64972900',
          ID: "1006",
          email: "erden007@gmail.com"
        },
        {
          name: 'Ерден',
          surname: 'Куатов',
          patronymic: 'Башпаевич',
          iin: '64972900',
          ID: "1006",
          email: "erden007@gmail.com"
        },
        {
          name: 'Ерден',
          surname: 'Куатов',
          patronymic: 'Башпаевич',
          iin: '64972900',
          ID: "1006",
          email: "erden007@gmail.com"
        },
        {
          name: 'Ерден',
          surname: 'Куатов',
          patronymic: 'Башпаевич',
          iin: '64972900',
          ID: "1006",
          email: "erden007@gmail.com"
        },
        {
          name: 'Ерден',
          surname: 'Куатов',
          patronymic: 'Башпаевич',
          iin: '64972900',
          ID: "1006",
          email: "erden007@gmail.com"
        },
        {
          name: 'Ерден',
          surname: 'Куатов',
          patronymic: 'Башпаевич',
          iin: '64972900',
          ID: "1006",
          email: "erden007@gmail.com"
        },
        {
          name: 'Ерден',
          surname: 'Куатов',
          patronymic: 'Башпаевич',
          iin: '64972900',
          ID: "1006",
          email: "erden007@gmail.com"
        },
        {
          name: 'Ерден',
          surname: 'Куатов',
          patronymic: 'Башпаевич',
          iin: '64972900',
          ID: "1006",
          email: "erden007@gmail.com"
        },
        {
          name: 'Ерден',
          surname: 'Куатов',
          patronymic: 'Башпаевич',
          iin: '64972900',
          ID: "1006",
          email: "erden007@gmail.com"
        },


      ],
    }
  }
}
</script>

<style scoped>

</style>
