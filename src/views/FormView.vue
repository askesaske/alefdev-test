<template>
  <form class="form">
    <div class="form__section">
      <h4 class="form__title form__title--mb20">
        Персональные данные
      </h4>

      <div class="form__inputs">
        <div class="form__input-box">
          <label class="form__label">Имя</label>
          <input type="text" class="form__input" placeholder="Введите имя" v-model="name" required>
        </div>

        <div class="form__input-box">
          <label class="form__label">Возраст</label>
          <input type="number" class="form__input" placeholder="Введите возраст" v-model="age" required>
        </div>
      </div>
    </div>

    <div class="form__section">
      <div class="form__row">
        <h4 class="form__title">
          Дети (макс. 5)
        </h4>

        <button class="form__button" @click="addChild" :class="{'form__button--active' : childAmount === 5}">
          <svg width="24" height="24">
            <use href="../../src/assets/img/icons.svg#plus"></use>
          </svg>
          Добавить ребенка
        </button>
      </div>

      <div class="form__placeholder">
        Добавьте информацию о ваших детях, если они у вас есть
      </div>

      <child-form v-for="i in children"
                  :key="i"
                  :child="i"
                  @delete="deleteChild(i.id)"
                  @name="saveName($event, i.id)"
                  @age="saveAge($event, i.id)"></child-form>

      <button class="form__save" @click="save">
        Сохранить
      </button>
    </div>
  </form>
</template>

<script>
import ChildForm from "@/components/ChildForm";

export default {
  name: 'FormView',
  components: {
    ChildForm,
  },
  data() {
    return {
      childAmount: 0,
      children: [],
      name: '',
      age: null,
    }
  },
  methods: {
    uniqueId() {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
    saveName(name, id) {
      const resIndex = this.children.findIndex(res => res.id === id);
      this.children[resIndex].name = name
    },
    saveAge(age, id) {
      const resIndex = this.children.findIndex(res => res.id === id);
      this.children[resIndex].age = age
    },
    addChild() {
      if (this.childAmount < 5) {
        this.childAmount++;
        const newChild = {
          id: this.uniqueId(),
          name: '',
          age: null
        };
        this.children.push(newChild)
      }
    },
    deleteChild(id) {
      const resIndex = this.children.findIndex(res => res.id === id)
      this.children.splice(resIndex, 1);
      this.childAmount--;
    },
    save() {
      if (this.name.length > 0 && this.age !== null) {
        if (this.children.length > 0 && this.children.name !== '' && this.children.age !== null) {
          const personDetail = {
            name: this.name,
            age: this.age,
            children: this.children
          }
          this.$store.commit('setPersonalData', personDetail);
        } else {
          const personDetail = {
            name: this.name,
            age: this.age,
            children: []
          }
          this.$store.commit('setPersonalData', personDetail);
        }
      }
    },
  }
}
</script>
