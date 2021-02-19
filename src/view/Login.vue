<template>
  <v-main>
    <div class="login d-flex justify-center align-center">
      <v-card class="d-flex flex-column justify-center align-center" elevation="5" height="420" width="384">
        <div class="d-flex mt-4">
          <img src="../assets/KazDC.png" height="64" width="312" alt="Logo"/>
        </div>
        <span class="d-flex mt-4">Информационно-аналитическая система</span>
        <div class="d-block col align-center mt-4 pb-0">
          <v-form autocomplete="off">
            <v-text-field outlined dense
                          class="d-flex mt-4"
                          label="Email"
                          :rules="[rules.required,]"
                          v-model="email"
            ></v-text-field>
            <v-text-field outlined dense
                          label="Пароль"
                          :rules="[rules.required,]"
                          v-model="password"
            ></v-text-field>
          </v-form>
        </div>
        <div class="d-flex col  justify-space-between pa-0 ma-0 pl-3 pr-3">
          <v-checkbox value="true" label="Запомнить меня" class="align-self-center" disabled/>
          <a disabled="true" class="d-inline align-self-center"><span
              class="deep-purple--text">Забыли ваш пароль?</span></a>
        </div>

        <div class="d-flex col align-end">
          <v-btn block class="purple" @click="login">
            <span class="white--text">Войти</span>
          </v-btn>
        </div>

      </v-card>
    </div>

    <v-snackbar
        v-model="showResult"
        :timeout="1000"
        color="red"
        top>
      {{ result }}
    </v-snackbar>
  </v-main>
</template>

<script>

export default {
  name: "Login.vue",
  methods: {
    async login() {
      if (this.email === "" || this.password === "") {
        this.result = "Поля \"Email\" и \"Пароль\" должны быть заполнены.";
        this.showResult = true
      } else {
        await this.$store.dispatch('login', {email: this.email, password: this.password})
          if (this.$store.getters.isAuthorized){
          await this.$router.push('/')
          } else {
            this.result = "Введён не верный \"Email\" или \"Пароль\"."
            this.showResult = true
        }
      }
    },


  },
  data() {
    return {
      emp: {
        email: '',
        password: ''
      },
      auth: false,
      email: "",
      showResult: false,
      result: '',
      password: "",
      rules: {
        required: value => !!value || 'Обязательное поле',
        min: v => v.length >= 8 || 'Необходимо 8 символов',
      },
      res: {},
    }
  }
}
</script>

<style scoped>
.login {
  height: 100%;
  width: 100%;
}
</style>
