<template>
  <div id="users">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Usuários</h2>

      <div class="text-end">
        <a class="btn btn-primary" href="#" @click="add"
          ><i class="fa fa-plus"></i> Novo Usuário</a
        >
      </div>

      <hr />

      <table class="table table-hover">
        <thead>
          <tr>
            <th class="text-white">Nome</th>
            <th style="text-align: right; color: white">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in users" :key="index">
            <td class="text-white">{{ item.name }}</td>
            <td style="text-align: right">
              <button
                type="button"
                class="btn btn-sm btn-success"
                @click="view(item.id)"
              >
                Visualizar
              </button>
              <button
                type="button"
                class="btn btn-sm btn-warning"
                @click="edit(item.id)"
              >
                Editar
              </button>
              <button
                type="button"
                class="btn btn-sm btn-danger"
                @click="deleteUser(item.id)"
              >
                Excluir
              </button>
            </td>
          </tr>
          <tr v-if="users == null">
            <td colspan="6" class="text-white">Nenhum registro encontrado.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Users",
  data: function () {
    return {
      users: {},
      baseURI: "http://localhost:3000/users",
    };
  },
  components: { Header, Footer },
  created: function () {
    axios
      .get(this.baseURI)
      .then((result) => {
        this.users = result.data;
      })
      .catch((error) => {
        alert("Problema na recuperação de dados !!");
      });
  },
  methods: {
    edit: function (idUser) {
      this.$router.push({ name: "UserEdit", params: { id: idUser } });
    },
    view: function (idUser) {
      this.$router.push({ name: "UserView", params: { id: idUser } });
    },
    add: function () {
      this.$router.push({ name: "UserAdd" });
    },
    deleteUser: function (idUser) {
      axios
        .delete(this.baseURI + "/" + idUser)
        .then((result) => {
          alert("Deletado com sucesso !! ");
          this.users = this.users.filter((e) => e.id != idUser);
        })
        .catch((error) => {
          alert("Problema na recuperação de dados !!");
        });
    },
  },
};
</script>

<style>
#users {
  overflow-x: hidden;
}
</style>
