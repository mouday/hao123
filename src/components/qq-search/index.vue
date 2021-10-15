<template>
  <div class="search-bg">
    <div class="m-search m-search-cs m m-search-simple">
      <div class="form cf">

        <SearchEnginSelect
          class="col-1"
          @on-change="hanldeSearchEnginChange"
        />

        <!-- <div
          class="col-1"
          id="engineList"
        >

          <a
            target="_blank"
            data-id="6247"
            href="https://www.google.com.hk/"
            class="ct search_google"
            id="engineCur"
            pbflag="enlogo"
          >谷歌</a>
          <span
            id="engineMenuBtn"
            pbflag="egpop"
          >
            <i class="ct"></i>
          </span>

          <div
            class="menu"
            pbflag="egpoplogo"
            style="display: none;"
          >

            <a
              target="_blank"
              pburl="http://123.sogou.com"
              data-id="6246"
              href="https://www.sogou.com/?hdq=sogou-site-c91e3483cf4f9005-0001"
              class="ct search_sogou"
            >搜狗搜索</a>

            <a
              target="_blank"
              pburl="http://123.sogou.com"
              data-id="6276"
              href="https://www.soso.com/?hdq=sogou-site-c91e3483cf4f9005-0001"
              class="ct search_soso"
            >搜搜搜索</a>

            <a
              target="_blank"
              pburl="http://123.sogou.com"
              data-id="6247"
              href="https://www.google.com.hk/"
              class="ct search_google"
            >谷歌</a>

            <a
              href="#"
              class="jump-btn jump-btn-show"
            >
              <i class="ct ico-1"></i>
              <i class="ct ico-2"></i>
            </a>

            <div
              class="jump-area cf"
              style="display: block;"
            >
              <a
                class="jump"
                target="_blank"
                title="百度"
                href="https://www.baidu.com"
              >百度搜索</a>
            </div>
          </div>

        </div> -->
        <div class="col-2"><input
            type="text"
            autocomplete="off"
            name="wd"
            maxlength="255"
            id="engineKeyWord"
            v-model="keyword"
            @keypress.enter="handleSearch"
          >
        </div>
        <div class="col-3"><a
            href="#"
            id="engineBtn"
            pbflag="srbtn"
            @click="handleSearch"
          >搜索</a></div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 参考：https://hao.qq.com/
 */
// created at 2021-10-15
import SearchEnginSelect from './SearchEnginSelect.vue';

