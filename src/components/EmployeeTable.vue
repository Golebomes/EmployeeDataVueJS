<!--Unused Employee Table-->


<template>
  <div>
    <v-simple-table
        class="t"
        fixed-header
        height="430px"
        v-on:click="click"
        style=" border-style: none; border-radius: 10px"
    >
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Name
          </th>



        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in EmployeeData"
            :key="item.id"

        >
          <td>{{ item.ID }}</td>
          <td>{{ item.name }}</td>

          <td>
            <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    text
                    color="grey"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    style="margin-top: 8px"
                >
                  Details
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Employee Profile</span>
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
                            label="First name*"
                            v-model="item.name"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            label="Second name"
                            v-model="item.surname"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            label="ID"
                            v-model="item.ID"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Telephone"
                            v-model="item.Telephone"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Position"
                            v-model="item.Position"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                      >
                        <v-select
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="Age*"
                            required
                        ></v-select>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                      >
                        <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Interests"
                            multiple
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "EmployeeTable",
  props: ["EmployeeData"],

  methods: {

  },
  data() {
    return {
      selectItem: {}
    }
  }
}
</script>

<style scoped>

</style>
