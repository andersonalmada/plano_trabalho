<template>
  <div id="users-add">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Editar Usuário</h2>

      <hr />
      <div class="d-flex justify-content-center">
        <form action="user-add.php" method="post">
          <!-- area de campos do form -->
          <div class="row">
            <label for="campo1">Nome</label>
            <input
              type="text"
              class="form-control"
              name="name"
              v-model="user.name"
            />
          </div>
          <div class="row">
            <label for="campo1">E-mail</label>
            <input
              type="text"
              class="form-control"
              name="email"
              disabled
              v-model="user.email"
            />
          </div>
          <div class="row">
            <label for="campo1">Senha</label>
            <input
              type="password"
              class="form-control"
              name="password"
              v-model="user.password"
            />
          </div>

          <div id="actions" class="row">
            <div class="col-md-12">
              <button type="button" class="btn btn-primary" @click="update">
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
  name: "UserEdit",
  components: { Header, Footer },
  data: function () {
    return {
      user: {},
      baseURI: "http://localhost:3000/users",
    };
  },
  props: ["id"],
  created: function () {
    axios
      .get(this.baseURI + "/" + this.id)
      .then((result) => {
        this.user = result.data;
      })
      .catch((error) => {
        alert("Problema na recuperação de dados !!");
      });
  },
  methods: {
    update: function () {
      axios
        .put(this.baseURI + "/" + +this.id, {
          user: this.user,
        })
        .then((result) => {
          alert("Atualizado com sucesso !!");
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
