<template>
  <div>

    <v-expansion-panels mandatory accordion>

      <!--        MainDetails-->
      <v-expansion-panel>
        <v-expansion-panel-header><strong>Персональные данные</strong></v-expansion-panel-header>
        <v-expansion-panel-content>

          <v-container>

<!--            Top info about selected Employee-->
            <div v-if="selected.ID!=null">
              <h2>{{ selected.name }} {{ selected.surname }} {{ selected.patronymic }} {{ selected.ID }}</h2>
              <v-divider style="padding-top: 10px;padding-bottom: 10px"></v-divider>
            </div>

            <v-row>
              <v-col cols="3">
                <v-text-field v-model="selected.name" label="Имя"></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field v-model="selected.surname" label="Фамилия"></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field v-model="selected.patronymic" label="Отчество"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="3">
                <v-text-field v-model="selected.iin" label="ИИН"></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="selected.email" label="Email"></v-text-field>
              </v-col>

              <v-col cols="10">
                <v-btn style="background-color: purple; color: #f1f1f1" v-on:click="detailSave(selected)">
                  Сохранить
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

        </v-expansion-panel-content>
      </v-expansion-panel>


      <!--        Change Password-->
      <v-expansion-panel>
        <v-expansion-panel-header><strong>Изменение Пароля</strong></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>
            <v-row>
              <v-col cols="5">
                <v-text-field :type="show1 ? 'text': 'password'"
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="show1 = !show1"
                              :rules="[rules.required, rules.min]"
                              label="Введите старый пароль"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>

              <v-col cols="5">
                <v-text-field :type="show2 ? 'text': 'password'"
                              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="show2 = !show2"
                              v-model="newPassword1"
                              :rules="[rules.required, rules.min]"
                              label="Введите новый пароль"></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field :type="show3 ? 'text': 'password'"
                              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="show3 = !show3"
                              v-model="newPassword2"
                              :rules="[rules.required, rules.min, rules.checkEquality]"
                              label="Повторите новый пароль"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-btn style="background-color: purple; color: #f1f1f1" v-on:click="PasswordSave">
                  Сохранить
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>


      <!--        Change Visualization-->
      <v-expansion-panel>
        <v-expansion-panel-header><strong>Настройки Отображения</strong></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>

            <v-row>

              <v-col cols="5">
                <v-autocomplete  :items="dataFormat" label="Формат Даты и времени">
                </v-autocomplete>
              </v-col>


              <v-col cols="5">
                <v-autocomplete :items="sidebarSettings" label="Настройки Боковой панели">
                </v-autocomplete>
              </v-col>

            </v-row>


            <v-row>
              <v-col>
                <v-radio-group
                    mandatory
                    row
                    label="Темы"
                >
                  <v-radio
                      color="purple"
                      value="purple"
                  ></v-radio>
                  <v-radio
                      color="indigo"
                      value="indigo"
                  ></v-radio>
                  <v-radio
                      color="orange"
                      value="orange"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>


            <v-row>
              <v-col>
                <v-btn style="background-color: purple; color: #f1f1f1" v-on:click="StyleSave">
                  Сохранить
                </v-btn>
              </v-col>
            </v-row>

          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </div>
</template>

<script>
export default {
  name: "MasterDetail",
  props: ["selected"],
  data() {
    return {
      newPassword1: '',
      newPassword2: '',
      dataFormat: ['ДД.ММ.ГГГГ', 'ДД/ММ/ГГГГ', 'ММ.ДД.ГГГГ',],
      sidebarSettings: ['Вариант 1', 'Вариант 2', 'Вариант 3',],
      show1: false,
      show2: false,
      show3: false,
      rules: {
        required: value => !!value || 'Обязательно.',
        min: v => v.length >= 8 || 'Необходимо 8 символов',
        checkEquality: () => this.newPassword1 === this.newPassword2 || 'Пароли не совпадают',
      },
    }
  },
  methods: {
    PasswordSave() {
      alert(`Password Save Button`)
    },
    detailSave(employee) {
      alert('Detail Save Button')
      this.$emit('click-changeEmployee',employee)
    },
    StyleSave() {
      alert('Style Save Button')
    },

  }
}
</script>

<style scoped>

</style>
