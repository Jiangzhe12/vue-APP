<template>
  <header :style="{ backgroundColor: curMenu.bgColor }">
  <span class="home" @click="goHome">首页</span>
      {{curMenu.name}}
  </header>
</template>

<script>
import { mapState,mapMutations} from "vuex";
export default {
    computed:{
        ...mapState(['curMenu']),
    },
    methods:{
        ...mapMutations(['setCurMenu']),
        goHome(){
            this.$router.push('/');
            this.setCurMenu({
                name:"剧集",
                bgColor:"red",
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        height: 1rem;
        line-height: 50px;
        text-align: center;
        background-color: red;
        position: fixed;
        top: 0;
        left: 0;
        color: #ffffff;
        .home{
            position: absolute;
            left: 0;
        }
    }
</style>