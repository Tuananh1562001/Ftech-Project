<template>
  <div class="container pt-4 pb-5">
    <b-row>
      <b-col md="4">
        <b-form-input
          v-model="filter"
          type="search"
          placeholder="Search"
        ></b-form-input>
      </b-col>
      <b-button variant="outline-primary" @click="openForm">Add</b-button>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          striped
          hover
          :items="studentsList"
          :filter="filter"
          :per-page="perPage"
          :current-page="currentPage"
          :fields="fields"
        >
          <template v-slot:cell(actions)="row">
            <b-button variant="outline-success">Detail</b-button>
            <b-button variant="outline-warning" @click="editItem(row.item)">Edit</b-button>
            <b-button variant="outline-danger" @click="deleteItem(row.item)">Delete</b-button>
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
        >
        </b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Student",
  props: ["studentsList"],
  data: () => ({
    fields: ["name","gender","email","address","phone","Actions"],
    perPage: 6,
    currentPage: 1,
    filter: "",
  }),
  computed: {
    rows() {
      return this.studentsList.length;
    },
  },
  methods: {
    deleteItem(deleteItem) {
      // console.log(deleteItem.id)
      this.$emit('delete',)
      for(let i=0; i<this.studentsList.length; i++){
        if(deleteItem.id === this.studentsList[i].id){
          this.studentsList.splice(i,1)
        }
      }
    },
    openForm() {
      // console.log('openForm from student')
      this.$emit('handleOpen')
    },
    editItem(editItem) {
      this.openForm()
      let editStudent = editItem
      // console.log(editStudent + 'from Student')
      this.$emit('edit', editStudent)

    }
  }
};
</script>

<style scoped>
.btn{
  line-height: 1.1;
}
.row{
  justify-content: space-between;
}
.btn-outline-primary{
  float: right;
  width: 7%;
  height: 5%;
  margin-right: 15px;
}
.form-control {
  margin-bottom: 30px;
}
.pagination {
  float: right;
}
.btn-outline-warning,.btn-outline-success{
  margin-right: 10px;
}
</style>
