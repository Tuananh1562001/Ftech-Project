<template>
  <div id="app">
    <Form
      :isOpenForm="isOpenForm"
      @handleClose="handleClose"
      @save="clickSave"
      :editStudent="student"
      :studentsList="studentsList"
    ></Form>
    <Student
      :studentsList="studentsList"
      @handleOpen="handleOpen"
      @edit="clickEdit"
    ></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import Form from "./components/Form.vue";
import {fireStoreCore} from "./configs/firebase"


// getStudent()

export default {
  name: "App",
  components: {
    Student,
    Form,
  },
  data() {
    return {
      isOpenForm: false,
      studentsList: [],
      student: {},
    };
  },
  created() {
    this.getStudent();
  },
  methods: {
    async  getStudent() {
    const response = await fireStoreCore.collection('student').get()
    // console.log(response)
    const data = response.docs.map( (doc) => {
        return {...doc.data(), id: doc.id}
    })
    // console.log(data)
    this.studentsList = data
    return data;
},
    handleOpen() {
      // console.log('open form from app')
      // hiển thị form
      this.isOpenForm = true;
    },
    handleClose() {
      // console.log('close from App')
      // đóng form
      this.isOpenForm = false;
    },
    clickSave(newStudent) {
      // console.log(newStudent)
      this.isOpenForm = false;
      let index = this.studentsList.findIndex((c) => c.id === newStudent.id)
      if(index >= 0) {
        this.studentsList.splice(index,1,newStudent)
      }else{
        this.studentsList.push(newStudent)
      }
      return;
    },
    clickEdit(editStudent) {
      // console.log(editStudent);
      this.student = editStudent;
    },
  },
};
</script>

<style></style>
