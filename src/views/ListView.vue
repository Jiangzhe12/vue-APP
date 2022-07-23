<template>
  <div>
    <div id="shuru" >
      <input type="text" v-model="msg" v-on:keyup="search" />
      <button @click="add">添加</button>
    </div>
    <ul class="list">
      <li class="content"
        v-for="(item, index) in showList"
        @click="change(item)"
        v-bind:class="{ active: item.isActive }"
        v-bind:key="index"
      >
        <span>{{ item.content }}</span>
        <button @click.stop="del(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      list: [
        {
          content: "阿甘正传",
          isActive: false,
        },
        {
          content: "当幸福来敲门",
          isActive: false,
        },
      ],
      showList: [
        {
          content: "阿甘正传",
          isActive: false,
        },
        {
          content: "当幸福来敲门",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    add() {
      this.list.push({
        content: this.msg,
        isActive: false,
      });
      this.showList = [...this.list];
      this.msg = "";
    },
    change(e) {
      e.isActive = !e.isActive;
    },
    del(index) {
      this.list.splice(index, 1);
      this.showList = [...this.list];
    },
    search() {
      this.showList = this.list.filter((obj) => {
        return obj.content.includes(this.msg);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: red;
}
#shuru{
  background-color: black;
  height: 50px;
  display: flex;
  input{
    flex:4;
  }
  button{
    flex: 1;
  }
}
.list{
  padding: 10px;
}
.content{
  padding: 5px;
  font-size: 20px;
  display: flex;
  span{
    height: 10px;
    flex: 4;
  }
  button{
    flex:1;
  }
}
</style>
