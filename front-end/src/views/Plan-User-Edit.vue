<template>
  <div id="users-add">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Plano de Trabalho</h2>

      <hr />
      <form method="post">
        <div role="tablist">
          <b-card v-for="(item, index) in categories" :key="index">
            <b-button
              v-b-toggle="'accordion-' + index"
              variant="outline-secondary"
              ><h4>{{ index + 1 }}. {{ item.name }}</h4></b-button
            >
            <b-collapse
              class="text-black"
              :id="'accordion-' + index"
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
                <input
                  type="text"
                  class="form-control"
                  name=""
                  @change="updatePlan(itemSub.id, $event)"
                />
              </div>
            </b-collapse>
          </b-card>
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
  name: "PlanUserEdit",
  components: { Header, Footer },
  data: function () {
    return {
      user: 1,
      plan: [],
      categories: null,
      baseURICategories: "http://localhost:3000/categories",
      baseURI: "http://localhost:3000/plans",
    };
  },
  created: function () {
    axios
      .get(this.baseURICategories)
      .then((result) => {
        this.categories = result.data;
        console.log(this.categories);
      })
      .catch((error) => {
        alert("Problema na recuperação de dados !!");
      });
  },
  methods: {
    updatePlan: function (itemSub, e) {
      this.plan[itemSub] = { id: itemSub, subcategory: e.target.value };
    },
    add: function () {
      axios
        .post(this.baseURI, {
          user: this.user,
          plan: this.plan.filter((element) => {
            return element !== null;
          }),
        })
        .then((result) => {
          alert("Inserido com sucesso !!");
        })
        .catch((error) => {
          alert("Problema na inserção !!");
        });
    },
    cancel: function () {
      this.$router.push({ name: "PlanUser" });
    },
  },
};
</script>

<style>
#users {
  overflow-x: hidden;
}
</style>
