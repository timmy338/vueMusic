<template>
  <div id="clickSong">
    <div id="clickSongTop">
      <img id="listImage" v-if="songDetails.playlist" :src="songDetails.playlist.coverImgUrl" alt="" />
      <div id="listImageRight">
        <div id="top">
          <div id="icon">歌單</div>
          <span id="name">{{ song.name }}</span>
        </div>

        <div id="middle" v-if="songDetails.playlist">
          <img
            id="avatar"
            :src="songDetails.playlist.creator.avatarUrl"
            alt=""
          />
          <span id="avatarName">{{
            songDetails.playlist.creator.nickname
          }}</span>
          <span id="time">{{ dateSet(songDetails.playlist.createTime) }}</span>
        </div>

        <div id="bottom">
          <div id="playAll">
            <span> <i class="fas fa-play"></i>播放全部</span>
          </div>
          <div id="playAdd"><i class="fas fa-plus"></i></div>
          <div id="collection" v-if="songDetails.playlist">
            <span
              ><i class="fas fa-folder-plus"></i>收藏({{
                songDetails.playlist.subscribedCount
              }})</span
            >
          </div>
          <div id="share" v-if="songDetails.playlist">
            <span
              ><i class="far fa-share-square"></i>分享({{
                songDetails.playlist.shareCount
              }})</span
            >
          </div>
          <div id="download" v-if="songDetails.playlist">
            <span><i class="fas fa-arrow-circle-down"></i>下載全部</span>
          </div>
        </div>

        <div
          id="introductionTop"
          v-if="songDetails.playlist && songDetails.playlist.tags"
        >
          標簽:<span> {{ TAG(songDetails.playlist.tags) }}</span>
        </div>
        <div id="introductionMiddle" v-if="songDetails.playlist">
          歌曲:<span> {{ songDetails.playlist.trackCount }} </span> 播放:<span>
            {{ moneyFormat(songDetails.playlist.playCount) }}</span
          >
        </div>
        <div id="introductionBottom" v-if="songDetails.playlist">
          <div id="introductionBottomSpan" :class="{ setHeight: open }">
            簡介:<span v-html="limit(songDetails.playlist.description)">
              {{ limit(songDetails.playlist.description) }}</span
            >
            <i class="fas fa-caret-up" @click="open = !open" v-if="open"></i>
          </div>
          <i v-if="!open" class="fas fa-caret-down" @click="open = !open"></i>
        </div>
      </div>
    </div>

    <div id="song" v-if="songDetails.playlist">
      <clickSongListBase :searchResult="songList"></clickSongListBase>
    </div>
  </div>
</template>
<script>
import clickSongListBase from "./clickSongListBase";
const axios = require("axios");
export default {
  data() {
    return {
      song: this.$route.query.fit,
     /*  歌單 */
      songDetails: {},
      open: false,
      songIds: "",
      /* 歌單中歌曲 */
      songList:[],
    };
  },
  components: { clickSongListBase },
  mounted() {
    this.getSongDetails();
  },
  methods: {
    getSongDetails() {
      var that = this;
      axios
        .get("http://localhost:3000/playlist/detail?id=" + this.song.id)
        .then(
          (res) => {
            /* console.log(res.data);  */
            that.songDetails = res.data;
            this.getAllSongs();
            this.getSongs();
          },
          (res) => {}
        );
    },
    dateSet(time) {
      var date = new Date(--time); //传个时间戳过去就可以了
      var Y = date.getFullYear();
      var M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var D = date.getDate();

      return Y + "-" + M + "-" + D + "創建";
    },
    TAG(tagList) {
      if (tagList.length == 1) {
        return tagList[0];
      } else {
        var tag = "";
        for (var i = 0; i < tagList.length - 1; i++) {
          tag += tagList[i] + "/";
        }
        return tag + tagList[i];
      }
    },
    moneyFormat(arg) {
      if (arg.toString().length > 4) {
        const moneys = arg / 10000;
        const realVal = parseFloat(moneys).toFixed(0);
        return realVal + "万";
      } else {
        return arg;
      }
    },
    limit(string) {
      var sentence = "";
      for (var i = 0; i < string.length; i++) {
        if (string[i] == "\n") {
          sentence += "<br/>";
        } else {
          sentence += string[i];
        }
      }
      return sentence;
    },
    getAllSongs() {
      for (var i = 0; i < this.songDetails.playlist.trackIds.length-1; i++) {
        this.songIds += this.songDetails.playlist.trackIds[i].id+",";
      }
      this.songIds +=this.songDetails.playlist.trackIds[i].id;
    },
    getSongs() {
      var that = this;
      axios.get("http://localhost:3000/song/detail?ids=" + this.songIds).then(
        (res) => {
          /* console.log(res.data.songs); */
          that.songList=res.data.songs.slice(0, 30);
        },
        (res) => {}
      );
    },

  },
};
</script>
<style>
#clickSong {
  width: 850px;
  height: 547.6px;
  overflow: auto;
  position: relative;
}
#clickSong::-webkit-scrollbar {
  width: 0px;
}
#clickSong #clickSongTop {
  float: left;
  width: 770px;
  height: auto;
  margin-top: 30px;
  margin-left: 30px;
}
#clickSong #listImage {
  width: 184px;
  height: 190px;
     border-radius:1em;
}
#clickSong #listImageRight {
  float: right;
  width: 570px;
  height: auto;
}
#clickSong #icon {
  float: left;
  width: 30px;
  height: 14px;
  border: #ed4141 solid 1px;
  font-size: 14px;
  color: #ed4141;
  padding: 3px;
}
#clickSong #name {
  font-weight: bold;
  line-height: 22px;
  font-size: 20px;
  margin-left: 10px;
}

