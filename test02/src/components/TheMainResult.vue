<template>
  <div
  class="start__box-result"
  v-for="(item, index) in fieldsData"
  :key="index"
  >
    <p class="start__result start__result_name">{{ item.name }}</p>
    <p class="start__result start__result_value">{{ item.value }}</p>
  </div>
  <p
  class="start__result-json"
  v-show="fieldsData"
  >
    {{ getJsonData }}
  </p>
</template>

<script>
export default {
  props: {
    fieldsData: Array,
    dataObj: Object,
  },
  computed: {
    getJsonData() {
      return JSON.stringify(this.dataObj);
    },
  },
}
</script>

<style scoped>
.start__box-result {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
}
.start__result {
  font-size: 17px;
  line-height: 23px;
  font-weight: 400;
  margin: 0;
}
.start__result_name {
  font-weight: 600;
}
.start__result_value {
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: right;
  white-space: nowrap;
  width: 50%;
}
.start__result-json {
  margin: 0;
  font-size: 17px;
  line-height: 23px;
  font-weight: 400;
  word-wrap: break-word;
  letter-spacing: 1px;
}
</style>