export default {
  name: 'QQSearch',

  props: {},

  components: {
    SearchEnginSelect,
  },

  data() {
    return {
      keyword: '',
      searchEngin: null,
    };
  },

  computed: {},

  methods: {
    async getData() {},

    handleSearch() {
      window.open(this.searchEngin.callback(this.keyword), '_blank');
    },

    hanldeSearchEnginChange(item) {
      this.searchEngin = item;
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style scoped>
.search-bg {
  position: relative;
}

.m-search-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.2;
  filter: Alpha(opacity=20);
}

.m-search-bg:not(IE9Only) {
  filter: alpha(opacity=20);
}

.m-search {
  /* width: 881px; */

  position: relative;
  /* padding: 16px 0 0 83px; */
  z-index: 80;
}

.m-search ol {
  padding: 0 0 4px 128px;
}

.m-search ol li {
  float: left;
}

.m-search ol li a {
  font-size: 14px;
  float: left;
  padding: 0 10px;
  border-radius: 3px;
  line-height: 24px;
}

.m-search ol li a:hover {
  text-decoration: none;
}

.m-search ol li a.cur {
  font-weight: 700;
  background-color: #e2edfa;
}

.m-search ol li a.cur:hover {
  color: #333;
}

.m-search .form {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.m-search .form .col-1,
.m-search .form .col-2,
.m-search .form .col-3 {
  /* float: left; */
}

.m-search .form .col-1 {
  position: relative;
}

.m-search .form .col-1 a,
.m-search .form .col-1 span {
  float: left;
}

.m-search .form .col-1 a {
  width: 110px;
  height: 36px;
}

.m-search .form .col-1 span {
  width: 28px;
  height: 32px;
  cursor: pointer;
}

.m-search .form .col-1 span i {
  background-position: -10px -1230px;
  float: left;
  display: inline;
  margin: 15px 0 0 7px;
  width: 9px;
  height: 5px;
}

.night .m-search .form .col-1 span i {
  background-position: -10px -1255px;
}

.m-search .form .col-1 .menu {
  display: none;
  width: 120px;
  position: absolute;
  background: #fff;
  top: 36px;
  right: 10px;
  border-width: 1px 1px 0 1px;
  border-color: #ccc #ccc transparent #ccc;
  border-style: solid solid none solid;
  overflow: hidden;
}

.m-search .form .col-1 .menu .jump-area {
  display: none;
  clear: both;
}

.m-search .form .col-1 .menu .search_soso {
  background-position-x: -20px;
}

.night .m-search .form .col-1 .menu .search_soso {
  background-position-x: -20px;
}

.m-search .form .col-1 .menu a {
  width: 120px;
  height: 39px;
  border-bottom: 1px solid #ccc;
}

.m-search .form .col-1 .menu a:hover {
  background-color: #f4f7fd;
}

.m-search .form .col-1 .menu a.jump {
  font-size: 14px;
  line-height: 39px;
  text-align: center;
}

.m-search .form .col-1 .menu a.jump:hover {
  text-decoration: none;
  color: #333;
}

.m-search .form .col-1 .menu a.jump-btn {
  height: 19px;
  background-color: #f3f6f8;
  position: relative;
}

.m-search .form .col-1 .menu a.jump-btn i {
  position: absolute;
  width: 0;
  height: 0;
  border-width: 7px;
  border-style: solid dashed dashed;
  left: 56.5px;
}

.m-search .form .col-1 .menu a.jump-btn .ico-1 {
  border-color: #777 transparent transparent;
  top: 6px;
}

.m-search .form .col-1 .menu a.jump-btn .ico-2 {
  border-color: #f3f6f8 transparent transparent;
  top: 4px;
}

.m-search .form .col-1 .menu a.jump-btn-show i {
  border-style: dashed dashed solid;
}

.m-search .form .col-1 .menu a.jump-btn-show .ico-1 {
  border-color: transparent transparent #777;
  top: -1px;
}

.m-search .form .col-1 .menu a.jump-btn-show .ico-2 {
  border-color: transparent transparent #f3f6f8;
  top: 1px;
}

.m-search .form .col-2 {
  height: 34px;
  border: 1px solid #fff;
  position: relative;
  border-radius: 2px 0 0 2px;
}

.m-search .form .col-2 .sugg {
  display: none;
  position: absolute;
  border: 1px solid #d0dbe5;
  width: 506px;
  background: #fff;
  left: -1px;
  top: 34px;
}

.m-search .form .col-2 .sugg .tj1212 {
  height: 46px;
  background: #fffdec;
}

.m-search .form .col-2 .sugg .tj1212 a {
  display: block;
  height: 100%;
  padding-left: 26px;
  position: relative;
}

.m-search .form .col-2 .sugg .tj1212 a:hover {
  text-decoration: none;
  background-color: #e4f2ff;
}

.m-search .form .col-2 .sugg .tj1212 img {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 6px;
  top: 8px;
}

.m-search .form .col-2 .sugg .tj1212 span {
  display: block;
  font-size: 16px;
  line-height: 18px;
  padding-top: 7px;
}

.m-search .form .col-2 .sugg .tj1212 span i {
  color: #0000cc;
  text-decoration: underline;
}

.m-search .form .col-2 .sugg .tj1212 span b {
  color: #cc0000;
  text-decoration: underline;
}

.m-search .form .col-2 .sugg .tj1212 em {
  display: block;
  font-size: 14px;
  line-height: 16px;
  color: #999;
}

.m-search .form .col-2 .sugg ul li {
  padding: 0 6px;
  line-height: 24px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
}

.m-search .form .col-2 .sugg ul li span {
  font-weight: 400;
}

.m-search .form .col-2 .sugg ul li.cur {
  color: #fff;
  background-color: #36c;
}

.m-search .form .col-2 .tri-button {
  position: absolute;
  top: 2px;
  height: 30px;
  width: 30px;
  right: 0px;
  background-color: #fff;
  cursor: pointer;
}

.m-search .form .col-2 .tri-button span {
  position: absolute;
  height: 5px;
  width: 9px;
  top: 13px;
  left: 10px;
  background-position: -10px -1280px;
}

.m-search .form .col-2 .tri-button span.up {
  background-position: -10px -1305px;
}

.m-search .form .col-2 input {
  border: 0 none;
  outline: none;
  width: 464px;
  height: 16px;
  line-height: 16px;
  padding: 9px 36px 9px 6px;
  font-size: 14px;
  /* float: left; */
}

.m-search .form .col-3 a {
  width: 84px;
  height: 36px;
  background: #0088ff;
  font-size: 16px;
  text-align: center;
  display: block;
  line-height: 36px;
  color: #fff;
  border-radius: 0 2px 2px 0;
}

.m-search .form .col-3 a:hover {
  text-decoration: none;
}

.m-search .hot-wd {
  padding: 1px 0 5px;
  height: 30px;
  margin-left: 138px;
  position: relative;
}

.m-search .hot-wd .row {
  position: relative;
}

.m-search .hot-wd .row li {
  float: left;
  margin-right: 15px;
}

.m-search .hot-wd .row li img,
.m-search .hot-wd .row li span,
.m-search .hot-wd .row li em {
  float: left;
  color: #333;
}

.m-search .hot-wd .row li a {
  float: left;
  line-height: 30px;
  display: inline;
}

.m-search .hot-wd .row li a:hover em {
  color: #268fff;
  text-decoration: underline;
}

.m-search .hot-wd .row li a span {
  color: #999;
}

.m-search .hot-wd .row li img {
  width: 16px;
  height: 16px;
  margin-right: 3px;
  margin-top: 6px;
}

.m-search .hot-wd .row li span {
  padding-left: 7px;
}

.m-search .hot-wd .row li .close {
  display: none;
  width: 12px;
  height: 12px;
  margin: 9px 0 0 3px;
}

.m-search .hot-wd .row li.first {
  margin-right: 1px;
}

.m-search .hot-wd .row li.first a {
  display: block;
  width: 16px;
  height: 12px;
  background-position: -10px -788px;
  margin-top: 9px;
}

.night .m-search .hot-wd .row li.first a {
  background-position: -10px -820px;
}

.m-search .hot-wd .row li.last {
  margin: 0 0 0 -7px;
}

.m-search .hot-wd .row li.last a {
  width: 50px;
  text-align: center;
  padding: 0 20px 0 8px;
  float: left;
  margin-top: 5px;
  height: 20px;
  line-height: 20px;
  position: relative;
  border-radius: 2px;
}

.night .m-search .hot-wd .row li.last a {
  color: #fff;
}

.m-search .hot-wd .row li.last a i {
  position: absolute;
  right: 5px;
  width: 9px;
  height: 5px;
  background-position: -10px -948px;
}

.night .m-search .hot-wd .row li.last a i {
  background-position: -10px -973px;
}

.m-search .hot-wd .row li.last a .i-1 {
  top: 8px;
}

.m-search .hot-wd .row li.last a .i-2 {
  display: none;
}

.m-search .hot-wd .row li.last a:hover {
  color: #268fff;
}

.m-search .hot-wd .row li.last a:hover .i-1 {
  background-position: -10px -998px;
}

.night .m-search .hot-wd .row li.last a:hover .i-1 {
  background-position: -10px -973px;
}

.night .m-search .hot-wd .row li.last a:hover {
  color: #fff;
}

.m-search .hot-wd .row li.last .down .i-1 {
  background-position: -10px -1130px;
}

.night .m-search .hot-wd .row li.last .down .i-1 {
  background-position: -10px -1155px;
}

.m-search .hot-wd .row li.last .down:hover .i-1 {
  background-position: -10px -1105px;
}

.night .m-search .hot-wd .row li.last .down:hover .i-1 {
  background-position: -10px -1155px;
}

.m-search .hot-wd .row-1 {
  width: 597px;
}

.m-search .hot-wd .row-1 .close {
  background-position: -10px -852px;
}

.night .m-search .hot-wd .row-1 .close {
  background-position: -10px -884px;
}

.m-search .hot-wd .row-1 .close:hover {
  background-position: -10px -916px;
}

.night .m-search .hot-wd .row-1 a em,
.night .m-search .hot-wd .row-1 a:hover em {
  color: #fff;
}

.m-search .hot-wd .row-2 {
  display: none;
  width: 494px;
  position: absolute;
  background-color: #fff;
  border: 1px solid #c3ccd6;
  padding: 8px 0 10px 12px;
  top: 32px;
  border-color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  z-index: 71;
}

.m-search .hot-wd .row-2 li {
  width: 123px;
  height: 28px;
  margin-right: 0;
}

.m-search .hot-wd .row-2 li a {
  line-height: 28px;
}

.m-search .hot-wd .row-2 li a:hover {
  position: relative;
}

.m-search .hot-wd .row-2 li a:hover .title {
  display: block;
  border-radius: 2px;
  position: absolute;
  line-height: 22px;
  background-color: #fff;
  white-space: nowrap;
  padding: 0 3px;
  left: 18px;
  top: 2px;
  z-index: 1;
  border: 1px solid #e0e4e8;
  text-decoration: underline;
}

.m-search .hot-wd .row-2 li a:hover .txt {
  text-decoration: underline;
}

.m-search .hot-wd .row-2 li img {
  margin-top: 6px;
}

.m-search .hot-wd .row-2 li .close {
  margin-top: 8px;
}

.m-search .hot-wd .row-2 li .title {
  display: none;
}

.m-search .hot-wd .row-2 .close {
  background-position: -10px -1073px;
}

.m-search .hot-wd .row-2 .close:hover {
  background-position: -10px -916px;
}

.m-search .hot-wd .tips-1,
.m-search .hot-wd .tips-2 {
  display: none;
  left: -46px;
  top: 32px;
  position: absolute;
  background-color: #fff;
  border: 1px solid #c3ccd6;
}

.m-search .hot-wd .tips-1 {
  width: 102px;
}

.m-search .hot-wd .tips-1 i {
  position: absolute;
  left: 46px;
  width: 0;
  height: 0;
  border-width: 7px;
  border-style: dashed dashed solid;
  border-color: transparent transparent #c3ccd6;
}

.m-search .hot-wd .tips-1 .i-1 {
  top: -14px;
}

.m-search .hot-wd .tips-1 .i-2 {
  top: -13px;
  border-bottom-color: #fff;
}

.m-search .hot-wd .tips-1 a {
  display: block;
  height: 34px;
  line-height: 34px;
  border-bottom: 1px dashed #d0d7df;
  text-align: center;
}

.m-search .hot-wd .tips-1 .last {
  border-bottom: 0 none;
}

.m-search .hot-wd .tips-2 {
  width: 232px;
}

.m-search .hot-wd .tips-2 em {
  display: block;
  border-bottom: 1px dashed #d0d7df;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  text-align: center;
}

.m-search .hot-wd .tips-2 p {
  height: 50px;
  text-align: center;
}

.m-search .hot-wd .tips-2 p .btn-1,
.m-search .hot-wd .tips-2 p .btn-2 {
  display: inline-block;
  margin-top: 13px;
  width: 64px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  border: 1px solid #fff;
}

.m-search .hot-wd .tips-2 p .btn-2 {
  border: 1px solid #528dd3;
  background-color: #5c97de;
  color: #fff;
  border-radius: 2px;
}

.m-search .hot-wd-edit .row li.first a {
  background-position: -10px -724px;
}

.night .m-search .hot-wd-edit .row li.first a {
  background-position: -10px -756px;
}

.m-search .hot-wd-edit .row li.last {
  visibility: hidden;
}

.m-search .hot-wd-edit .row li .close {
  float: right;
  margin-right: 12px;
  display: inline;
}

.m-search .hot-wd-edit .row-1 li {
  margin-right: 5px;
}

.m-search .hot-wd-edit .row-1 li.first {
  margin-right: 0;
}

.m-search .hot-wd-edit .row-1 li .close {
  margin-right: 0;
}

.m-search .hot-wd-edit .row-2 li a:hover .title {
  display: none;
}

.m-search .cs_right_hw {
  width: 120px;
  height: 20px;
  overflow: hidden;
  position: absolute;
  top: 22px;
  z-index: 2;
  left: 832px;
}

.w1200 .m-search .cs_right_hw {
  left: 925px;
}

.m-search .cs_right_hw_list {
  position: relative;
}

.m-search .cs_right_hw_list li {
  width: 108px;
  float: left;
  height: 20px;
  white-space: nowrap;
  padding-left: 12px;
  position: relative;
}

.m-search .cs_right_hw_list li i {
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: #61a5f2;
  position: absolute;
  top: 8px;
  left: 0;
}

.night .m-search .cs_right_hw_list li i {
  background-color: #fff;
  opacity: 0.65;
}

.m-search .cs_right_hw_list li a {
  width: 135px;
  line-height: 20px;
}

.night .m-search .cs_right_hw_list li a {
  color: #fff;
}

.m-search .cs_right_hw_list li a:hover {
  text-decoration: underline;
}

.m-search .cs_dropbox {
  top: 52px;
  position: absolute;
  border: 1px solid #d0dbe5;
  width: 506px;
  background: #fff;
  left: 221px;
  z-index: 1;
  overflow: hidden;
}

.w1200 .m-search .cs_dropbox {
  left: 245px;
}

.m-search .cs_dropbox .dropBox_list {
  overflow: hidden;
}

.m-search .cs_dropbox .dropBox_list li {
  width: 100%;
  float: left;
  text-overflow: ellipsis;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}

.m-search .cs_dropbox .dropBox_list li.last {
  display: none;
  width: 494px;
  text-align: right;
  padding: 0 12px 8px 0;
  color: #999;
  cursor: default;
  margin-top: -6px;
  line-height: 14px;
}

.m-search .cs_dropbox .dropBox_list a {
  line-height: 26px;
  font-size: 14px;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
  float: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  outline: none;
}

.m-search .cs_dropbox .dropBox_list i {
  float: left;
  width: 14px;
  height: 14px;
  margin: 6px 0 0 10px;
  background-color: red;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  background-color: #c5ced7;
  color: #fff;
}

.m-search .cs_dropbox .dropBox_list i.ico-0,
.m-search .cs_dropbox .dropBox_list i.ico-1,
.m-search .cs_dropbox .dropBox_list i.ico-2 {
  background-color: #ef6e51;
}

.m-search .cs_dropbox .dropBox_list img {
  float: left;
  margin: 7px 0 0 6px;
}

.m-search .cs_dropbox .dropBox_list span {
  float: left;
  padding-left: 10px;
  overflow: hidden;
}

.m-search .search-gray .col-1 span i {
  border-top-color: #dcdddd;
}

.m-search .search-other .col-1 span i {
  border-top-color: #4789d7;
}

@media (max-width: 480px) {
  .m-search .form .col-2 input {
    width: 140px;
  }
}
</style>