<template>
  <div
  class="popup"
  :class="{ popup_active: popup }"
  @click.self="closePopup"
  >
    <div class="popup__container">
      <h2 class="popup__title">Попап</h2>
      <form
      class="popup__form"
      @submit.prevent="onSubmit"
      >
        <div class="popup__box-fields">
          <input
          type="text"
          class="popup__field"
          placeholder="Введите имя"
          required
          name="name"
          v-model="name"
          />
          <input
          type="text"
          class="popup__field"
          placeholder="Введите фамилию"
          required
          name="surname"
          v-model="surname"
          />
          <input
          type="number"
          class="popup__field"
          placeholder="Введите возраст"
          required
          name="age"
          v-model="age"
          />
          <input
          type="email"
          class="popup__field"
          placeholder="Введите почту"
          required
          name="email"
          v-model="email"
          />
          <input
          type="password"
          class="popup__field"
          placeholder="Введите пароль"
          required
          name="password"
          v-model="password"
          />
        </div>
        <button
        type="submit"
        class="popup__btn-submit btn"
        >
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    popup: Boolean,
    closePopup: Function,
    setFieldValue: Function,
  },
  data() {
    return {
      name: '',
      surname: '',
      age: '',
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      this.closePopup();

      this.setFieldValue([
        {
          name: 'name',
          value: this.name,
        },
        {
          name: 'surname',
          value: this.surname,
        },
        {
          name: 'age',
          value: this.age,
        },
        {
          name: 'email',
          value: this.email,
        },
        {
          name: 'password',
          value: this.password,
        },
      ]);
    },
  },
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  background-color: rgba(0, 0, 0, .4);
  transition: all .3s;
}
.popup_active {
  opacity: 1;
  visibility: visible;
  z-index: 10;
}
.popup__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  padding: 70px 40px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: steelblue;
}
.popup__title {
  font-size: 30px;
  line-height: 36px;
  font-weight: 400;
  margin: 0;
  color: brown;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.popup__box-fields {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 50px;
}
.popup__field {
  height: 25px;
  outline: 0;
  border: 1px solid #000;
  padding: 0 0 0 7px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: 10px;
}
.popup__btn-submit {
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  background-color: #000;
  margin-top: 50px;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  color: #fff;
}
</style>
