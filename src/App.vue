<template>
  <header class="header">
    <div class="header__container">
      <img src="../src/assets/img/logo.png" alt="" class="header__logo">

      <div class="header__links">
        <router-link to="/" class="header__link">Форма</router-link>
        <router-link to="/preview" class="header__link">Превью</router-link>
      </div>

    </div>
  </header>

  <router-view/>

  <footer class="footer">
    <p>all rights reserved</p>
  </footer>
</template>

<style lang="scss">
</style>
