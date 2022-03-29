<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand header btn btn-link" @click="index">
            <img
              src="@/assets/images/ufc.png"
              alt="Sistema de Plano de Trabalho da UFC"
              height="60"
              width="54"
            />
            <span class="text-white">Sistema de Plano de Trabalho da UFC</span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  created: function () {
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));
      let route = this.$router.history.current.name;

      if (user.email !== "admin@crateus.ufc.br") {
        if (
          route === "Manager" ||
          route === "ModelPlanEdit" ||
          route === "ModelPlanView" ||
          route === "ModelPlans" ||
          route === "UserAdd" ||
          route === "UserEdit" ||
          route === "UserView" ||
          route === "Users"
        ) {
          this.$router.push({ name: "PlanUser" });
        }
      }
    } else {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    index: function () {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style></style>
