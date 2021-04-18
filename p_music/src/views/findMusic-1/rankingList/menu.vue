<template>
  <div id="findMusicRanking">
    <p id="title-1">官方榜</p>
    <div id="RankingOne">
      <RankingImage :Image="rankOneImage"  @click="routerClick(rankOneImage)"></RankingImage>
      <rankingSongList :rankingResult="rankOneSong" ></rankingSongList>
    </div>
    <div id="RankingTwo">
      <RankingImage :Image="rankTwoImage" @click="routerClick(this.rankTwoImage)"></RankingImage>
      <rankingSongList :rankingResult="rankTwoSong"></rankingSongList>
    </div>

    <p id="title-2">全球榜</p>
    <div id="global">
      <globalRank :mainMenuMusicListRecommed="globalList"></globalRank>
    </div>
  </div>
</template>
<script>
import RankingImage from "../../../components/RankingImage";
import rankingSongList from "../../../components/rankingSongList";
import globalRank from "./globalRank"
const axios = require("axios");
export default {
  data() {
    return {
      rankOneImage: "",
      id1: "",
      rankOneSong: [],
      rankTwoImage: "",
      rankTwoSong: [],
      globalList:[],
    };
  },
  components: {
    RankingImage,
    rankingSongList,
    globalRank
  },
  mounted() {
    this.getRankingImage();
  },
  methods: {
    getRankingImage() {
      var that = this;
      axios.get("http://localhost:3000/toplist").then(
        (res) => {
          /* console.log(res); */
          that.rankOneImage = res.data.list[0];
          that.rankTwoImage = res.data.list[1];
          that.getRankingSong("rankOneSong", res.data.list[0].id);
          that.getRankingSong("rankTwoSong", res.data.list[1].id);
          that.globalList=res.data.list.slice(4, 14);
        },
        (res) => {}
      );
    },
    getRankingSong(rankSong, id) {
      var that = this;
      axios.get("http://localhost:3000/playlist/detail?id=" + id).then(
        (res) => {
          that[rankSong] = res.data.playlist.tracks.slice(0, 5);
        },
        (res) => {}
      );
    },
   
  },
};
</script>
<style>
#findMusicRanking #title-1,#title-2 {
  font-weight: bold;
  font-size: 22px;
}
#findMusicRanking #RankingOne {
  margin-top: 10px;
  width: 768px;
  height: 200px;
}
#findMusicRanking #RankingTwo {
  margin-top: 10px;
  width: 768px;
  height: 200px;
}
#findMusicRanking #title-2
{
  margin-top: 10px;
}
</style>
