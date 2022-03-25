<template>
  <div>
    <footer>
      <div class="container">
        <p class="text-center text-white">&copy;2022 - UFC</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
}
</style>
