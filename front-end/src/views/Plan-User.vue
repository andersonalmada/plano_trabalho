<template>
  <div id="users">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Plano de Trabalho</h2>

      <div>
        <button type="button" class="btn btn-success" @click="edit">
          <i class="fa fa-plus"></i>Editar
        </button>
        <button type="button" class="btn btn-warning" @click="view">
          <i class="fa fa-plus"></i>Visualizar
        </button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "PlanUser",
  components: { Header, Footer },
  methods: {
    edit: function (idUser) {
      this.$router.push({ name: "PlanUserEdit" });
    },
    view: function (idUser) {
      this.$router.push({ name: "PlanUserView" });
    },
  },
};
</script>

<style>
#users {
  overflow-x: hidden;
}
</style>
