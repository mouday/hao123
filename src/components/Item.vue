<template>
  <a class="item" :href="item.website" target="_blank" @click="handleItemClick">
    <div class="item__title-logo">
      <!-- <img class="item__logo lazyload" :data-src="icon" /> -->
      <span class="item__logo" :style="logoStyle">{{ firstLetter }}</span>
      <span class="item__title">{{ item.name }}</span>
    </div>

    <div class="item__desc">
      {{ item.desc || "-" }}
    </div>

    <div class="item__children">
      <template v-for="child in item.children">
        <a
          :href="child.website"
          target="_blank"
          @click.stop="handleChildClick(child)"
          class="item__child"
          >{{ child.name }}</a
        >
      </template>
    </div>
  </a>
</template>

<script>
// created at 2021-09-29
import { useHotDataStore } from "@/stores/hot-data-store.js";
import { mapActions } from "pinia";
import rgbaster from "rgbaster";

// const store = useHotDataStore()
function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

export default {
  name: "Item",

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

  computed: {
    icon() {
      if (this.item.icon) {
        return `${this.$static_url}/static/img/${this.item.icon}`;
      } else {
        return `${this.$static_url}/favicon.ico`;
      }
    },
    firstLetter() {
      return this.item.name[0];
    },

    logoStyle() {
      return {
        color: this.item.color || "#fff",
        "background-color": this.item.backgroundColor || randomColor(),
      };
    },
  },

  methods: {
    async getData() {},

    getSrc(name) {
      const path = `/assets/img/${name}`;
      const modules = import.meta.globEager("/assets/img/**");
      console.log(modules);

      return modules[path].default;
    },

    handleItemClick() {
      console.log("handleItemClick", this.item);
      // this.appendItem(this.item)
      // useHotDataStore.appendItem(this.item)
      this.appendItem(this.item);
    },

    handleChildClick(child) {
      console.log("handleChildClick", child);
      this.appendItem(child);
    },

    ...mapActions(useHotDataStore, ["appendItem"]),
  },

  async mounted() {
    // let icon = new Image();
    // icon.onload = (img) => {
    //   console.log(img);
    //   var colorThief = new ColorThief();

    //   let colors = colorThief.getColor(img);
    //   console.log(colors);
    // };

    // icon.src = this.icon;
    if (!this.item.backgroundColor) {
      let res = await rgbaster(this.icon, { scale: 0.6 });
      console.log(this.item.name, res[0].color);
    }
  },

  created() {
    // console.dir(useHotDataStore);
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
    // transform: scale(1.02);
    border: 1px solid #adb4bb;
    box-shadow: 1px 5px 3px #f2f6f8;
  }

  &__logo {
    width: 30px;
    height: 30px;
    line-height: 1;
    border-radius: 50%;
    vertical-align: middle;
    object-fit: contain;
    // display: inline-block;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
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

  &__child {
    font-size: 13px;
    color: #636e72;
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }

    &::after {
      content: "|";
      padding-left: 5px;
      padding-right: 5px;
    }

    &:last-child::after {
      content: "";
    }
  }
}
@media (max-width: 480px) {
  .item {
    overflow: hidden;
    text-overflow: ellipsis;

    &__title {
      height: 30px;
      line-height: 30px;
    }
    &__desc {
      display: none;
    }
    &__logo {
      height: 30px;
      width: 30px;
    }
    &__title-logo {
      display: flex;
    }
    &__children {
      display: none;
    }
  }
}
</style>
