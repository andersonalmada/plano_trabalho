<template>
  <div>
    <footer>
      <div class="container text-center">
        <button type="button" class="btn btn-danger" @click="logout">
          Sair
        </button>
        <p class="text-center text-white">&copy;2022 - UFC</p>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Footer",
  data() {
    return {
      email: "",
      password: "",
      baseLogout: "http://localhost:3000/users/logout",
    };
  },
  methods: {
    logout: function () {
      axios
        .post(this.baseLogout, {
          email: this.email,
          password: this.password,
        })
        .then((result) => {
          localStorage.removeItem("user");
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
}
</style>
