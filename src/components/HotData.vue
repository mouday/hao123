<template>
  <div
    class="hot-data"
    v-if="hasHotData"
  >
    <div>最近访问：</div>
    <a
      v-for="item in reverselist"
      :href="item.website"
      target="_blank"
      class="hot-data__item"
    >{{item.name}}</a>
    <div
      @click="clearHotData"
      class="hot-data__item hot-data__item--clear"
    >清空</div>
  </div>
</template>

<script>
// created at 2021-12-22
import { useHotDataStore } from '@/stores/hot-data-store.js';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'HotData',

  props: {},

  components: {},

  data() {
    return {};
  },

  computed: {
    ...mapState(useHotDataStore, ['reverselist', 'hasHotData']),
  },

  methods: {
    async getData() {},
    ...mapActions(useHotDataStore, ['clearHotData']),
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.hot-data {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;

  &__item {
    margin-right: 10px;
    cursor: pointer;
    color: #3273dc;
    :hover {
      opacity: 0.6;
    }

    &--title {
      color: #666666;
      cursor: none;
    }
    &--clear {
      color: #666666;
      // font-size: 14px;
    }
  }
}
</style>
