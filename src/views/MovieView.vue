<template>
  <div>
    <ul class="tv-list">
      <li class="tv-item" v-for="item in tvList" :key="item.id">
        <div class="img">
          <img :src="'https://images.weserv.nl/?url=' + item.cover.url" alt />
        </div>
        <div class="content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.info }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tvList: [],
      start: 0,
      isFinish:true,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.listenScroll();
  },
  methods: {
    // 跨域问题：当你网页所在的地址与你接口的地址（协议，域名，端口号），任何一个不同都会引起跨域问题（因为浏览器的同源策略）
    // 解决：jsonp，让后端配置（cors），服务器代理
    // jsonpBird v2 乱码
    getData() {
      // let baseUrl = "https://bird.ioliu.cn/v2?url=";
      // let tvUrl =
      //   "https://m.douban.com/rexxar/api/v2/subject_collection/tv_american/items?os=ios&for_mobile=1&start=0&count=18&loc_id=108288&_=1652267076841";
      // this.axios
      //   .get(baseUrl + tvUrl)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => console.log(err));
      if(this.isFinish){
        this.isFinish = false;
        this.axios
        .get(
          `api/rexxar/api/v2/subject_collection/tv_american/items?os=ios&for_mobile=1&start=${this.start}&count=10`
        )
        .then((res) => {
          this.tvList = this.tvList.concat(res.data.subject_collection_items);
          this.isFinish = true; 
        })
        .catch((err) => console.log(err));
      }
    },
    listenScroll() {
      // 获取html元素
      let htmlDom = document.documentElement;
      let body = document.body;
      // 获取窗口高度
      let deviceHeight = htmlDom.clientHeight;
      let fullHeight = 0;
      let scrollTop = 0;
      window.onscroll = () => {
        // 页面总高度
        fullHeight = body.offsetHeight;
        // 滚动条距离顶部的距离
        scrollTop = htmlDom.scrollTop;
        if (scrollTop + deviceHeight > fullHeight - 20) {
          if(this.isFinish){
            this.start += 10;
          }
          if(this.start < 50){
             this.getData();
          } 
          console.log("滚动到底部");
        }
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.tv-list {
  .tv-item {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #cccccc;
    .img {
      flex: 3;
      img {
        width: 100%;
      }
    }
    .content {
      flex: 5;
      padding: 10px;
      h3 {
        font-weight: bolder;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
