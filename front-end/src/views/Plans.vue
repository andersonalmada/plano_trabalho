<template>
  <div id="users">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Planos de Trabalho</h2>
      <hr />

      <table class="table table-hover">
        <thead>
          <tr>
            <th class="text-white">Nome</th>
            <th style="text-align: right; color: white">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in plans" :key="index">
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
                @click="deletePlan(item.id)"
              >
                Excluir
              </button>
            </td>
          </tr>
          <tr v-if="plans == null">
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
  name: "Plans",
  data: function () {
    return {
      plans: {},
      baseURI: "http://localhost:3000/plans",
    };
  },
  components: { Header, Footer },
  created: function () {
    axios
      .get(this.baseURI + "/users")
      .then((result) => {
        this.plans = result.data;
      })
      .catch((error) => {
        alert("Problema na recuperação de dados !!");
      });
  },
  methods: {
    edit: function (idUser) {
      this.$router.push({ name: "PlanAdmEdit", params: { id: idUser } });
    },
    view: function (idUser) {
      this.$router.push({ name: "PlanAdmView", params: { id: idUser } });
    },
    deletePlan: function (idUser) {
      axios
        .delete(this.baseURI + "/user/" + idUser)
        .then((result) => {
          alert("Deletado com sucesso !! ");
          this.plans = this.plans.filter((e) => e.id != idUser);
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
