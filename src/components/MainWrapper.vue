<template>
  <div>
    <v-container>
      <v-row no-gutters>

        <!--      Employee Data top info-->
        <v-col cols="12">
          <v-card elevation="8">
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
                                cols="12"
                                sm="6"
                                md="4"
                            >
                              <v-text-field
                                  v-model="newEmployee.name"
                                  label="Имя"
                              ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                              <v-text-field
                                  v-model="newEmployee.surname"
                                  label="Фамилия"
                              ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                              <v-text-field
                                  v-model="newEmployee.patronymic"
                                  label="Отчество"

                              ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                              <v-text-field
                                  v-model="newEmployee.iin"
                                  label="ИИН"

                              ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                              <v-text-field
                                  v-model="newEmployee.email"
                                  label="Почта"

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


      <v-row no-gutters style="margin-top: 25px">

        <!--      EmployeeCards-->
        <v-col cols="3">
          <EmployeesCards style="height: 425px" v-bind:EmployeeData="EmployeeData" @click-detail="clickDetail"/>
        </v-col>

<!--        Details-->
        <v-col>
          <MasterDetail class="pl-5" v-bind:selected="selected" @click-changeEmployee="changeEmployee"/>
        </v-col>
      </v-row>


    </v-container>
  </div>
</template>

<script>

import MasterDetail from "@/components/MasterDetail";
import EmployeesCards from "@/components/EmployeesCards";

export default {
  name: "MainWrapper",
  components: {EmployeesCards, MasterDetail,},
  props: ["EmployeeData", "selected"],
  methods: {
    clickDetail(selectedEmployee) {
      this.$emit('click-detail', selectedEmployee)
    },
    addEmployee() {
      this.newEmployee.ID = this.EmployeeData.length+1001;
      this.dialog = false
      this.$emit('add-employee', this.newEmployee)
      this.newEmployee = {}
    },
    changeEmployee(employee) {
      this.$emit('click-changeEmployee', employee)
    }

  },

  data() {
    return {
      dialog: false,
      Employee: {},
      newEmployee: {}
    }
  }

}
</script>

<style scoped>

</style>
