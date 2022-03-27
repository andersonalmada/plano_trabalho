<template>
  <div id="users">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Modelo de Plano</h2>

      <div>
        <a class="btn btn-success" href="" @click="edit"
          ><i class="fa fa-plus"></i>Editar</a
        >
        <a class="btn btn-warning" href="" @click="view"
          ><i class="fa fa-plus"></i>Visualizar</a
        >
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ModelPlans",
  components: { Header, Footer },
  methods: {
    edit: function (idUser) {
      this.$router.push({ name: "ModelPlanEdit" });
    },
    view: function (idUser) {
      this.$router.push({ name: "ModelPlanView" });
    },
  },
};
</script>

<style>
#users {
  overflow-x: hidden;
}
</style>
