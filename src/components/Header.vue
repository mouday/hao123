<template>
  <div class="header-wrap">
    <div class="header">
      <a href="#">
        <h1>程序员导航</h1>
      </a>
    </div>
  </div>
</template>

<script>
// created at 2021-09-29
export default {
  name: 'Header',

  props: {},

  components: {},

  data() {
    return {};
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
.header-wrap {
  width: 100%;
  background-color: #fff;
}
.header {
  height: 50px;
  line-height: 50px;
  width: 1200px;
  margin: 0 auto;
  font-size: 18px;
  padding-left: 20px;
  box-sizing: border-box;

  h1 {
    color: #000000;
    display: inline-block;
  }
}

@media (max-width: 480px) {
  .header {
    width: 100%;
  }
}
</style>