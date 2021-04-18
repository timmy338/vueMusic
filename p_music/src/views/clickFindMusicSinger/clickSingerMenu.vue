<template>
  <div id="clickSinger">
    <div id="clickSingerTop">
      <img id="listImage"  :src="singer.picUrl" alt="" />
       <div id="listImageRight">
        <div id="top">
          <div id="icon">歌手</div>
          <span id="name">{{ singer.name }}</span>
        </div>
        <div id="middle" v-if="artist.alias">
          <span id="otherName">{{artist.alias[0] }}</span>
        </div>
        <div id="bottom">
         
          <div id="collection">
            <span
              ><i class="fas fa-folder-plus"></i>收藏</span
            >
          </div>
          
        </div>

      <div id="introduction">
        <div
          id="introductionTop"
        >
          單曲數:<span> {{ artist.musicSize }}</span>
        </div>
        <div id="introductionMiddle" >
          專輯數:<span> {{ artist.albumSize }} </span> 
        </div> 
       <div id="introductionBottom" >
          MV數:<span> {{ artist.mvSize }} </span> 
        </div> 
      </div> 
       <div id="introductionExtra" v-if="artist.briefDesc">
         <span v-html="limit(artist.briefDesc)"> {{limit(artist.briefDesc)}}</span>
        </div>
      </div>
       
    </div>

     <div id="song">
      <div id="title"><span>專輯</span></div>
       <div id="left">
         <img src="./top50.png" alt="">
       </div>
       <div id="right">
            <div id="title2">熱門50首 <i class="far fa-play-circle"></i><div id="line"></div><i class="fas fa-folder-plus"></i></div>
            <clickSingerListBase :searchResult="songTop50Arr"></clickSingerListBase>
       </div>
    </div>  
    <div id="albumLimit">
        <album v-for="(fit, index) in album" :key="fit + index" :fit="fit"></album>
    </div>
      
  </div>
</template>
<script>
import clickSingerListBase from "./clickSingerListBase";
import album from "./album";
const axios = require("axios");
export default {
  data() {
    return {
      singer: this.$route.query.fit,
     /*  歌單 */
     songTop50Arr:[],
     artist:{},
     songArr:[],
     albumId:[],
     album:[],
    };
  },
  components: { clickSingerListBase,album },
  mounted() {
    this.getTop50Details();
    this.getAlbumId();
   
  },
  methods: {
    TAG(tagList) {
      if (tagList.length == 1) {
        this.albumId.push(tagList[0].id);
      } else {
        for (var i = 0; i < tagList.length - 1; i++) {
          this.albumId.push(tagList[i].id);
        }
      }
    },
    getTop50Details() {
      var that = this;
      axios
        .get("http://localhost:3000/artists?id=" + this.singer.id)
        .then(
          (res) => {
           /* console.log(res); */ 
           that.artist=res.data.artist;
            that.songTop50Arr=res.data.hotSongs.slice(0, 10);
          },
          (res) => {}
        );
    },
     getAlbumId() {
      var that = this;
      axios
        .get("http://localhost:3000/artist/album?id=" + this.singer.id)
        .then(
          (res) => {
          /*  console.log(res);  */
           this.TAG(res.data.hotAlbums);
           for(var i=0;i<4;i++)
           {
             that.getalbum(that.albumId[i]);
           }
          },
          (res) => {}
        );
    },
    getalbum(albumIds) {
      var that = this;
      axios
        .get("http://localhost:3000/album?id=" + albumIds)
        .then(
          (res) => {
           /* console.log(res.data.album); */ 
           that.album.push(res.data.album); 
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

  },
};
</script>
<style>
#clickSinger {
  width: 850px;
  height: 547.6px;
  overflow: auto;
  position: relative;
}
#clickSinger::-webkit-scrollbar {
  width: 0px;
}
#clickSinger #clickSingerTop {
  float: left;
  width: 770px;
  height: auto;
  margin-top: 30px;
  margin-left: 30px;

}

#clickSinger #listImage {
  width: 184px;
  height: 190px;
   border-radius:1em;
}
#clickSinger #listImageRight {
  float: right;
  margin-top: 5px;
  width: 540px;
  height: auto;
}
#clickSinger #icon {
  float: left;
  width: 30px;
  height: 14px;
  border: #ed4141 solid 1px;
  font-size: 14px;
  color: #ed4141;
  padding: 3px;
}
#clickSinger #name {
  font-weight: bold;
  line-height: 22px;
  font-size: 20px;
  margin-left: 10px;
}

#clickSinger #top {
  height: 30px;
}
#clickSinger #middle #otherName
{
  font-size: 14px ;
}
#clickSinger #bottom {
  margin-top: 10px;
  width: 590px;
  height: 34px;
}
#clickSinger #bottom * {
  float: left;
  line-height: 32px;
}

#clickSinger #bottom #collection {
  height: 32px;
  border: 1px rgb(187, 187, 187) solid;
  border-radius: 3em;
  cursor: pointer;
}
#clickSinger #bottom #collection:hover
{
  background-color: #e7e7e7;
}
#clickSinger #bottom #collection span {
  padding: 0 8px;
  color: #676767;
}
#clickSinger #bottom .fa-folder-plus {
  font-size: 18px;
  margin-right: 6px;
}
#clickSinger #introduction
{
  margin-top:20px;
}
#clickSinger #introductionTop {
  float:left;
  font-size: 14px;
  color: #676767;
  margin-right: 30px;
}

#clickSinger #introductionMiddle {
    float:left;
  font-size: 14px;
  color: #676767;
  margin-right: 20px;
}
#clickSinger #introductionMiddle span {
  color: #676767;
  margin-right: 10px;
}

#clickSinger #introductionBottom {
  padding-right: 200px;
    float:left;
  font-size: 14px;
  color: #676767;
}
#clickSinger #introductionExtra
{
  margin-top: 10px;
  line-height: 25px;
  width: 550px;
  height: 50px;
  float:left;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.setHeight {
  height: auto !important;
   overflow: visible !important;
  text-overflow: 	clip !important;
  white-space: 	normal !important;
}
#clickSinger #song
{
  width: 780px;
  margin-top: 30px;
  float: left;
   margin-left: 24px;
   margin-bottom: 40px;
}
#clickSinger #song #title 
{
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
}
#clickSinger #song #title span
{
  border-bottom: #ed4141 3px solid;
}
#clickSinger #song #left
{
  float: left;
  margin-top: 20px;
}
#clickSinger #song #left img
{
  width: 155px;
  border-radius: 1em;
}

#clickSinger #song #right
{
  float: right;
  margin-top: 20px;
}
#clickSinger #song #right #title2
{
  font-weight: bold;
  margin-bottom: 10px;
}
#clickSinger #song #right .fa-play-circle
{
  font-size: 20px;
  margin-left: 20px;
  color:#666666;
}
#clickSinger #song .fa-folder-plus
{
   font-size: 20px;
  color:#666666;
}
#clickSinger #song #right #line
{
  margin: 0 15px;
  display: inline-block;
  width: 1px;
  height: 12px;
  background-color: #d6d6d6;
}
#clickSinger #albumLimit
{
  float: left;
  margin-left:24px ;
}
</style>
