<template>
  <div id="manager">
    <Header></Header>
    <div class="container">
      <h1>Bem-Vindo</h1>
      <hr />

      <div class="row">
        <div class="col-sm">
          <a href="" class="btn btn-default" @click="users">
            <img
              src="@/assets/images/user.png"
              alt="Usuários"
              height="70"
              width="70"
            />
            <div class="col-xs-12 text-center text-white">
              <p>Usuários</p>
            </div>
          </a>
        </div>

        <div class="col-sm">
          <a href="" class="btn btn-default" @click="model">
            <img
              src="@/assets/images/relatorio.png"
              alt="Modelo do Plano"
              height="70"
              width="70"
            />
            <div class="col-xs-12 text-center text-white">
              <p>Modelo do Plano</p>
            </div>
          </a>
        </div>

        <div class="col-sm">
          <a href="places.php" class="btn btn-default">
            <img
              src="@/assets/images/banco.png"
              alt="Planos de Trabalho"
              height="70"
              width="70"
            />
            <div class="col-xs-12 text-center text-white">
              <p>Planos de Trabalho</p>
            </div>
          </a>
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
  name: "Manager",
  components: { Header, Footer },
  methods: {
    users: function (idUser) {
      this.$router.push({ name: "Users" });
    },
    model: function () {
      this.$router.push({ name: "ModelPlans" });
    },
    plans: function () {
      this.$router.push({ name: "Plans" });
    },
  },
};
</script>

<style>
#manager {
  overflow-x: hidden;
}
</style>
