<template>
  <div
    id="book"
    v-loading.fullscreen="loading"
    element-loading-text="Loading..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(122, 122, 122, 0.8)"
  >
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in carouselList" :key="item">
          <img :src="'https://images.weserv.nl/?url=' + item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tab">
      <el-tabs
        :stretch="true"
        v-model="activeName"
        class="demo-tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane label="虚构类" name="fiction">
        </el-tab-pane>
        <el-tab-pane label="非虚构类" name="nonfiction">
        </el-tab-pane>
      </el-tabs>
      <div class="book-list">
        <el-row v-for="item in bookList" :key="item.id">
          <el-col :span="8">
            <div class="img">
              <img
                :src="'https://images.weserv.nl/?url=' + item.cover.url"
                alt=""
              />
            </div>
          </el-col>
          <el-col :span="16"
            ><div class="content">
              <h3>{{ item.title }}</h3>
              <h3>{{ item.info }}</h3>
              <div class="rate">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                />
              </div></div
          ></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      carouselList: [],
      bookList: [],
      activeName: "fiction",
      loading: false,
      value: ref(4),
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      this.axios
        .get(
          `api/rexxar/api/v2/subject_collection/book_${this.activeName}/items?os=windows&start=0&count=8`
        )
        .then((res) => {
          this.carouselList = res.data.subject_collection_items.map((item) => {
            return item.cover.url;
          });
          this.bookList = res.data.subject_collection_items;
          this.loading = false;
        })
        .catch((err) => console.log(err));
    },
    handleClick() {
      this.getData();
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  img {
    width: 100%;
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.tab {
  padding: 0.2rem;
  .book-list {
    .img {
      img {
        width: 100%;
      }
    }
    .content {
      padding: 0.2rem;
      h3 {
        font-weight: bolder;
        margin-bottom: 0.4rem;
      }
    }
  }
}
</style>
