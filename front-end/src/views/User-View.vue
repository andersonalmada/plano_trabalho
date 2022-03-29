<template>
  <div id="users-view">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Usuário</h2>

      <dl class="dl-horizontal">
        <dt>Nome:</dt>
        <dd>{{ user.name }}</dd>
        <dt>E-mail:</dt>
        <dd>{{ user.email }}</dd>
      </dl>

      <div id="actions" class="row">
        <div class="col-md-12">
          <button type="button" class="btn btn-primary" @click="edit(user.id)">
            Editar
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteUser(user.id)"
          >
            Excluir
          </button>
          <button type="button" class="btn btn-warning" @click="cancel">
            Cancelar
          </button>
        </div>
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
  name: "UserView",
  components: { Header, Footer },
  props: ["id"],
  data: function () {
    return {
      user: {},
      baseURI: "http://localhost:3000/users",
    };
  },
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
    edit: function (idUser) {
      this.$router.push({ name: "UserEdit", params: { id: idUser } });
    },
    deleteUser: function (idUser) {
      axios
        .delete(this.baseURI + "/" + idUser)
        .then((result) => {
          alert("Deletado com sucesso !! ");
          this.$router.push({ name: "Users" });
        })
        .catch((error) => {
          alert("Problema na recuperação de dados !!");
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
