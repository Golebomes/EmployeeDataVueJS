<template>
  <div>
    <v-container>
<!--      TOP ACTIONBAR -->
      <v-row no-gutters>
        <v-col cols="12">
          <v-card elevation="2">
            <v-container>
              <v-row>
                <v-col cols="10">
                  <strong>Управление пользователями</strong>
                </v-col>
                <v-col cols="2">
<!--                  Dialog-->
                  <v-dialog
                      v-model="dialog"
                      persistent
                      max-width="600px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          style="background-color: purple;
                          color: #f1f1f1"
                          dark
                          v-bind="attrs"
                          v-on="on"
                      >
                        + Добавить
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Добавление Пользователя</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col
                                v-for="h in headers"
                                :key="h.label"
                                :cols="h.col"
                            >
                              <v-text-field
                                  v-model="newEmployee[h.model]"
                                  :label="h.label"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>

                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="purple"
                            text
                            @click="dialog = false"
                        >
                          Закрыть
                        </v-btn>
                        <v-btn
                            color="purple"
                            text
                            @click="addEmployee"
                        >
                          Сохранить
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>

<!--MAIN CONTENT -->
      <v-row no-gutters style="margin-top: 25px">
        <v-col cols="3">
          <EmployeesCards style="height: 650px" :data="EmployeeData" @click-detail="clickDetail"/>
        </v-col>
        <v-col>
          <MasterDetail class="pl-5" v-bind:selected="selected"
                        @click-changeEmployee="changeEmployee"
                        @click-deleteEmployee="deleteEmployee"
                        @click-savePassword="savePassword"
          />
        </v-col>
      </v-row>

<!--Bitcoin Price-->
<!--      <v-row>-->
<!--        <v-col>-->
<!--          <v-card>-->
<!--              <v-container>-->
<!--                <v-row>-->
<!--                  <v-col>-->
<!--                    <strong>Курс Биткоина на {{bitPrice.time.updated}}</strong>-->
<!--                  </v-col>-->
<!--                  <v-col>-->
<!--                    <span>USD: </span>{{bitPrice.bpi.USD.rate}}-->
<!--                  </v-col>-->
<!--                  <v-col>-->
<!--                    <span>EUR: </span>{{bitPrice.bpi.EUR.rate}}-->
<!--                  </v-col>-->
<!--                  <v-col>-->
<!--                    <span>GBP: </span>{{bitPrice.bpi.GBP.rate}}-->
<!--                  </v-col>-->
<!--                </v-row>-->
<!--              </v-container>-->
<!--          </v-card>-->
<!--        </v-col>-->
<!--      </v-row>-->

    </v-container>
  </div>
</template>

<script>

import MasterDetail from "@/components/user/MasterDetail";
import EmployeesCards from "@/components/user/EmployeesCards";
import {mapGetters} from 'vuex'

export default {
  name: "MainWrapper",
  components: {EmployeesCards, MasterDetail,},
  props: ["EmployeeData", "selected"],
  computed: mapGetters(['bitPrice']),
  async mounted() {
    await this.$store.dispatch('fetchBitPrice')
  },
  data() {
    return{
      bitPrices: [],
      dialog: false,
      Employee: {},
      newEmployee: {},
      headers: [
        {model: 'name', label: 'Имя', col: '4'},
        {model: 'surname', label: 'Фамилия', col: '4'},
        {model: 'patronymic', label: 'Отчество', col: '4'},
        {model: 'iin', label: 'ИИН', col: '8'},
        {model: 'email', label: 'email', col: '4'},
        {model: 'password', label: 'Пароль', col: '4'},
      ],
    }
  },
  methods: {
    savePassword(password) {
      this.$emit('click-savePassword',password);
    },
    clickDetail(selectedEmployee) {
      this.$emit('click-detail', selectedEmployee)
    },
    addEmployee() {
      this.newEmployee.ID = this.EmployeeData.length+1001;
      this.dialog = false
      this.$emit('add-employee', this.newEmployee)
      this.newEmployee = {}
    },
    deleteEmployee (ID) {
      this.$emit('click-deleteEmployee', ID)
    },
    changeEmployee(employee) {
      this.$emit('click-changeEmployee', employee)
    }

  },
}
</script>

<style scoped>

</style>
