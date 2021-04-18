<template>
  <div id="newSong">
    <div id="NewSongTag">
      <div id="middleRightDiv">
        <div id="left">
          <span><i class="fas fa-play"></i> 播放全部</span>
        </div>
        <div id="right">
          <span><i class="fas fa-folder-plus"></i> 收藏全部</span>
        </div>
      </div>
    </div>
    <router-view :songDetails="songDetails"></router-view>
  </div>
</template>
<script>
const axios = require("axios");

export default {
  props: ["songDetails"],
  data() {
    return {};
  },
  components: {},
  mounted() {},
};
</script>
<style>
#NewSongTag {
  margin-top: 35px;
  float: right;
}
#NewSongTag #middleRightDiv #left {
  float: left;
  background-color: #ec4141;
  border-radius: 3em;
  color: white;
}
#NewSongTag #middleRightDiv #left span {
  display: inline-block;
  font-size: 13px;
  padding: 6px 10px;
}
#NewSongTag #middleRightDiv #right {
  margin-left: 10px;
  float: left;
  border: solid 1px #d8d8d8;
  border-radius: 3em;
  color: #d8d8d8;
}
#NewSongTag #middleRightDiv #right span {
  display: inline-block;
  font-size: 13px;
  padding: 6px 10px;
  color: black;
}
</style> 
