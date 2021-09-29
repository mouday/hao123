<template>
  <div>
    <Index />
  </div>
</template>

<script>
import Index from './components/Index.vue';
// created at 2021-09-29
export default {
  name: 'App',

  props: {},

  components: {
    Index,
  },

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

<style lang="less">

</style>