<template>
  <div id="nav">
    <router-link to="/">Login</router-link>
    <router-link v-if="logged" to="/home"> | Home</router-link>
    <a v-if="logged" href="#" @click="logout"> | Logout</a>
  </div>
  <router-view />
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      logged: false,
    };
  },
  methods: {
    logout() {
      axios.get("http://localhost:3000/users/logout").then((result) => {
        this.logged = false;
        localStorage.removeItem("user");
        console.log(result);
      });
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      this.logged = true;
    }
  },
};
</script>

<style></style>
