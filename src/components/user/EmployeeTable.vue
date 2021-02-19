<template>
  <div>
    <v-dialog
        v-model="dialogChanging"
        persistent
        max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Изменение Пользователя</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  v-for="h in headersAdd"
                  :key="h.label"
                  :cols="h.col"
              >
                <v-text-field
                    v-model="chooseEmployee[h.model]"
                    :label="h.label"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="red"
              text
              @click="deleteItem"
          >
            Удалить
          </v-btn>
          <v-btn
              color="purple"
              text
              @click="dialogChanging = false"
          >
            Закрыть
          </v-btn>
          <v-btn
              color="purple"
              text
              @click="changeEmployee"
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-container>
      <v-card min-width="300" max-width="100%" min-height="200" max-height="100%">

        <v-row class="pa-5" no-gutters>
          <v-col  cols="10">
            <h2>Таблица пользователей</h2>
          </v-col>
          <v-col align-self="end">

            <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    style="background-color: green;
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
                          v-for="h in headersAdd"
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

        <v-divider></v-divider>
        <v-row no-gutters>
          <v-spacer/>
          <v-col cols="12">
            <v-data-table
                :headers="headers"
                :items="EmployeeData"
                class="elevation-0"
                @click:row="rowClick"
            >
            </v-data-table>
          </v-col>
        </v-row>
      </v-card>
    </v-container>



  </div>
</template>

<script>

export default {
  name: "EmployeeTable",
  props: ["EmployeeData"],
  data() {
    return {
      newEmployee: {},
      chooseEmployee: {},
      dialog: false,
      dialogChanging: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          divider: true,
          value: 'id',
        },
        {text: 'Имя', value: 'name', sortable: false, divider: true},
        {text: 'Фамилия', value: 'surname', sortable: false, divider: true},
        {text: 'Отчество', value: 'patronymic', sortable: false, divider: true},
        {text: 'ИИН', value: 'iin', sortable: false, divider: true},
        {text: 'Email', value: 'email', sortable: false, divider: true},
        // {text: 'Действие', value: 'actions', sortable: false, divider: true},
      ],
      headersAdd: [
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
    addEmployee() {
      this.newEmployee.ID = this.EmployeeData.length+1001;
      this.dialog = false
      this.$emit('add-employee', this.newEmployee)
      this.newEmployee = {}
    },
    deleteItem() {
      this.$emit('click-deleteEmployee', this.chooseEmployee.id);
      this.dialogChanging = false;
    },
    rowClick(val) {
      this.chooseEmployee = val
      console.log(this.chooseEmployee)
      this.dialogChanging = true;
    },
    changeEmployee() {
      this.$emit('click-changeEmployee', this.chooseEmployee)
      this.dialogChanging = false;
    }
  }

}
</script>

<style scoped>

</style>
