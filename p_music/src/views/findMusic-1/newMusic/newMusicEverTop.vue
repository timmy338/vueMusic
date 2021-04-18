<template>
  <div id="newMusicEverTop">
    <el-tabs v-model="activeName" id="mainMenuTop" @tab-click="handleClick">
      <el-tab-pane label="全部" name="0"></el-tab-pane>
      <el-tab-pane label="華語" name="7"></el-tab-pane>
      <el-tab-pane label="歐美" name="96"></el-tab-pane>
      <el-tab-pane label="韓國" name="8"></el-tab-pane>
      <el-tab-pane label="日本" name="16"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script >
export default {
  name: "newMusicEverTop",
  props: ["isClick", "getNewSong", "isClickRouter2","getNewCD"],
  data() {
    return {
      activeName: "0",
      change:"",
    };
  },
  methods: {
    setClickCity(fit) {
    switch (fit) {
      case "0":
        this.change = 'ALL';
        break;
      case "7":
        this.change = "ZH";
        break;
      case "96":
        this.change = "EA";
        break;
      case "16":
        this.change = "JP";
        break;
      case "8":
        this.change = "KR";
        break;
    }
  },
    handleClick(tab) {
      this.$emit("update:isClick", tab.name);
      this.setClickCity(tab.name);
      this.$emit("update:isClickRouter2",this.change );
      this.activeName = tab.name;
      this.$emit("getNewSong");
      this.$emit("getNewCD");
    },
  },
  
};
</script>

<style >
#newMusicEverTop {
  width: 300px;
  float: left;
}
#newMusicEverTop #mainMenuTop {
  padding-left: 0;
}
#newMusicEverTop .el-tabs__header {
  margin-bottom: 0px;
}
#newMusicEverTop .el-tabs__nav-scroll {
  width: 300px;
}
#newMusicEverTop .el-tabs {
  width: 300px;
}
#newMusicEverTop #mainMenuTop .el-tabs__item {
  font-size: 14px;
  color: #373737;
  padding-right: 12px;
}
#newMusicEverTop #mainMenuTop .el-tabs__item.is-active {
  color: black;
  font-weight: bold;
  font-size: 14px;
}
#newMusicEverTop .el-tabs__nav {
  margin-top: 10px;
}
#newMusicEverTop #mainMenuTop .el-tabs__nav-wrap::after {
  background-color: #37373700;
}
#newMusicEverTop #mainMenuTop .el-tabs__active-bar {
  background-color: #ec414100;
}
#newMusicEverTop #mainMenuTop .el-tabs__item:hover {
  color: black;
}
#newMusicEverTop #router-view-div {
  position: relative;
  z-index: 0;
}
</style>