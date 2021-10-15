<template>
  <div class="search">

    <div
      :class="{'search-box': true, 'search-focus': isFocus}"
      id="search-box"
    >

      <form
        name="sf"
        @submit.prevent="onSubmit"
      >
        <select
          class="sec-select"
          v-model="searchEngine"
        >
          <template v-for="item in searchEngineConfig">
            <option :value="item.value">{{item.label}}</option>
          </template>
        </select>

        <span class="sec-input-box">
          <input
            type="text"
            class="sec-input"
            name="query"
            @focus="handleInputFocus"
            @blur="handleInputBlur"
            ref="query"
            id="query"
            maxlength="100"
            len="80"
            v-model="keywords"
            @input="handleInputChange"
            @keypress.enter="handleSubmitClick"
            autocomplete="off"
          >
        </span>

        <span class="enter-input">
          <input
            type="submit"
            @click="handleSubmitClick"
            value="搜索"
            id="stb"
          >
        </span>

      </form>

    </div>
  </div>
</template>

<script>
/**
 * 参考
 * https://www.sogou.com/
 */
import { searchEngineConfig } from '../../config/search-engine.js';

export default {
  name: '',

  components: {},

  data() {
    return {
      keywords: '',
      showSuggestion: false,
      list: '',
      isFocus: true,
      searchEngine: 'baidu',
      searchEngineConfig,
    };
  },

  computed: {},

  methods: {
    handleSubmitClick() {
      for (let item of this.searchEngineConfig) {
        if (this.searchEngine == item.value) {
          window.open(item.callback(this.keywords), '_blank');
        }
      }
    },

    onSubmit() {
      return false;
    },

    callback(list) {
      // console.log(list);

      this.list = list;
      if (this.list.length > 0) {
        this.showSuggestion = true;
      } else {
        this.showSuggestion = false;
      }
    },

    handleInputChange() {
      this.$emit('querySearch', this.keywords, this.callback);
    },

    handleItemClick(val) {
      this.$emit('select', val);
    },

    handleInputFocus() {
      // console.log("focus");
      this.isFocus = true;
      // this.$refs.query.hover()
    },

    handleInputBlur() {
      // console.log("Blur");
      this.isFocus = false;
    },
  },

  created() {},

  mounted() {
    // 自动获得焦点
    this.$nextTick(() => {
      this.$refs.query.focus();
    }, 100);
  },
};
</script>

<style lang="less" scoped>
.search-box {
  margin: 0 auto;
  width: 489px;
  position: relative;
  border-radius: 3px;
  height: 42px;
  border: solid 1px #cccccc;
  padding: 0 110px 0 10px;
  background-color: #ffffff;
}

.search-box:hover {
  border: solid 1px #666;
}

.search-focus {
  border: solid 1px #666;
}
.search-box.querybox-focus {
  border: 1px solid #7a7a7a;
}

.search-box.sugg-open {
  border-radius: 3px 3px 0 0;
}

.sec-input-box {
  display: block;
  *display: inline;
  *zoom: 1;
  padding: 11px 0;
  height: 100%;
  margin-left: 80px;
  background-color: #fff;
}

.search-box .sec-input {
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #333;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  display: block;
  -webkit-appearance: none;
  font-family: arial, 'pingfang sc', stheiti, 'microsoft yahei', sans-serif;
}

.search-box .enter-input {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  border-radius: 0 3px 3px 0;
  background-color: #fafafa;
  border-left: 1px solid #e6e6e6;
}

.search-box .enter-input:hover {
  background-color: #f2f2f2;
}

.search-box .enter-input input {
  width: 99px;
  height: 40px;
  border: 0;
  background: transparent;
  display: block;
  -webkit-appearance: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: 0;
  font-size: 14px;
  font-family: arial, 'pingfang sc', stheiti, 'microsoft yahei', sans-serif;
}

.search-box .sec-select {
  position: absolute;
  left: 0;
  top: 0;
  height: 42px;
  width: 80px;
  border: none;
  padding-right: 10px;
  border-right: 1px solid #cccccc;
}
.big-scn .search-box {
  width: 656px;
}

.big-scn .search-box .sec-input {
  width: 561px;
}

.big-scn .white-skin .fixed .search-box .sec-input {
  width: 561px;
}

@media only screen and (min-width: 1380px) {
  .search-box {
    width: 656px !important;
  }

  .search-box .sec-input {
    width: 100%;
  }
}

.search-box .yuyin-cur .sec-input,
.white-skin .fixed .search-box .yuyin-cur .sec-input {
  padding: 10px 40px 10px 10px;
  width: 499px;
}

// 搜索提示框
.suggestion {
  width: 100%;
  height: 225px;
  position: absolute;
  top: 43px;
  left: 0;
  background: #fff;
  overflow: hidden;
  overflow-y: auto;
  z-index: 3;
  padding: 4px 0;
  font-size: 13px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
}

.suglist li {
  padding: 0 10px;
  line-height: 34px;
  cursor: pointer;
  zoom: 1;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: normal;
  word-break: normal;
  color: #606266;
  font-size: 14px;
  text-align: left;

  &:hover {
    background: #f3f3f3;
  }
}

@media (max-width: 480px) {
  .search {
    padding: 0 10px;
  }
  .search-box {
    width: 100%;
  }
  .sec-input-box {
    width: calc(100% - 180px);
  }
}
</style>
