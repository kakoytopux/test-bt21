<template>
  <header class="header">
    <nav class="header__navigation">
      <ul class="header__lists">
        <li class="header__list">
          <router-link
          :to="'/'"
          class="header__list-link"
          >
            Главная
          </router-link>
        </li>
        <li class="header__list">
          <router-link
          :to="'/page-test'"
          class="header__list-link"
          >
            Страница для теста
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__lists {
  display: flex;
  list-style: none;
  gap: 100px;
  padding: 0;
  margin: 0;
}
.header__list-link {
  text-underline-offset: 2px;
  color: #000;
  transition: opacity .3s;
}
.header__list-link:hover {
  opacity: .4;
}
</style>
