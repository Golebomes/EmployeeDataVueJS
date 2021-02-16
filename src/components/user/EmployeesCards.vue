<template>
  <div style="overflow-y:scroll;">
    <v-card v-for="item in data" :key="item.ID" @click="clickDetail(item)" class="mb-2 mr-2">
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" height="80px"
                   width="80px"></v-img>
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-col cols="8">
                <span>{{ item.name }} {{ item.surname }} {{ item.patronymic }}</span>
              </v-col>
              <v-col col="4">
                <div><span class="grey--text">ID: </span> {{ item.id }}</div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

  </div>
</template>

<script>

export default {
  name: "EmployeesCards",
  props: {
    data: Array
  },
  methods: {
    clickDetail(selectedEmployee) {
      this.$emit('click-detail', selectedEmployee)
    },

  }
}
</script>

<style scoped>

/*Style for scrollbar*/
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.15);
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
}
</style>
