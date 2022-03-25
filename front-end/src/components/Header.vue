<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="#" class="navbar-brand header" @click="index">
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
  methods: {
    index: function () {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
