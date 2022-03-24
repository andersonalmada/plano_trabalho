<template>
  <div>
    <Header></Header>
    <div id="notfound">Not Found</div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "NotFound",
  components: { Header, Footer },
};
</script>

<style>
#notfound {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: #fff;
}
</style>
