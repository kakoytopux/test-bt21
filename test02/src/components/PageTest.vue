<template>
  <TheHeader />
  <main class="content">
    <section class="test">
      <h1 class="test__title">Тестовая страничка. &hearts;</h1>
    </section>
  </main>
</template>

<script>
import TheHeader from './TheHeader.vue';

export default {
  components: {
    TheHeader,
  }
}
</script>

<style scoped>
.test {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.test__title {
  font-size: 30px;
  line-height: 36px;
  font-weight: 600;
  margin: 0;
  text-align: center;
}
</style>
