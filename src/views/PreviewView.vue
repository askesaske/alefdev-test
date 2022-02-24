<template>
  <div class="preview">
    <h4 class="preview__title">
      Персональные данные
    </h4>

    <div class="preview__items" v-if="loadedPersonalData.length > 0">

      <div class="preview__item item"
           v-for="person in loadedPersonalData"
           :key="person">
        <div class="item__name">
          {{ person.name }}, {{ person.age }} лет
        </div>

        <div class="item__text">
          Дети
        </div>
        <div class="item__children" v-if="person.children.length > 0">
          <div class="item__child"
               v-for="child in person.children"
               :key="child.id">
            {{ child.name }}, {{ child.age }} лет
          </div>
        </div>
        <div class="item__placeholder" v-else>
          Дети отсутствуют
        </div>
      </div>

    </div>

    <div class="preview__placeholder" v-else>
      Тут пока пусто
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    loadedPersonalData() {
      return this.$store.getters.loadedPersonalData
    }
  },
}
</script>
