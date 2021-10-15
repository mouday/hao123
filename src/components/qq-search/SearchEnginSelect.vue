<template>
  <div class="search-engin-select">

    <div class="search-engin-select__current">
      <a
        class="search-engin-select__item"
        href="#"
        @click="handleCurrentItemClick"
      >
        <img
          :src="`${$static_url}/static/img/${currentItem.logo}`"
          class="search-engin-select__logo"
        >
      </a>
    </div>

    <div class="search-engin-select__list">
      <template v-for="(item, index) in searchEngineConfig">
        <a
          class="search-engin-select__item"
          href="#"
          @click="handleItemClick(index)"
        >
          <img
            :src="`${$static_url}/static/img/${item.logo}`"
            class="search-engin-select__logo"
          ></a>
      </template>
    </div>
  </div>
</template>

<script>
// created at 2021-10-15
import { searchEngineConfig } from '@/config/search-engine.js';

export default {
  name: 'SearchEnginSelect',

  props: {},

  components: {},

  data() {
    return {
      currentItem: {},
      searchEngineConfig,
    };
  },

  computed: {},

  methods: {
    async getData() {},

    handleItemClick(index) {
      this.currentItem = searchEngineConfig[index];
      this.$emit('on-change', this.currentItem);

      localStorage.setItem(
        'current-search-engine',
        JSON.stringify({ index: index })
      );
    },

    handleCurrentItemClick() {
      console.log();
    },
  },

  created() {
    let currentSearchEngine = localStorage.getItem('current-search-engine');

    if (currentSearchEngine) {
      currentSearchEngine = JSON.parse(currentSearchEngine);
    }

    let currentSearchEngineIndex = currentSearchEngine
      ? currentSearchEngine.index
      : 0;
    this.currentItem = searchEngineConfig[currentSearchEngineIndex];

    this.$emit('on-change', this.currentItem);
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.search-engin-select {
  position: relative;

  &__current {
    display: block;
    text-align: center;
    background-color: #ffffff;
    // line-height: 36px;
    text-align: center;
  }

  &:hover &__list {
    display: block;
  }

  &__list {
    display: none;
    padding: 10px 0;
    position: absolute;
    top: 36px;
    left: 0;
    background-color: #ffffff;
    text-align: center;
    border: 1px solid #d8e0ed;
  }

  &__item {
    display: block;
    padding: 5px;
    box-sizing: border-box;
    color: #666;
    width: 80px;
    height: 36px;

    &:hover {
      background-color: #f6fbff;
    }
  }

  &__logo {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>