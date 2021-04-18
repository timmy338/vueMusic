<template>
  <div id="searchEverTop">
    <el-tabs v-model="activeName" id="mainMenuTop"  @tab-click="handleClick">
      <el-tab-pane
        label="單曲"
        name="/search/searchSong"
        
      ></el-tab-pane>
      <el-tab-pane
        label="歌手"
        name="/search/searchSinger"

      ></el-tab-pane>
      <el-tab-pane
        label="專輯"
        name="/search/searchAlbum"

      ></el-tab-pane>
      <el-tab-pane label="視頻" name="/search/searchVedio" ></el-tab-pane>
      <el-tab-pane label="歌單" name="/search/searchSongList" ></el-tab-pane>
      <el-tab-pane label="歌詞" name="/search/searchLyric" ></el-tab-pane>
      <el-tab-pane label="主播電台" name="/search/searchAnchor" ></el-tab-pane>
      <el-tab-pane label="用戶" name="/search/searchUser" ></el-tab-pane>
    </el-tabs>




  </div>
  
</template>
<script >
export default {
    name: "searchEverTop",
  data() {
    return {
      activeName: "/search/searchSong",
    };
  },
  methods: {

    handleClick(tab) {
         this.$router.push(tab.name);
      }
  },
};
</script>

<style >
#searchEverTop  {
  width: 830px;
  border-bottom: 1px solid #3737373b ;
}
#searchEverTop::-webkit-scrollbar {
  width: 0px;
}
#searchEverTop .el-tabs__header
{
  margin-bottom:0px ;
}
#searchEverTop #mainMenuTop .el-tabs__item {
  font-size: 14px;
  color: #373737;
  padding-right: 12px;

}
#searchEverTop #mainMenuTop .el-tabs__item.is-active {
  color: black;
  font-weight: bold;

}
#searchEverTop .el-tabs__nav
{
  margin-top: 10px;
  padding-left: 32px;
}
#searchEverTop #mainMenuTop .el-tabs__nav-wrap::after {
  background-color: #37373700;
}
#searchEverTop #mainMenuTop .el-tabs__active-bar {
  background-color: #ec414100;
}
#searchEverTop #mainMenuTop .el-tabs__item:hover {
  color: black;
}
#searchEverTop #router-view-div
{
    padding-left: 32px;
  position: relative;
  z-index: 0;
}
</style>