#clickSong #top {
  height: 30px;
}

#clickSong #middle {
  height: 30px;
  margin-top: 10px;
  line-height: 30px;
}
#clickSong #avatar {
  width: 30px;
  height: 30px;
  border-radius: 3em;
  float: left;
}
#clickSong #avatarName {
  margin-left: 10px;
  color: #507daf;
  float: left;

  font-size: 14px;
}
#clickSong #time {
  color: #676767;
  font-size: 12px;
  margin-left: 10px;
  line-height: 32px;
}
#clickSong #bottom {
  margin-top: 10px;
  width: 590px;
  height: 34px;
}
#clickSong #bottom * {
  float: left;
  line-height: 32px;
}
#clickSong #bottom #playAll {
  width: 110px;
  height: 32px;
  color: #ffffff;
  background-color: #ec4141;
  border-top-left-radius: 3em;
  border-bottom-left-radius: 3em;
  cursor: pointer;
}
#clickSong #bottom #playAll .fa-play {
  margin-left: 14px;
  margin-right: 8px;
  font-size: 12px;
}
#clickSong #bottom #playAdd {
  width: 26px;
  background-color: #ec4141;
  border-left: 0.5px solid white;
  border-top-right-radius: 3em;
  border-bottom-right-radius: 3em;
  color: #ffffff;
  cursor: pointer;
}
#clickSong #bottom #playAdd .fa-plus {
  margin-left: 6px;
  font-size: 12px;
}
#clickSong #bottom #playAdd:hover,
#clickSong #bottom #playAll:hover {
  background-color: #d13939;
}
#clickSong #bottom #collection {
  margin-left: 10px;
  height: 32px;
  border: 1px rgb(187, 187, 187) solid;
  border-radius: 3em;
  cursor: pointer;
}
#clickSong #bottom #collection:hover,#clickSong #bottom #share:hover,#clickSong #bottom #download:hover
{
  background-color: #e7e7e7;
}
#clickSong #bottom #collection span {
  padding: 0 8px;
  color: #676767;
}
#clickSong #bottom .fa-folder-plus {
  font-size: 18px;
  margin-right: 6px;
}
#clickSong #bottom #share {
  height: 32px;
  line-height: 28px;
  border: 1px rgb(187, 187, 187) solid;
  border-radius: 3em;
  margin-left: 10px;
  cursor: pointer;
}
#clickSong #bottom #share .fa-share-square {
  margin-right: 6px;
}
#clickSong #bottom #share span {
  padding: 0 8px;
  color: #676767;
}
#clickSong #bottom #download {
  width: 122px;
  height: 32px;
  border: 1px rgb(187, 187, 187) solid;
  border-radius: 3em;
  margin-left: 10px;
  cursor: pointer;
  color: #676767;
}

#clickSong #bottom #download .fa-arrow-circle-down {
  margin-left: 16px;
  margin-right: 4px;
}
#clickSong #introductionTop {
  margin-top: 10px;
  font-size: 14px;
  color: #676767;
}
#clickSong #introductionTop span {
  color: #507daf;
}
#clickSong #introductionMiddle {
  margin-top: 10px;
  font-size: 14px;
  color: #676767;
}
#clickSong #introductionMiddle span {
  color: #676767;
  margin-right: 10px;
}
#clickSong #introductionBottom {
  font-size: 14px;
  width: 550px;
}
#clickSong #introductionBottomSpan {
  float: left;
  width: 400px;
  height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #676767;
}
#clickSong #introductionBottom .fa-caret-down {
  float: right;
  line-height: 32px;
  color: #676767;
  cursor: pointer;
 
}
#clickSong #introductionBottom .fa-caret-up {
  margin-left: 10px;
  color: #676767;
  cursor: pointer;
}
#clickSong #introductionBottom span {
  line-height: 32px;
}
.setHeight {
  height: auto !important;
   overflow: visible !important;
  text-overflow: 	clip !important;
  white-space: 	normal !important;
}
#clickSong #song {
  float: left;
  margin-top: 20px;
}
</style>
