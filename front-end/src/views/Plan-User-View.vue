<template>
  <div id="users-add">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Plano de Trabalho</h2>

      <hr />
      <form method="post">
        <div role="tablist">
          <b-card v-for="(item, index) in categories" :key="index">
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
                <span
                  v-for="(itemPlan, indexPlan) in plan"
                  type="text"
                  name=""
                  v-bind:key="indexPlan * 10"
                >
                  <span v-if="itemPlan.subcategoryId == itemSub.id">{{
                    itemPlan.value
                  }}</span>
                </span>
              </div>
            </b-collapse>
          </b-card>
        </div>
        <br />
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
  name: "PlanUserView",
  components: { Header, Footer },
  data: function () {
    return {
      user: 1,
      plan: null,
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
      })
      .catch((error) => {
        alert("Problema na recuperação de dados !!");
      });

    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));

      axios
        .get(this.baseURI + "/user/" + user.id)
        .then((result) => {
          this.plan = result.data;
        })
        .catch((error) => {
          alert("Problema na recuperação de dados !!");
        });
    }
  },
  methods: {
    updatePlan: function (itemSub, e) {
      this.plan[itemSub] = { id: itemSub, subcategory: e.target.value };
      console.log(this.plan);
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
