<template>
  <div id="findMusicEverTop">
    <el-tabs v-model="activeName" id="mainMenuTop" @tab-click="handleClick">
      <el-tab-pane
        label="個性推薦"
        name="/findMusic/recommed"
        font-size="30px"
      ></el-tab-pane>
      <el-tab-pane label="歌單" name="/findMusic/musicList"></el-tab-pane>
      <el-tab-pane label="主播電台" name="/findMusic/anchor"></el-tab-pane>
      <el-tab-pane label="排行榜" name="/findMusic/rankingList"></el-tab-pane>
      <el-tab-pane label="歌手" name="/findMusic/singer"></el-tab-pane>
      <el-tab-pane label="最新音樂" name="/findMusic/newMusic"></el-tab-pane>
    </el-tabs>

    <div id="router-view-div"><router-view></router-view></div>
  </div>
</template>
<script >
export default {
  name: "findMusicEverTop",
  data() {
    return {
      activeName: "/findMusic/recommed",
    };
  },
  methods: {
    handleClick(tab) {
      this.$router.push(tab.name);
    },
  },
};
</script>

<style >
#findMusicEverTop {
  width: 800px;
  height: 537.6px;

  overflow: auto;
  position: relative;
}
#findMusicEverTop::-webkit-scrollbar {
  width: 0px;
}
#findMusicEverTop .el-tabs {
  position: sticky;
  width: 800px;
  padding-top: 16px;
  padding-left: 32px;
  top: 0;
  z-index: 999;
  background-color: white;
}
#findMusicEverTop #mainMenuTop .el-tabs__item {
  font-size: 17.6px;
  color: #373737;
}
#findMusicEverTop #mainMenuTop .el-tabs__item.is-active {
  color: black;
  font-size: 20px;
  font-weight: bold;
}

#findMusicEverTop #mainMenuTop .el-tabs__nav-wrap::after {
  background-color: rgba(255, 0, 0, 0);
}
#findMusicEverTop #mainMenuTop .el-tabs__active-bar {
  background-color: #ec4141;
}
#findMusicEverTop #mainMenuTop .el-tabs__item:hover {
  color: black;
}
#findMusicEverTop #router-view-div {
  padding-left: 32px;
  position: relative;
  z-index: 0;
}
</style>