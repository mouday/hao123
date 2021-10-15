import{o as a,c as r,a as o,t as w,F as u,r as g,p as _,b,d as I,e as l,f as h,w as N,v as D,g as P,h as E,i as F,l as M}from"./vendor.13b77fd8.js";const z=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}};z();var p=(e,s)=>{for(const[c,d]of s)e[c]=d;return e};const A={name:"Item",props:{item:{type:Object,default:()=>({})}},components:{},data(){return{}},computed:{},methods:{async getData(){},getSrc(e){const s=`/assets/img/${e}`,c={};return console.log(c),c[s].default}},created(){this.getData()}},V=["href"],q={class:"item__title-logo"},L=["data-src"],O={class:"item__title"},G={class:"item__desc"},H={class:"item__children"},J=["href"];function T(e,s,c,d,t,n){return a(),r("a",{class:"item",href:c.item.website,target:"_blank"},[o("div",q,[o("img",{class:"item__logo lazyload","data-src":`${e.$static_url}/static/img/${c.item.icon}`},null,8,L),o("span",O,w(c.item.name),1)]),o("div",G,w(c.item.desc||"-"),1),o("div",H,[(a(!0),r(u,null,g(c.item.children,i=>(a(),r("a",{href:i.website,target:"_blank",class:"item__child"},w(i.name),9,J))),256))])],8,V)}var B=p(A,[["render",T],["__scopeId","data-v-aec26df2"]]);const $=[{name:"\u9605\u8BFB",icon:"el-icon-document",children:[{name:"\u77E5\u4E4E",desc:"\u4E2D\u6587\u4E92\u8054\u7F51\u77E5\u540D\u7684\u53EF\u4FE1\u8D56\u95EE\u7B54\u793E\u533A",icon:"www.zhihu.com.ico",website:"https://www.zhihu.com/"},{name:"\u6398\u91D1",desc:"\u4E00\u4E2A\u5E2E\u52A9\u5F00\u53D1\u8005\u6210\u957F\u7684\u793E\u533A",icon:"juejin.im.png",website:"https://juejin.im/"},{name:"CSDN",desc:"\u4E13\u4E1AIT\u6280\u672F\u793E\u533A",icon:"www.csdn.net.ico",website:"https://www.csdn.net/"},{name:"\u83DC\u9E1F\u6559\u7A0B",desc:"\u63D0\u4F9B\u7F16\u7A0B\u7684\u57FA\u7840\u6280\u672F\u6559\u7A0B",icon:"www.runoob.com.png",website:"https://www.runoob.com/"},{name:"\u6155\u8BFE\u7F51",desc:"IT\u6280\u80FD\u5B66\u4E60\u5E73\u53F0",icon:"www.imooc.com.png",website:"https://www.imooc.com/"},{name:"SegmentFault\u601D\u5426",desc:"\u4E2D\u56FD\u9886\u5148\u7684\u5F00\u53D1\u8005\u6280\u672F\u793E\u533A",icon:"segmentfault.com.png",website:"https://segmentfault.com/"},{name:"\u529B\u6263\uFF08LeetCode\uFF09",desc:"\u5168\u7403\u6781\u5BA2\u631A\u7231\u7684\u6280\u672F\u6210\u957F\u5E73\u53F0",icon:"leetcode-cn.com.ico",website:"https://leetcode-cn.com/"},{name:"\u725B\u5BA2\u7F51",desc:"\u4E00\u4E2A\u96C6\u7B14\u9762\u8BD5\u7CFB\u7EDF\u3001\u9898\u5E93\u3001\u8BFE\u7A0B\u6559\u80B2\u7684\u62DB\u8058\u7C7B\u7F51\u7AD9",icon:"www.nowcoder.com.png",website:"https://www.nowcoder.com/"},{name:"\u7F8E\u56E2\u6280\u672F\u56E2\u961F",desc:"",icon:"tech.meituan.com.png",website:"https://tech.meituan.com/"}]},{name:"\u524D\u7AEF",icon:"el-icon-monitor",children:[{name:"Bootstrap",desc:"\u7B80\u6D01\u3001\u76F4\u89C2\u3001\u5F3A\u608D\u7684\u524D\u7AEF\u5F00\u53D1\u6846\u67B6\uFF0C\u8BA9web\u5F00\u53D1\u66F4\u8FC5\u901F\u3001\u7B80\u5355\u3002",icon:"www.bootcss.com.png",website:"https://www.bootcss.com/"},{name:"Iconfont",desc:"\u963F\u91CC\u5988\u5988MUX\u503E\u529B\u6253\u9020\u7684\u77E2\u91CF\u56FE\u6807\u7BA1\u7406\u3001\u4EA4\u6D41\u5E73\u53F0",icon:"www.iconfont.cn.ico",website:"https://www.iconfont.cn/"},{name:"Easyicon",desc:"ICON(SVG/PNG/ICO/ICNS)\u56FE\u6807\u641C\u7D22\u4E0B\u8F7D",icon:"www.easyicon.net.png",website:"http://www.easyicon.net/"},{name:"Element",desc:"\u4E00\u5957\u4E3A\u5F00\u53D1\u8005\u3001\u8BBE\u8BA1\u5E08\u548C\u4EA7\u54C1\u7ECF\u7406\u51C6\u5907\u7684\u57FA\u4E8E Vue 2.0 \u7684\u684C\u9762\u7AEF\u7EC4\u4EF6\u5E93",icon:"element.eleme.cn.png",website:"https://element.eleme.cn/#/zh-CN"},{name:"Vant",desc:"\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93",icon:"vant.youzan.github.io.png",website:"https://youzan.github.io/vant/#/zh-CN/"},{name:"Vue.js",desc:"\u6E10\u8FDB\u5F0FJavaScript \u6846\u67B6",icon:"cn.vuejs.org.png",website:"https://cn.vuejs.org/"},{name:"iView",desc:"\u4E00\u5957\u57FA\u4E8E Vue.js \u7684\u9AD8\u8D28\u91CFUI \u7EC4\u4EF6\u5E93",icon:"www.iviewui.com.ico",website:"https://www.iviewui.com/"},{name:"Ant Design of Vue",desc:"Ant Design \u7684 Vue \u5B9E\u73B0\uFF0C\u5F00\u53D1\u548C\u670D\u52A1\u4E8E\u4F01\u4E1A\u7EA7\u540E\u53F0\u4EA7\u54C1",icon:"www.antdv.com.ico",website:"https://www.antdv.com/"},{name:"FlatUIColors",desc:"280 handpicked colors",icon:"flatuicolors.com.ico",website:"https://flatuicolors.com/"},{name:"\u4E2D\u56FD\u8272",desc:"\u63D0\u4F9B\u5404\u79CD\u4E2D\u56FD\u7684\u4F20\u7EDF\u989C\u8272\u7684\u540D\u79F0",icon:"zhongguose.com.ico",website:"http://zhongguose.com/"},{name:"Font Awesome",desc:"\u63D0\u4F9B\u53EF\u7F29\u653E\u77E2\u91CF\u56FE\u6807,\u5B83\u53EF\u4EE5\u88AB\u5B9A\u5236\u5927\u5C0F\u3001\u989C\u8272\u3001\u9634\u5F71\u4EE5\u53CA\u4EFB\u4F55\u53EF\u4EE5\u7528CSS\u7684\u6837\u5F0F",icon:"www.fontawesome.com.cn.png",website:"http://www.fontawesome.com.cn/"},{name:"jQuery\u63D2\u4EF6\u5E93",desc:"jQuery\u63D2\u4EF6\u4E0B\u8F7D",icon:"www.jq22.com.ico",website:"http://www.jq22.com/"},{name:"\u7231\u7ED9\u7F51",desc:"\u514D\u8D39\u63D0\u4F9B\u514D\u8D39\u7684\u97F3\u6548\u914D\u4E50|3D\u6A21\u578B|\u89C6\u9891|\u6E38\u620F\u7D20\u6750\u8D44\u6E90\u4E0B\u8F7D",icon:"www.aigei.com.ico",website:"http://www.aigei.com/"},{name:"codepen",desc:"The best place to build, test, and discover front-end code.",icon:"codepen.io.ico",website:"https://codepen.io/"},{name:"uni-app",desc:"\u4F7F\u7528 Vue.js \u5F00\u53D1\u6240\u6709\u524D\u7AEF\u5E94\u7528\u7684\u6846\u67B6",icon:"uniapp.dcloud.io.png",website:"https://uniapp.dcloud.io/"},{name:"webpack",desc:"\u6253\u5305\u6240\u6709\u7684\u8D44\u6E90",icon:"webpack.js.org.ico",website:"https://webpack.js.org/"},{name:"Node.js",desc:"\u4E00\u4E2A\u57FA\u4E8E Chrome V8 \u5F15\u64CE \u7684 JavaScript \u8FD0\u884C\u65F6",icon:"nodejs.org.png",website:"https://nodejs.org/zh-cn/"},{name:"NPM",desc:" Node package manager",icon:"www.npmjs.com.png",website:"https://www.npmjs.com/"},{name:"AdonisJs",desc:"\u4E00\u4E2A\u8BED\u6CD5\u6E05\u65B0\u548C\u4F18\u96C5\u7684Node.js Web\u6846\u67B6",icon:"adonisjs.com.cn.png",website:"https://adonisjs.com.cn/"},{name:"Nuxt.js",desc:"\u4E00\u4E2A\u57FA\u4E8E Vue.js \u7684\u670D\u52A1\u7AEF\u6E32\u67D3\u5E94\u7528\u6846\u67B6",icon:"zh.nuxtjs.org.ico",website:"https://zh.nuxtjs.org/"},{name:"Hexo",desc:"\u5FEB\u901F\u3001\u7B80\u6D01\u4E14\u9AD8\u6548\u7684\u535A\u5BA2\u6846\u67B6",icon:"hexo.io.png",website:"https://hexo.io/zh-cn/"},{name:"vue-element-admin",desc:"\u57FA\u4E8E vue \u548C element-ui\u5B9E\u73B0\u7684\u540E\u53F0\u524D\u7AEF\u89E3\u51B3\u65B9\u6848",icon:"vue-element-admin.ico",website:"https://github.com/PanJiaChen/vue-element-admin"},{name:"BootCDN",desc:"\u7A33\u5B9A\u3001\u5FEB\u901F\u3001\u514D\u8D39\u7684\u524D\u7AEF\u5F00\u6E90\u9879\u76EE CDN \u52A0\u901F\u670D\u52A1",icon:"www.bootcdn.cn.png",website:"https://www.bootcdn.cn/"},{name:"Vite",desc:"\u4E00\u79CD\u65B0\u578B\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177",icon:"cn.vitejs.dev.svg",website:"https://cn.vitejs.dev/"}]},{name:"Java",icon:"el-icon-trophy",children:[{name:"Java",desc:"\u4E00\u9879\u7528\u4E8E\u5F00\u53D1\u5E94\u7528\u7A0B\u5E8F\u7684\u6280\u672F",icon:"www.java.com.png",website:"https://www.java.com/zh_CN/"},{name:"WebMagic",desc:"\u4E00\u4E2A\u7B80\u5355\u7075\u6D3B\u7684Java\u722C\u866B\u6846\u67B6",icon:"webmagic.io.ico",website:"http://webmagic.io/"},{name:"Maven Repository",desc:"Search/Browse/Explore",icon:"mvnrepository.com.ico",website:"https://mvnrepository.com/"},{name:"Sonatype",desc:"Maven Central Repository Search",icon:"search.maven.org.ico",website:"https://search.maven.org/"},{name:"Hutool",desc:"\u4E00\u4E2A\u5C0F\u800C\u5168\u7684Java\u5DE5\u5177\u7C7B\u5E93",icon:"hutool.cn.jpg",website:"https://hutool.cn/",children:[{name:"Doc",website:"https://hutool.cn/docs/"},{name:"Github",website:"https://github.com/dromara/hutool/"}]}]},{name:"Python",icon:"el-icon-trophy",children:[{name:"Python",desc:"\u4E00\u79CD\u8DE8\u5E73\u53F0\u3001\u9762\u5411\u5BF9\u8C61\u7684\u52A8\u6001\u7C7B\u578B\u8BED\u8A00",icon:"www.python.org.png",website:"https://www.python.org/"},{name:"Masonite",desc:"\u73B0\u4EE3\u7684\u3001\u4EE5\u5F00\u53D1\u4EBA\u5458\u4E3A\u4E2D\u5FC3\u7684Python Web\u6846\u67B6",icon:"docs.masoniteproject.com.png",website:"https://docs.masoniteproject.com/"},{name:"Matplotlib",desc:"Python \u7684\u7ED8\u56FE\u5E93",icon:"matplotlib.org.ico",website:"https://matplotlib.org/"},{name:"Jinja",desc:"modern and designer-friendly templating language for Python",icon:"jinja.palletsprojects.com.png",website:"https://jinja.palletsprojects.com/"},{name:"Django",desc:"Django makes it easier to build better Web apps more quickly and with less code.",icon:"www.djangoproject.com.ico",website:"https://www.djangoproject.com/"},{name:"Flask",desc:"\u4E00\u4E2A\u7528Python\u7F16\u5199\u7684Web\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6",icon:"flask.palletsprojects.com.png",website:"https://flask.palletsprojects.com/"},{name:"Scrapy",desc:"An open source and collaborative framework for extracting the data you need from websites. In a fast, simple, yet extensible way.",icon:"scrapy.org.png",website:"https://scrapy.org/"},{name:"lxml",desc:"the most feature-rich and easy-to-use library for processing XML and HTML in the Python language",icon:"lxml.de.ico",website:"https://lxml.de/"},{name:"jieba",desc:"\u201C\u7ED3\u5DF4\u201D\u4E2D\u6587\u5206\u8BCD\uFF1A\u505A\u6700\u597D\u7684 Python \u4E2D\u6587\u5206\u8BCD\u7EC4\u4EF6",icon:"github.com.fxsjy.jieba.png",website:"https://github.com/fxsjy/jieba"}]},{name:"PHP",icon:"el-icon-trophy",children:[{name:"PHP",desc:"\u4E00\u79CD\u521B\u5EFA\u52A8\u6001\u4EA4\u4E92\u6027\u7AD9\u70B9\u7684\u5F3A\u6709\u529B\u7684\u670D\u52A1\u5668\u7AEF\u811A\u672C\u8BED\u8A00",icon:"www.php.net.png",website:"https://www.php.net/"},{name:"Laravel",desc:"The PHP Framework for Web Artisans",icon:"laravel.com.ico",website:"https://laravel.com/"},{name:"ThinkPHP",desc:"\u4E00\u4E2A\u4E3AAPI\u5F00\u53D1\u800C\u8BBE\u8BA1\u7684\u9AD8\u6027\u80FD\u6846\u67B6",icon:"www.thinkphp.cn.png",website:"http://www.thinkphp.cn/",children:[{name:"doc6.0",website:"https://www.kancloud.cn/manual/thinkphp6_0/1037479"},{name:"doc5.0",website:"https://www.kancloud.cn/manual/thinkphp5_1/353946"},{name:"doc3.2",website:"http://document.thinkphp.cn/manual_3_2.html"}]}]},{name:"\u5DE5\u5177",icon:"el-icon-suitcase",children:[{name:"JSON",desc:"JSON\u5728\u7EBF\u89E3\u6790\u53CA\u683C\u5F0F\u5316\u9A8C\u8BC1",icon:"www.json.cn.png",website:"https://www.json.cn/"},{name:"Github",desc:"\u9762\u5411\u5F00\u6E90\u53CA\u79C1\u6709\u8F6F\u4EF6\u9879\u76EE\u7684\u6258\u7BA1\u5E73\u53F0",icon:"github.com.png",website:"https://github.com/"},{name:"Gitee\u7801\u4E91",desc:"\u57FA\u4E8E Git \u7684\u4EE3\u7801\u6258\u7BA1\u548C\u7814\u53D1\u534F\u4F5C\u5E73\u53F0",icon:"gitee.com.ico",website:"https://gitee.com/"},{name:"CODING",desc:"\u4E00\u7AD9\u5F0F\u8F6F\u4EF6\u7814\u53D1\u7BA1\u7406\u534F\u4F5C\u5E73\u53F0",icon:"coding.net.ico",website:"https://coding.net/"},{name:"Shields.io",desc:"Github \u4E0A\u5404\u5F0F\u5404\u6837\u7684\u5C0F\u5FBD\u7AE0",icon:"shields.io.png",website:"https://shields.io/"},{name:"Xclient",desc:"\u7CBE\u54C1MAC\u5E94\u7528\u8F6F\u4EF6\u5206\u4EAB",icon:"xclient.info.ico",website:"https://xclient.info/"},{name:"\u54D4\u54E9\u54D4\u54E9",desc:"\u56FD\u5185\u77E5\u540D\u7684\u89C6\u9891\u5F39\u5E55\u7F51\u7AD9",icon:"www.bilibili.com.ico",website:"https://www.bilibili.com/"},{name:"mpv",desc:"a free, open source, and cross-platform media player",icon:"mpv.io.png",website:"https://mpv.io/"},{name:"Typora",desc:"\u4E00\u6B3E\u8F7B\u4FBF\u7B80\u6D01\u7684Markdown\u7F16\u8F91\u5668,\u652F\u6301\u5373\u65F6\u6E32\u67D3",icon:"www.typora.io.png",website:"https://www.typora.io/"},{name:"\u8349\u6599\u4E8C\u7EF4\u7801",desc:"\u4E8C\u7EF4\u7801\u751F\u6210\u5668",icon:"cli.im.ico",website:"https://cli.im/"},{name:"Point ML",desc:"Register your FREE .ML Domain Name",icon:"www.point.ml.ico",website:"http://www.point.ml/"},{name:"TUNA",desc:"\u6E05\u534E\u5927\u5B66\u5F00\u6E90\u8F6F\u4EF6\u955C\u50CF\u7AD9",icon:"mirrors.tuna.tsinghua.edu.cn.png",website:"https://mirrors.tuna.tsinghua.edu.cn/"},{name:"Cloudflare",desc:"\u514D\u8D39CDN\u7F51\u7AD9\u52A0\u901F\u670D\u52A1",icon:"dash.cloudflare.com.ico",website:"https://dash.cloudflare.com/"},{name:"Heroku",desc:"Cloud Application Platform",icon:"www.heroku.com.ico",website:"https://www.heroku.com/"},{name:"Foxmail",desc:"\u90AE\u7BB1\u5BA2\u6237\u7AEF\u8F6F\u4EF6",icon:"www.foxmail.com.ico",website:"https://www.foxmail.com/"},{name:"Snip",desc:" \u7B80\u5355\u9AD8\u6548\u7684\u622A\u56FE\u5DE5\u5177",icon:"snip.qq.com.png",website:"https://snip.qq.com/"},{name:"VSCode",desc:"\u514D\u8D39\u5F00\u6E90\u7684\u7F16\u8F91\u5668",icon:"code.visualstudio.com.ico",website:"https://code.visualstudio.com/"},{name:"ShadowsocksX-NG",desc:"A secure socks5 proxy, designed to protect your Internet traffic.",icon:"shadowsocks.org.png",website:"https://github.com/shadowsocks/ShadowsocksX-NG"},{name:"tinypng",desc:"Smart PNG and JPEG compression",icon:"tinypng.com.ico",website:"https://tinypng.com/"},{name:"freemusicarchive",desc:"Free Music Archive",icon:"freemusicarchive.org.png",website:"https://freemusicarchive.org"},{name:"Server\u9171",desc:"\u4E00\u6B3E\u300C\u624B\u673A\u300D\u548C\u300C\u670D\u52A1\u5668\u300D\u3001\u300C\u667A\u80FD\u8BBE\u5907\u300D\u4E4B\u95F4\u7684\u901A\u4FE1\u8F6F\u4EF6",icon:"sct.ftqq.com.png",website:"https://sct.ftqq.com/"},{name:"Can I use",desc:"Support tables for HTML5, CSS3, etc",icon:"caniuse.com.png",website:"https://caniuse.com/"},{name:"docsify",desc:"\u4E00\u4E2A\u795E\u5947\u7684\u6587\u6863\u7F51\u7AD9\u751F\u6210\u5668",icon:"docsify.js.org.ico",website:"https://docsify.js.org/#/zh-cn/"},{name:"Logoly.Pro",desc:"A Simple Online Logo Generator",icon:"www.logoly.pro.png",website:"https://www.logoly.pro/"},{name:"\u5728\u7EBF\u5DE5\u5177",desc:"\u4F60\u7684\u5DE5\u5177\u7BB1",icon:"tool.lu.ico",website:"https://tool.lu/"},{name:"\u767E\u5EA6\u7FFB\u8BD1",desc:"200\u79CD\u8BED\u8A00\u4E92\u8BD1\u3001\u6C9F\u901A\u5168\u4E16\u754C\uFF01",icon:"fanyi.baidu.com.png",website:"https://fanyi.baidu.com/"}]},{name:"Chrome",icon:"el-icon-bangzhu",children:[{name:"CrxDL.COM",desc:"\u4E0B\u8F7DChrome\u6269\u5C55\u63D2\u4EF6Crx\u79BB\u7EBF\u5B89\u88C5\u5305",icon:"crxdl.com.png",website:"https://crxdl.com/"},{name:"Tampermonkey",desc:"\u4E00\u6B3E\u514D\u8D39\u7684\u6D4F\u89C8\u5668\u6269\u5C55\u548C\u6700\u4E3A\u6D41\u884C\u7684\u7528\u6237\u811A\u672C\u7BA1\u7406\u5668",icon:"www.tampermonkey.net.png",website:"https://www.tampermonkey.net/"},{name:"GreasyFork",desc:"\u4E00\u4E2A\u63D0\u4F9B\u7528\u6237\u811A\u672C\u7684\u7F51\u7AD9",icon:"greasyfork.org.ico",website:"https://greasyfork.org/zh-CN"},{name:"webscraper",desc:"Making web data extraction easy and accessible for everyone",icon:"www.webscraper.io.png",website:"https://www.webscraper.io/"},{name:"EditThisCookie",desc:"A very useful extension, one click to quickly view or remove cookies. ",icon:"www.editthiscookie.com.png",website:"http://www.editthiscookie.com/"}]}];const W={name:"FixedNav",props:{},components:{},data(){return{tableData:$}},computed:{},methods:{async getData(){}},created(){this.getData()}},U=e=>(_("data-v-36fe85d0"),e=e(),b(),e),X={class:"fixed-navbar"},K=["href"],Q=U(()=>o("a",{href:"#",class:"fixed-navbar__item"},"\u56DE\u9876\u90E8",-1));function R(e,s,c,d,t,n){return a(),r("div",X,[(a(!0),r(u,null,g(t.tableData,(i,m)=>(a(),r("a",{href:`#id-${m}`,class:"fixed-navbar__item"},w(i.name),9,K))),256)),Q])}var Y=p(W,[["render",R],["__scopeId","data-v-36fe85d0"]]);const Z={name:"Footer",props:{},components:{},data(){return{}},computed:{},methods:{async getData(){}},created(){this.getData()}},ee=e=>(_("data-v-e1d0033e"),e=e(),b(),e),te={class:"footer"},ne=ee(()=>o("div",{class:"copyright"},[I("Copyright \xA9 2021 "),o("span",null,[o("a",{href:"https://github.com/mouday/hao123/issues",target:"_blank"},"issues")])],-1)),oe=[ne];function se(e,s,c,d,t,n){return a(),r("div",te,oe)}var ce=p(Z,[["render",se],["__scopeId","data-v-e1d0033e"]]);const ie={name:"Header",props:{},components:{},data(){return{}},computed:{},methods:{async getData(){}},created(){this.getData()}},ae=e=>(_("data-v-ba365670"),e=e(),b(),e),re={class:"header-wrap"},de=ae(()=>o("div",{class:"header"},[o("a",{href:"#"},[o("h1",null,"\u7A0B\u5E8F\u5458\u5BFC\u822A")])],-1)),me=[de];function pe(e,s,c,d,t,n){return a(),r("div",re,me)}var le=p(ie,[["render",pe],["__scopeId","data-v-ba365670"]]);const f=[{value:"baidu",label:"\u767E\u5EA6",logo:"/static/img/baidu.png",callback(e){return`https://www.baidu.com/s?wd=${e}`}},{value:"sogou",label:"\u641C\u72D7",logo:"/static/img/sogou.png",callback(e){return`https://www.sogou.com/web?query=${e}`}},{value:"bing",label:"\u5FC5\u5E94",logo:"/static/img/bing.png",callback(e){return`https://cn.bing.com/search?q=${e}`}},{value:"google",label:"Google",logo:"/static/img/google.png",callback(e){return`https://txt.guoqiangti.ga/search?q=${e}`}}];const he={name:"SearchEnginSelect",props:{},components:{},data(){return{currentItem:{},searchEngineConfig:f}},computed:{},methods:{async getData(){},handleItemClick(e){this.currentItem=f[e],this.$emit("on-change",this.currentItem),localStorage.setItem("current-search-engine",JSON.stringify({index:e}))},handleCurrentItemClick(){console.log()}},created(){let e=localStorage.getItem("current-search-engine");e&&(e=JSON.parse(e));let s=e?e.index:0;this.currentItem=f[s],this.$emit("on-change",this.currentItem),this.getData()}},we={class:"search-engin-select"},ue={class:"search-engin-select__current"},ge=["src"],_e={class:"search-engin-select__list"},be=["onClick"],fe=["src"];function ve(e,s,c,d,t,n){return a(),r("div",we,[o("div",ue,[o("a",{class:"search-engin-select__item",href:"#",onClick:s[0]||(s[0]=(...i)=>n.handleCurrentItemClick&&n.handleCurrentItemClick(...i))},[o("img",{src:t.currentItem.logo,class:"search-engin-select__logo"},null,8,ge)])]),o("div",_e,[(a(!0),r(u,null,g(t.searchEngineConfig,(i,m)=>(a(),r("a",{class:"search-engin-select__item",href:"#",onClick:y=>n.handleItemClick(m)},[o("img",{src:i.logo,class:"search-engin-select__logo"},null,8,fe)],8,be))),256))])])}var ye=p(he,[["render",ve],["__scopeId","data-v-12bdda9d"]]);const ke={name:"QQSearch",props:{},components:{SearchEnginSelect:ye},data(){return{keyword:"",searchEngin:null}},computed:{},methods:{async getData(){},handleSearch(){window.open(this.searchEngin.callback(this.keyword),"_blank")},hanldeSearchEnginChange(e){this.searchEngin=e}},created(){this.getData()}},$e={class:"search-bg"},xe={class:"m-search m-search-cs m m-search-simple"},je={class:"form cf"},Se={class:"col-2"},Ce={class:"col-3"};function Ie(e,s,c,d,t,n){const i=l("SearchEnginSelect");return a(),r("div",$e,[o("div",xe,[o("div",je,[h(i,{class:"col-1",onOnChange:n.hanldeSearchEnginChange},null,8,["onOnChange"]),o("div",Se,[N(o("input",{type:"text",autocomplete:"off",name:"wd",maxlength:"255",id:"engineKeyWord","onUpdate:modelValue":s[0]||(s[0]=m=>t.keyword=m),onKeypress:s[1]||(s[1]=P((...m)=>n.handleSearch&&n.handleSearch(...m),["enter"]))},null,544),[[D,t.keyword]])]),o("div",Ce,[o("a",{href:"#",id:"engineBtn",pbflag:"srbtn",onClick:s[2]||(s[2]=(...m)=>n.handleSearch&&n.handleSearch(...m))},"\u641C\u7D22")])])])])}var Ne=p(ke,[["render",Ie],["__scopeId","data-v-c761ece8"]]);const De={name:"Index",props:{},components:{Item:B,FixedNavBar:Y,Footer:ce,Header:le,Search:Ne},data(){return{tableData:$}},computed:{},methods:{async getData(){}},created(){this.getData()}},Pe={class:"page-container"},Ee={class:"item-container"},Fe=["id"],Me={class:"item-wrap"};function ze(e,s,c,d,t,n){const i=l("Header"),m=l("Search"),y=l("Item"),x=l("Footer"),j=l("FixedNavBar");return a(),r("div",null,[h(i),h(m,{class:"margin-top--20"}),o("div",Pe,[(a(!0),r(u,null,g(t.tableData,(k,S)=>(a(),r("div",Ee,[o("h2",{id:`id-${S}`},w(k.name),9,Fe),o("div",Me,[(a(!0),r(u,null,g(k.children,C=>(a(),E(y,{item:C},null,8,["item"]))),256))])]))),256))]),h(x),h(j)])}var Ae=p(De,[["render",ze],["__scopeId","data-v-ba2fc934"]]);const Ve={name:"App",props:{},components:{Index:Ae},data(){return{}},computed:{},methods:{async getData(){}},created(){this.getData()}};function qe(e,s,c,d,t,n){const i=l("Index");return a(),r("div",null,[h(i)])}var Le=p(Ve,[["render",qe]]);const v=F(Le);v.use(M,{loading:"/assets/images/default.png",error:"/assets/images/error.png"});v.config.globalProperties.$static_url="https://cdn.jsdelivr.net/gh/mouday/hao123/public";v.mount("#app");