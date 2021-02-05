<template>

  <div>
    <v-card v-on:click="cardClick(Employee)">
      <v-container>
        <v-row>
          <v-col>
            <v-img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" height="120px"
                   width="80px"></v-img>
          </v-col>
          <v-col>
            <v-flex class="pa-2">
              <div>
                {{ Employee.name }} {{ Employee.surname }} {{ Employee.patronymic }}
              </div>

              <div class="caption grey--text">ID</div>
              <div>{{ Employee.ID }}</div>

            </v-flex>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "EmployeeCard",
  props: {
    Employee: {type: Object}
  },
  methods: {
    cardClick(selectedEmployee) {
      this.$emit('click-detail', selectedEmployee)
    }
  }
}
</script>

<style scoped>

</style>
