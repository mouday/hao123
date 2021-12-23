<template>
  <div>
    <Index />
  </div>
</template>

<script>
import Index from './components/Index.vue';
import { useHotDataStore } from '@/stores/hot-data-store.js';
import { mapActions } from 'pinia';

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
    async getData() {
      this.loadHotData();
    },

    ...mapActions(useHotDataStore, ['loadHotData']),
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="less">
</style>