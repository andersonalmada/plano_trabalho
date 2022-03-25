<template>
  <div id="users-add">
    <Header></Header>
    <div class="container">
      <h2 class="text-center">Novo Usuário</h2>

      <hr />
      <div class="d-flex justify-content-center">
        <form action="user-add.php" method="post">
          <!-- area de campos do form -->
          <div class="row">
            <label for="campo1">E-mail</label>
            <input type="text" class="form-control" name="email" />
          </div>
          <div class="row">
            <label for="campo1">Senha</label>
            <input type="password" class="form-control" name="password" />
          </div>

          <div id="actions" class="row">
            <div class="col-md-12">
              <button type="submit" class="btn btn-primary">Salvar</button>
              <a href="" class="btn btn-danger" @click="cancel">Cancelar</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "UserAdd",
  components: { Header, Footer },
  methods: {
    cancel: function () {
      this.$router.push("users");
    },
  },
};
</script>

<style>
#users {
  overflow-x: hidden;
}
</style>
