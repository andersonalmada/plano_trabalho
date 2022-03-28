<template>
  <div id="users-add">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Novo Usuário</h2>

      <hr />
      <div class="d-flex justify-content-center">
        <form>
          <!-- area de campos do form -->
          <div class="row">
            <label for="campo1">Nome</label>
            <input
              type="text"
              class="form-control"
              name="name"
              v-model="name"
            />
          </div>
          <div class="row">
            <label for="campo1">E-mail</label>
            <input
              type="text"
              class="form-control"
              name="email"
              v-model="email"
            />
          </div>
          <div class="row">
            <label for="campo1">Senha</label>
            <input
              type="password"
              class="form-control"
              name="password"
              v-model="password"
            />
          </div>

          <div id="actions" class="row">
            <div class="col-md-12">
              <button type="button" class="btn btn-primary" @click="add">
                Salvar
              </button>
              <button type="button" class="btn btn-warning" @click="cancel">
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "UserAdd",
  data: function () {
    return {
      name: null,
      email: null,
      password: null,
      baseURI: "http://localhost:3000/users",
    };
  },
  components: { Header, Footer },
  methods: {
    add: function () {
      axios
        .post(this.baseURI, {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((result) => {
          alert("Inserido com sucesso !!");
          this.$router.push({ name: "Users" });
        })
        .catch((error) => {
          alert("Problema na inserção !!");
        });
    },
    cancel: function () {
      this.$router.push({ name: "Users" });
    },
  },
};
</script>

<style>
#users {
  overflow-x: hidden;
}
</style>
