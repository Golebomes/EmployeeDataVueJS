<template>
  <v-container>
    <v-row >
    <v-card-text style="background-color: white; border-style: none; border-radius: 7px">
      <v-container v-if="selected>0 && selected<12">
        <v-row no-gutters>
          <v-col>
            <h2>Details</h2>
          </v-col>

        </v-row>
        <v-row no-gutters>

          <v-col
              cols="3"
              sm="3"
              md="3"
          >
            <v-text-field v-model="EmployeeData[selected-1].name" label="Name"></v-text-field>
          </v-col>

          <v-col
              cols="1"
              sm="1"
              md="1"
          >

          </v-col>

          <v-col
              cols="5"
              sm="5"
              md="5"
          >
            <v-text-field v-model="EmployeeData[selected-1].surname" label="Surname"></v-text-field>
          </v-col>

          <v-col
              cols="1"
              sm="1"
              md="1"
          >

          </v-col>

          <v-col
              cols="4"
              sm="4"
              md="4"
          >
            <v-text-field v-model="EmployeeData[selected-1].status" label="Status"></v-text-field>
          </v-col>
        </v-row>


        <v-row no-gutters>
          <v-col
              cols="4"
              sm="4"
              md="4"
          >
            <v-text-field v-model="EmployeeData[selected-1].Position" label="Position"></v-text-field>
          </v-col>

          <v-col
              cols="1"
              sm="1"
              md="1"
          >

          </v-col>

          <v-col
              cols="2"
              sm="2"
              md="2"
          >
            <v-text-field v-model="EmployeeData[selected-1].ID" label="ID"></v-text-field>
          </v-col>

          <v-col
              cols="1"
              sm="1"
              md="1"
          >

          </v-col>

          <v-col
              cols="5"
              sm="5"
              md="5"
          >
            <v-text-field v-model="EmployeeData[selected-1].Telephone" label="Telephone"></v-text-field>
          </v-col>
        </v-row>

        <!--      <v-row no-gutters>-->
        <!--        <v-col>-->
        <!--          <h2>Details</h2>-->
        <!--        </v-col>-->

        <!--      </v-row>-->


      </v-container>
      <v-container v-else ><h2>No Choosed Employee</h2></v-container>
    </v-card-text>
    </v-row>
    <v-row style="background-color: white; margin-top: 50px; border-style: none;border-radius: 7px">
      <Fetch />
    </v-row>
  </v-container>
</template>

<script>
import Fetch from "@/components/Fetch";
export default {
  name: "Details",
  components: {Fetch},
  props: ["EmployeeData","selected"]
}
</script>

<style scoped>
</style>
