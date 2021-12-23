/**
 * 热点数据
 */
import { defineStore } from 'pinia';

export const useHotDataStore = defineStore({
  id: 'HotData',

  state: () => {
    return {
      list: [],
    };
  },

  getters: {
    reverselist: (state) => {
      return state.list.reverse();
    },

    hasHotData() {
      return this.reverselist && this.reverselist.length > 0;
    },
  },

  actions: {
    loadHotData() {
      let data = localStorage.getItem('HotData');
      if (data) {
        this.list = JSON.parse(data);
      }
    },

    clearHotData() {
      this.list.splice(0, this.list.length);
      localStorage.removeItem('HotData');
    },

    appendItem(item) {
      // 如果已经存在就删除
      let index = this.list.findIndex((row) => {
        return row.name == item.name;
      });

      if (index > -1) {
        this.list.splice(index, 1);
      }

      // 最多存10个
      this.list.splice(9, this.list.length);

      this.list.push(item);
      localStorage.setItem('HotData', JSON.stringify(this.list));
    },
  },
});
