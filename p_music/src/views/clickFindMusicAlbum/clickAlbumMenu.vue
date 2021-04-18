<template>
  <div id="clickAlbum">
    <div id="clickAlbumTop">
      <img src="./cd.png" alt="" id="cd">
      <img id="listImage"  :src="song.picUrl" alt="" />
       <div id="listImageRight">
        <div id="top">
          <div id="icon">專輯</div>
          <span id="name">{{ song.name }}</span>
        </div>

        <div id="bottom">
          <div id="playAll">
            <span> <i class="fas fa-play"></i>播放全部</span>
          </div>

          <div id="playAdd"><i class="fas fa-plus"></i></div>
          <div id="collection">
            <span
              ><i class="fas fa-folder-plus"></i>收藏</span
            >
          </div>
          <div id="share" >
            <span
              ><i class="far fa-share-square"></i>分享</span
            >
          </div>
          <div id="download" >
            <span><i class="fas fa-arrow-circle-down"></i>下載全部</span>
          </div>
        </div>
 
        <div
          id="introductionTop"
        >
          歌手:<span> {{ song.artists[0].name }}</span>
        </div>
        <div id="introductionMiddle" >
          時間:<span> {{dateSet(song.publishTime)  }} </span> 
        </div> 
       
      </div>
    </div>

     <div id="song">
      <clickAlbumListBase :searchResult="songArr"></clickAlbumListBase>
    </div> 
  </div>
</template>
<script>
import clickAlbumListBase from "./clickAlbumListBase";
const axios = require("axios");
export default {
  data() {
    return {
      song: this.$route.query.fit,
     /*  歌單 */
     songArr:{},
     artists:{},
    };
  },
  components: { clickAlbumListBase },
  mounted() {
    this.getAlbumDetails();
  },
  methods: {
    getAlbumDetails() {
      var that = this;
      axios
        .get("http://localhost:3000/album?id=" + this.song.id)
        .then(
          (res) => {
            /* console.log(that.song); */
            /* console.log(res.data.songs);  */
            that.songArr=res.data.songs;
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

      return Y + "-" + M + "-" + D ;
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
    

  },
};
</script>
<style>
#clickAlbum {
  width: 850px;
  height: 547.6px;
  overflow: auto;
  position: relative;
}
#clickAlbum::-webkit-scrollbar {
  width: 0px;
}
#clickAlbum #clickAlbumTop {
  float: left;
  width: 770px;
  height: auto;
  margin-top: 30px;
  margin-left: 30px;
}
#clickAlbum #clickAlbumTop #cd
{
  position: absolute;
  left:214px;
  top: 65px;
}
#clickAlbum #listImage {
  width: 184px;
  height: 190px;
     border-radius:1em;
}
#clickAlbum #listImageRight {
  float: right;
  margin-top: 5px;
  width: 540px;
  height: auto;
}
#clickAlbum #icon {
  float: left;
  width: 30px;
  height: 14px;
  border: #ed4141 solid 1px;
  font-size: 14px;
  color: #ed4141;
  padding: 3px;
}
#clickAlbum #name {
  font-weight: bold;
  line-height: 22px;
  font-size: 20px;
  margin-left: 10px;
}

#clickAlbum #top {
  height: 30px;
}

#clickAlbum #bottom {
  margin-top: 10px;
  width: 590px;
  height: 34px;
}
#clickAlbum #bottom * {
  float: left;
  line-height: 32px;
}
#clickAlbum #bottom #playAll {
  width: 110px;
  height: 32px;
  color: #ffffff;
  background-color: #ec4141;
  border-top-left-radius: 3em;
  border-bottom-left-radius: 3em;
  cursor: pointer;
}
#clickAlbum #bottom #playAll .fa-play {
  margin-left: 14px;
  margin-right: 8px;
  font-size: 12px;
}
#clickAlbum #bottom #playAdd {
  width: 26px;
  background-color: #ec4141;
  border-left: 0.5px solid white;
  border-top-right-radius: 3em;
  border-bottom-right-radius: 3em;
  color: #ffffff;
  cursor: pointer;
}
#clickAlbum #bottom #playAdd .fa-plus {
  margin-left: 6px;
  font-size: 12px;
}
#clickAlbum #bottom #playAdd:hover,
#clickAlbum #bottom #playAll:hover {
  background-color: #d13939;
}
#clickAlbum #bottom #collection {
  margin-left: 10px;
  height: 32px;
  border: 1px rgb(187, 187, 187) solid;
  border-radius: 3em;
  cursor: pointer;
}
#clickAlbum #bottom #collection:hover,#clickAlbum #bottom #share:hover,#clickAlbum #bottom #download:hover
{
  background-color: #e7e7e7;
}
#clickAlbum #bottom #collection span {
  padding: 0 8px;
  color: #676767;
}
#clickAlbum #bottom .fa-folder-plus {
  font-size: 18px;
  margin-right: 6px;
}
#clickAlbum #bottom #share {
  height: 32px;
  line-height: 28px;
  border: 1px rgb(187, 187, 187) solid;
  border-radius: 3em;
  margin-left: 10px;
  cursor: pointer;
}
#clickAlbum #bottom #share .fa-share-square {
  margin-right: 6px;
}
#clickAlbum #bottom #share span {
  padding: 0 8px;
  color: #676767;
}
#clickAlbum #bottom #download {
  width: 122px;
  height: 32px;
  border: 1px rgb(187, 187, 187) solid;
  border-radius: 3em;
  margin-left: 10px;
  cursor: pointer;
  color: #676767;
}

#clickAlbum #bottom #download .fa-arrow-circle-down {
  margin-left: 16px;
  margin-right: 4px;
}
#clickAlbum #introductionTop {
  margin-top: 20px;
  font-size: 14px;
  color: #676767;
}
#clickAlbum #introductionTop span {
  color: #507daf;
}
#clickAlbum #introductionMiddle {
  margin-top: 10px;
  font-size: 14px;
  color: #676767;
}
#clickAlbum #introductionMiddle span {
  color: #676767;
  margin-right: 10px;
}

.setHeight {
  height: auto !important;
   overflow: visible !important;
  text-overflow: 	clip !important;
  white-space: 	normal !important;
}
#clickAlbum #song {
  float: left;
  margin-top: 20px;
}
</style>
