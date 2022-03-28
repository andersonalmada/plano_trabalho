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
          <a href="" class="btn btn-primary" @click="edit(1)">Editar</a>
          <a href="" class="btn btn-danger" @click="deleteUser(1)">Excluir</a>
          <a href="" class="btn btn-warning" @click="cancel">Cancelar</a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "UserView",
  components: { Header, Footer },
  props: ["id"],
  data: function () {
    return {
      user: {},
    };
  },
  created: function () {
    this.user.id = this.id;
    this.user.name = "almada";
    this.user.email = "anderson@ufc";
  },
  methods: {
    edit: function (idUser) {
      this.$router.push({ name: "UserEdit", params: { id: idUser } });
    },
    deleteUser: function (idUser) {
      console.log(idUser);
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
