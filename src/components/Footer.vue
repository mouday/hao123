<template>
  <div class="footer">

    <div class="copyright">Copyright &copy; 2021 <span><a href="https://github.com/mouday/hao123/issues" target="_blank">issues</a></span></div>
  </div>
</template>

<script>
// created at 2021-09-29
export default {
  name: 'Footer',

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
.footer {
  padding-bottom: 20px;
  .copyright {
    color: #949494;
    font-size: 12px;
    text-align: center;
  }
}
</style>