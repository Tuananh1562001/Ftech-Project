<template>
  <div class="wrapper-form" v-bind:class="getClassOpenForm">
    <div class="form-student">
      <b-button variant="danger" @click="closeForm">X</b-button>
      <h2>Thông tin sinh viên</h2>
      <label>Name:</label>
      <input type="text" id="fullname" v-model="student.name" />
      <br />

      <label>Email:</label>
      <input type="text" id="fullname" v-model="student.email" />
      <br />

      <label>Phone:</label>
      <input type="text" name="" id="fullname" v-model="student.phone" />
      <br />

      <label>Address:</label>
      <input type="text" id="fullname" v-model="student.address" />
      <br />

      <label>Gender:</label>
      <input
        type="radio"
        name="gender"
        id="male"
        value="male"
        v-model="student.gender"
      />Male
      <input
        type="radio"
        name="gender"
        id=""
        value="female"
        v-model="student.gender"
      />Female
      <br />

      <button class="submit" @click="addItem">Submit</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return{
      student: {
        id: Math.floor(Math.random()*10000),
        name: "",
        gender: "",
        email: "",
        address: "",
        phone: "",
      }
    }
  },
  props: {
    isOpenForm: { type: Boolean, default: false},
    editStudent: { type: Object, default: null},
    studentsList: { type: Array, default: null}
  },
  watch: {
      editStudent(){
      if(this.editStudent) {
        this.student = Object.assign({}, this.editStudent)
      }else{
        this.student = {}
      }
    }
  },
  methods: {
    closeForm() {
      // console.log('close from Form')
      this.$emit('handleClose')
      this.student = {
        id: Math.floor(Math.random()*10000),
        name: "",
        gender: "",
        email: "",
        address: "",
        phone: "",
      }
    },
    addItem() {
      // console.log(this.student)
      let newStudent = this.student
      this.$emit('save', newStudent)
      // console.log(this.studentsList)
      this.student = {
        id: Math.floor(Math.random()*10000),
        name: "",
        gender: "",
        email: "",
        address: "",
        phone: "",
      }
    }
  },
  computed: {
    getClassOpenForm: function() {
      return {
        'open-form': this.isOpenForm
      }
    }
  },
};
</script>
<style>
.wrapper-form {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.open-form {
  opacity: 1;
  visibility: visible;
}
.btn {
  line-height: 1.1;
}
.form-student {
  z-index: 1;
  width: 500px;
  height: 400px;
  border: 1px solid #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  padding: 20px;
  background-color: khaki;
  border-radius: 10px;
}
.form-student .open-form {
  transform: translate(-50%, -50%) scale(1);
}
.btn-danger {
  position: absolute;
  width: 7%;
  height: 8%;
  line-height: 1.1;
  top: 2%;
  right: 2%;
}
h2 {
  text-align: center;
  padding-bottom: 20px;
  font-size: 30px;
  font-family: "Source Sans 3", sans-serif;
}
label {
  width: 33%;
  float: left;
  font-size: 17px;
  font-weight: 600;
}
input[type="text"] {
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
  width: 66%;
}
input[type="radio"] {
  margin-right: 5px;
}
.submit {
  width: 20%;
  margin-top: 30px;
  padding: 5px;
}
</style>
