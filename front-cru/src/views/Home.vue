<template>

<div id="container">
    Nome:      <input type="text" name="" id="1"  v-model="nome"      placeholder=""/> <br/><br/>
    Sobrenome: <input type="text" name="" id="2"  v-model="sobrenome" placeholder="">  <br/><br/>
    Idade:     <input type="text" name="" id="3"  v-model="idade"     placeholder=""/> <br/><br/>
    Peso:      <input type="text" name="" id="4"  v-model="peso"      placeholder=""/> <br/><br/>
    Telefone:  <input type="text" name="" id="6"  v-model="telefone"  placeholder=""/> <br/><br/>
    Email:     <input type="text" name="" id="7"  v-model="email"     placeholder=""/> <br/><br/>
    CPF:       <input type="text" name="" id="8"  v-model="cpf"       placeholder=""/> <br/><br/>
    Rua:       <input type="text" name="" id="9"  v-model="rua"       placeholder=""/> <br/><br/>
    Bairro:    <input type="text" name="" id="10" v-model="bairro"    placeholder=""/> <br/><br/>
    Cidade:    <input type="text" name="" id="11" v-model="cidade"    placeholder=""/> <br/><br/>
    Estado:    <input type="text" name="" id="12" v-model="estado"    placeholder=""/> <br/><br/>
    Id:        <input type="text" name="" id="0"  v-model="id"        placeholder=""/> <br/><br/>
    Num:        <inputtype="text" name="" id="0" v-model="num"        placeholder=""/> <br/><br/>
    File:      <input type="file" id="file" ref="file" name="image" /> <br/><br/>

    Busca em Array: <br />
    {{ Pacientes }} <br /><br />

    Busca Unitaria: <br />
    {{ paciente }} <br /><br />

    <button @click="inserirPacientes">        Inserir               </button> <br/><br/>
    <button @click="putPacientes">            Atualizar             </button> <br/><br/>
    <button @click="deletePacientes">         Deletar               </button> <br/><br/>
    <button @click="fetchPacientes">          Buscar Todos          </button> <br/><br/>
    <button @click="fetchByIdPacientes">      Buscar por Id         </button> <br/><br/>
    <button @click="fetchByNumPacientes">     Buscar por Quantidade </button> <br/><br/>
    <button @click="fetchByEstadoPacientes">  Buscar por Estado     </button> <br/><br/>
    
</div>

</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      id: "",
      nome: "", 
      sobrenome: "", 
      cpf: "",
      idade: "", 
      peso: "", 
      telefone: "", 
      email:"",
      rua:"",
      bairro: "",
      cidade: "",
      estado: "",
      Pacientes: [],
      paciente: "",
      num: "", 
      baseURI: "http://localhost:3000/pacientes",
      baseUpload: "http://localhost:3000/upload",
    };
  },
  methods: {
    handleFileUpload(id) {
      this.file = this.$refs.file.files[0];

      let obj = {
        resource: "pacientes",
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
    fetchPacientes: function() {
      axios.get(this.baseURI).then((result) => {
        console.log(result);
        this.Pacientes = result.data;
      });
    },
    fetchByIdPacientes: function() {
      axios.get(this.baseURI + "/" + this.id).then((result) => {
        console.log(result);
        this.paciente = result.data;
      });
    },
    inserirPacientes: function() {
      axios
        .post(this.baseURI, {
          nome: this.nome,
          sobrenome: this.sobrenome,
          cpf: this.cpf,
          idade: this.idade,
          peso: this.peso,
          telefone: this.telefone,
          email: this.email,
          rua: this.rua,
          bairro: this.bairro,
          cidade: this.cidade,
          estado: this.estado,
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
    fetchByEstadoPacientes: function() {
      axios.get(this.baseURI + "/search?estado=" + this.estado).then((result) => {
        console.log(result);
        this.Pacientes = result.data;
      });
    },
    fetchByNumPacientes: function() {
      axios.get(this.baseURI + "/getnum?num=" + this.num).then((result) => {
        console.log(result);
        this.Pacientes = result.data;
      });
    },
    putPacientes: function() {
      axios
        .put(this.baseURI + "/" + this.id, {
          nome: this.nome,
          sobrenome: this.sobrenome,
          cpf: this.cpf,
          idade: this.idade,
          peso: this.peso,
          telefone: this.telefone,
          email: this.email,
          rua: this.rua,
          bairro: this.bairro,
          cidade: this.cidade,
          estado: this.estado,
        })
        .then((result) => {
          console.log(result.data);
          this.handleFileUpload(result.data.id);
        });
    },
    deletePacientes: function() {
      axios.delete(this.baseURI + "/" + this.id).then((result) => {
        console.log(result);
      });
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      console.log("OK");
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
