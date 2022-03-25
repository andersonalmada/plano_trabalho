<template>
  <div id="users-add">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Modelo do Plano</h2>

      <hr />
      <form method="post">
        <b-form-textarea
          id="textarea"
          rows="3"
          max-rows="6"
          v-model="inputText"
        ></b-form-textarea>
        <br />
        <div id="actions" class="row">
          <div class="col-md-12">
            <button type="button" class="btn btn-primary" @click="add">
              Salvar
            </button>
            <a href="" class="btn btn-danger" @click="cancel">Cancelar</a>
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

export default {
  name: "UserAdd",
  data: function () {
    return {
      inputText: null,
    };
  },
  components: { Header, Footer },
  methods: {
    add: function () {
      var categories = this.inputText.split("\n");
      var categoriesObj = [];

      categories.forEach(function (element, index, array) {
        let subcategories = element.split(",");
        categoriesObj.push({
          category: subcategories[0],
          subcategories: subcategories.slice(1),
        });
      });

      console.log(categoriesObj);
    },
    cancel: function () {
      this.$router.push({ name: "Manager" });
    },
  },
};
</script>

<style>
#users {
  overflow-x: hidden;
}
</style>
