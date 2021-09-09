<template>
  <div>
    <input type="text"     name="" id="1" v-model="login"    placeholder="Usuário"/> <br/>
    <input type="password" name="" id="2" v-model="password" placeholder="Senha"  /> <br/>

    <button @click="logar">Login</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      login: "",
      password: "",
      baseLogin: "http://localhost:3000/users/login",
    };
  },
  methods: {
    logar: function() {
      axios
        .post(
          this.baseLogin,
          {
            login: this.login,
            password: this.password,
          },
          { withCredentials: true }
        )
        .then((result) => {
          let userId = this.getCookie("userId");

          if (userId) {
            localStorage.setItem("user", JSON.stringify(result.data));
          }
          this.$router.go();
        });
    },
    getCookie(name) {
      let match = document.cookie.match(new RegExp(name + "=([^;]+)"));
      if (match) return match[1];
      return;
    },
  },
};
</script>

<style></style>
