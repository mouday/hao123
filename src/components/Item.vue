<template>
  <a
    class="item"
    :href="item.website"
    target="_blank"
  >
    <div class="item__title-logo">
      <img
        class="item__logo lazyload"
        :data-src="`static/img/${item.icon}`"
      >
      <span class="item__title">{{item.name}}</span>
    </div>

    <div class="item__desc">
      {{item.desc}}
    </div>
  </a>
</template>

<script>
// created at 2021-09-29
export default {
  name: 'Item',

  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async getData() {},

    getSrc(name) {
      const path = `/assets/img/${name}`;
      const modules = import.meta.globEager('/assets/img/**');
      console.log(modules);

      return modules[path].default;
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.item {
  display: block;
  border-radius: 6px;
  background: #ffffff;
  padding: 10px;
  border: 1px solid #e4ecf3;
  box-shadow: 1px 2px 3px #f2f6f8;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  &__logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    object-fit: contain;
  }

  &__title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 700;
    color: #3273dc;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 10px;
  }
  &__desc {
    color: gray;
    font-size: 12px;
    padding-top: 10px;
    height: 35px;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>