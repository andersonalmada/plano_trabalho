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
          <tr>
            <td class="text-white">Username</td>
            <td style="text-align: right">
              <a href="" class="btn btn-sm btn-success" @click="view(1)"
                >Visualizar</a
              >
              <a href="" class="btn btn-sm btn-warning" @click="edit(1)"
                >Editar</a
              >
              <a href="" class="btn btn-sm btn-danger"> Excluir </a>
            </td>
          </tr>
          <tr>
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

export default {
  name: "Users",
  components: { Header, Footer },
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
  },
};
</script>

<style>
#users {
  overflow-x: hidden;
}
</style>
