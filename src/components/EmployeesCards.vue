<template>
  <div style="overflow-y:scroll;">

  <EmployeeCard  class="pb-2" v-bind:Employee="Employee"
                v-for="Employee in EmployeeData" :key="Employee.ID" @click-detail="clickDetail"/>

  </div>
</template>

<script>
import EmployeeCard from "@/components/EmployeeCard";

export default {
  name: "EmployeesCards",
  props: ["EmployeeData"],
  components: {EmployeeCard},
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
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
