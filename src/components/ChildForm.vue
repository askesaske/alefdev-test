<template>
  <div class="form__row">
    <div class="form__input-box form__input-box--w260">
      <label class="form__label">Имя</label>
      <input type="text" class="form__input" placeholder="Введите имя" v-model="name" required>
    </div>

    <div class="form__input-box form__input-box--w260">
      <label class="form__label">Возраст</label>
      <input type="number" class="form__input" placeholder="Введите возраст" v-model="age" required>
    </div>

    <div class="form__delete" @click="$emit('delete')">Удалить</div>
  </div>
</template>

<script>
export default {
  props: {
    child: {
      type: Object
    }
  },
  data() {
    return {
      name: '',
      age: null
    }
  },
  methods: {

  },
  watch: {
    name() {
      this.$emit('name', this.name)
    },
    age() {
      this.$emit('age', this.age)
    }
  }
}
</script>