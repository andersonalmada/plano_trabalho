<template>
  <div id="users-add">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Modelo do Plano</h2>

      <hr />
      <form method="post">
        <div role="tablist">
          <b-card v-for="(item, index) in categories" v-bind:key="index">
            <b-button v-b-toggle.accordion-1 variant="outline-secondary"
              ><h4>{{ index + 1 }}. {{ item.name }}</h4></b-button
            >
            <b-collapse
              class="text-black"
              id="accordion-1"
              visible
              accordion="my-accordion"
            >
              <br />
              <div
                class="row"
                v-for="(itemSub, indexSub) in item.subcategories"
                v-bind:key="-indexSub"
              >
                <span
                  >{{ index + 1 }}. {{ indexSub + 1 }}. {{ itemSub.name }}</span
                >
              </div>
            </b-collapse>
          </b-card>
        </div>
        <div id="actions" class="row">
          <div class="col-md-12">
            <button type="button" class="btn btn-primary" @click="edit">
              Editar
            </button>
            <button type="button" class="btn btn-warning" @click="cancel">
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
    <br />
    <br />
    <br />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "ModelPlanView",
  components: { Header, Footer },
  data: function () {
    return {
      categories: null,
      baseURI: "http://localhost:3000/categories",
    };
  },
  created: function () {
    axios
      .get(this.baseURI)
      .then((result) => {
        this.categories = result.data;
      })
      .catch((error) => {
        alert("Problema na recuperação de dados !!");
      });
  },
  methods: {
    edit: function () {
      this.$router.push({ name: "ModelPlanEdit" });
    },
    cancel: function () {
      this.$router.push({ name: "ModelPlans" });
    },
  },
};
</script>

<style>
#users {
  overflow-x: hidden;
}
</style>
