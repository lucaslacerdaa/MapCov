<template>
    <div id="container">
        <h2>Paciente</h2>
        <input type="text" class="inputs_form_text" id="textInput" v-model="text" placeholder="Nome do Paciente"/> <br/><br/>
        <input type="text" class="inputs_form" id="2" v-model="date" placeholder="Endereço"><br/><br/>
        <input type="text" class="inputs_form"  id="3" v-model="time" placeholder="Status"/><br/><br/>
        <label id="title_img"> Imagem </label> 
        <input type="file" id="file" ref="file" name="image"/> <br /><br />

        <button @click="inserirPosts" id="buttonPostar">Cadastrar</button> <br /><br />
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "InsertPost",
  data() {
    return {
      id: "",
      userId: "",
      text: "",
      date: "",
      time: "",
      posts: [],
      post: "",
      baseURI: "http://localhost:3000/posts",
      baseUpload: "http://localhost:3000/upload",
    };
  },
  methods: {
    handleFileUpload(id) {
      this.file = this.$refs.file.files[0];
 
      let obj = {
        resource: "posts",
        id: id,
      };
      let json = JSON.stringify(obj);
 
      let form = new FormData();
      form.append("obj", json);
      form.append("file", this.file);
 
      console.log(form.getAll("file"));
 
      axios
        .post(this.baseUpload, form, {
          headers: {
            "Content-Type": "multipart/form-data",
          }, 
        })
        .then((result) => {
          console.log(result);
        });
    },
    inserirPosts: function() {
      axios
        .post(this.baseURI, {
          text: this.text,
          date: this.date,
          time: this.time,
        })
        .then((result) => {
          if (result.status == 201) {
            alert("Inserido com sucesso !!");
            this.handleFileUpload(result.data.id);
          }
        })
        .catch((error) => {
          if (error.response.status == 400) {
            alert("Dados incorretos !!");
          } else {
            alert("Problema desconhecido !!");
          }
        });
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      console.log("OK");
    } else {
      this.$router.push("/inserirPaciente");
    }
  },
};
</script>

<style scoped>
h2{
  color: rgb(141, 141, 141);
  font-size: 28px;
  background-color: transparent;
  margin-top: 0em;
  margin-bottom: 1em;
  padding: 4%;
}
#buttonPostar{
  margin-top:-2em;
  background-color: rgb(156, 255, 117);
  transition: background-color 0.2s;
}
#buttonPostar:hover{
  transition: background-color 0.2s;
  transition: color 0.2s;
  background-color: rgb(122, 255, 70);
}
#container{
  position: fixed;
  left: 50em;
  width: 350px;
  height: 400px;
  padding: 2%;
  border-radius: 7px;

  margin: auto auto auto auto;
  margin-top: 2em;

  box-shadow: 2px 0.1px 0.1px 0.1px rgb(41, 41, 41), 1em 0 2em rgb(94, 94, 94);

  background-color: rgb(255, 255, 255);
}
.inputs_form{
  width: 300px;
  /* height: 27px; */
  font-size: 16px;
  border-top-color: transparent;
  border-bottom-color:#24642e;
  border-left-color: transparent;
  border-right-color: transparent;
  
  color: rgb(85, 85, 85);
  background-color: transparent;
  transition: background-color 0.2s;
  /* margin-top: 2em; */
}
.inputs_form:hover{
  outline: none;
  border-bottom:3px solid #399c48;
}
.inputs_form:focus{
  outline: none;
  border-bottom:3px solid #399c48;
}
#inputs_login ::placeholder{
 color:rgba(0, 66, 0, 0.507);
}
.inputs_form_text{
  width: 200px;
  /* height: 60px; */
  font-size: 16px;
  border-top-color: transparent;
  border-bottom-color:#24642e;
  border-left-color: transparent;
  border-right-color: transparent;
  color: rgb(85, 85, 85);
  background-color: transparent;
  transition: background-color 0.2s; 
}
.inputs_form_text:focus{
  outline: none;
  border-bottom:3px solid #399c48;
}
.inputs_form_text:hover{
  outline: none;
  border-bottom:3px solid #399c48;
}
.inputs_form_text{
  width: 300px;
  /* height: 70px; */
}
.inputs_form_text::placeholder{
  text-align: left;
  /* position: relative;
  top: em; */
}
#title_img{
  position: relative;
  left: -7.7em;
  text-align: left;
  color: rgb(141, 141, 141);
  background-color: transparent;
}
#file{
  background-color: transparent;
}
</style>