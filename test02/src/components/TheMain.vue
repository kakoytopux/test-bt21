<template>
  <TheHeader />
  <main class="content">
    <section class="start">
      <button
      type="button"
      class="start__btn btn"
      @click="openPopup"
      >
        Начать
      </button>
      <div class="start__container-result">
        <TheMainResult
        :fieldsData="fieldsData"
        :dataObj="dataObj"
        />
      </div>
    </section>
  </main>

  <ThePopup
  :popup="popup"
  :closePopup="closePopup"
  :setFieldValue="setFieldValue"
  />
</template>

<script>
import ThePopup from './ThePopup.vue';
import TheMainResult from './TheMainResult.vue';
import TheHeader from './TheHeader.vue';

export default {
  components: {
    ThePopup,
    TheMainResult,
    TheHeader,
  },
  data() {
    return {
      popup: false,
      fieldsData: null,
      dataObj: {},
    }
  },
  methods: {
    openPopup() {
      this.popup = true;
    },
    closePopup() {
      this.popup = false;
    },
    setFieldValue(data) {
      this.fieldsData = data;

      data.forEach(item => {
        this.dataObj[item.name] = item.value;
      });
    },
  },
}
</script>

<style scoped>
.start {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.start__btn {
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  background-color: #808080;
  color: #f5f5f5;
  border-radius: 10px;
  width: 110px;
  height: 50px;
  transition: background-color .2s;
}
.start__btn:hover {
  background-color: rgba(128, 128, 255, .7);
}
.start__container-result {
  max-width: 400px;
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
