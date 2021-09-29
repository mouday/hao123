<template>
  <div>
    <Header />

    <div class="page-container">
      <template v-for="item, index in tableData">
        <div class="item-container">
          <h2 :id="`id-${index}`">{{item.name}}</h2>
          <div class="item-wrap">
            <template v-for="child in item.children">
              <Item :item="child"></Item>
            </template>
          </div>
        </div>
      </template>
    </div>

    <Footer />

    <FixedNavBar />

  </div>
</template>

<script>
// created at 2021-09-29
import Item from './Item.vue';
import { tableData } from '../data/index.js';
import FixedNavBar from './FixedNavBar.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';

export default {
  name: 'Index',

  props: {},

  components: {
    Item,
    FixedNavBar,
    Footer,
    Header,
  },

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
.page-container {
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
}
.item-container {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;

  h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .item-wrap {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* 指定行列间距 */
    row-gap: 14px;
    column-gap: 14px;
  }
}

@media (max-width: 480px) {
  .page-container {
    width: 94%;
  }
  .item-container {
    .item-wrap {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>