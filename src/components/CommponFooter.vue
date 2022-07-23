<template>
  <footer id="footer" :style="{ backgroundColor: curMenu.bgColor }">
    <div v-for="obj in menuList" :key="obj.path" @click="changeMenu(obj)">
      <router-link :to="obj.path">{{ obj.name }}</router-link>
    </div>
  </footer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      menuList: [
        {
          path: "/",
          name: "剧集",
          bgColor: "#ff0000",
        },
        {
          path: "/BookView",
          name: "书籍",
          bgColor: "#f36220",
        },
        {
          path: "/ListView",
          name: "列表",
          bgColor: "#f36420",
        },
        
      ],
    };
  },

  computed: {
    ...mapState(['curMenu']),
  },

  methods: {
    ...mapMutations(['setCurMenu']),
    changeMenu(obj) {
      this.setCurMenu(obj);
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background-color: red;
  position: fixed;
  bottom: 0;
  left: 0;
  a {
    color: black;
  }
  .router-link-exact-active{
    color: aliceblue;
  }
}
</style>
