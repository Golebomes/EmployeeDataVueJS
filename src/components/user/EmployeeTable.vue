<template>


  <v-container>
    <v-card min-width="300" max-width="100%" min-height="200" max-height="100%">

      <v-row no-gutters>
        <v-col cols="6">
          <v-card-title>Таблица пользователей</v-card-title>
        </v-col>
      </v-row>


      <v-row no-gutters>
        <v-spacer/>
        <v-col cols="12">
          <v-data-table
              :headers="headers"
              :items="EmployeeData"
              class="elevation-0"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon
                  @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>

          </v-data-table>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "EmployeeTable",
  props: ["EmployeeData"],
  data() {
    return {
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
        {text: 'Действие', value: 'actions', sortable: false, divider: true},
      ],

    }
  },
  methods: {
    deleteItem(item) {
      this.$emit('click-deleteEmployee', item.id);
    }
  }

}
</script>

<style scoped>

</style>
