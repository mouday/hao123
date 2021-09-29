<template>
  <div class="fixed-navbar">
    <template v-for="item, index in tableData">
      <a
        :href="`#id-${index}`"
        class="fixed-navbar__item"
      >{{item.name}}</a>
    </template>
    <a
      href="#"
      class="fixed-navbar__item"
    >回顶部</a>
  </div>

</template>

<script>
import { tableData } from '../data/index.js';
// created at 2021-09-29
export default {
  name: 'FixedNav',

  props: {},

  components: {},

  data() {
    return {
      tableData,
    };
  },

  computed: {},

  methods: {
    async getData() {},
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.fixed-navbar {
  display: block;
  width: 66px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: 620px;
  transform: translateY(-50%);
  z-index: 100;
  color: #333;
  background-color: #ffffff;
  border: 1px solid #d8e0ed;
  border-bottom: none;

  &__item {
    color: #666;
    display: block;
    width: 100%;
    height: 32px;
    font-size: 12px;
    line-height: 32px;
    text-align: center;
    border-bottom: 1px solid #d8e0ed;
    background-color: #fff;

    &:hover {
      color: #666;
      background-color: #f6fbff;
    }
  }
}
@media (max-width: 480px) {
  .fixed-navbar {
    display: none;
  }
}
</style>