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

export default {
  name: "App",
  components: {
    Student,
    Form,
  },
  data() {
    return {
      isOpenForm: false,
      studentsList: [
        {
          id: 1,
          name: "Nguyễn Tuấn Anh",
          gender: "male",
          email: "Tuananh15062001@gmail.com",
          address: "Hà Nội",
          phone: "0987731991",
        },
        {
          id: 2,
          name: "Nguyễn Đăng Bằng",
          gender: "male",
          email: "Tuananh15062001@gmail.com",
          address: "Hà Nội",
          phone: "0987731991",
        },
        {
          id: 3,
          name: "Nguyễn Thị Lý",
          gender: "female",
          email: "Tuananh15062001@gmail.com",
          address: "Hà Nội",
          phone: "0974502356",
        },
        {
          id: 4,
          name: "Nguyễn Thế Hưng",
          gender: "male",
          email: "Hungngu@gmail.com",
          address: "Cao Bằng",
          phone: "0903475456",
        },
        {
          id: 5,
          name: "Lê Thị Hường",
          gender: "female",
          email: "Huongle@gmail.com",
          address: "Hà Nội",
          phone: "0987731991",
        },
        {
          id: 6,
          name: "Cao Thị Liên",
          gender: "female",
          email: "Huongle@gmail.com",
          address: "Hà Nội",
          phone: "0987731991",
        },
      ],
      student: {},
    };
  },
  methods: {
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
        let max = 0;
        let newId = 0;
        for(let i=0; i <this.studentsList.length;i++){
          if(this.studentsList[i].id > max){
            max=this.studentsList[i].id
          }
        }
        newId = max + 1;
        newStudent.id = newId;
        this.studentsList.push(newStudent)
      }
      return;
    },
    clickEdit(editStudent) {
      // console.log(editStudent);
      this.student = editStudent;
    },
    // clickDelete(editItem){
    //   console.log(editItem)
    // }
  },
};
</script>

<style></style>
