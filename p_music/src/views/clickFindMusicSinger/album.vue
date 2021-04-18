<template>
  <div id="clickSingerAlbumListBase">
      <div id="left">
          <img :src="fit.picUrl" alt="" id="mainImg">
          <img src="./cd.png" alt="" id="cd">
        <div id="leftDate"><span id="date">{{dateSet(fit.publishTime)}}</span></div>
      </div>
        
      <div id="rightTitle">
        <span>{{fit.name}}</span><i class="far fa-play-circle"></i><div id="line"></div><i class="fas fa-folder-plus"></i>
        </div>
     <div id="musicListColor">
       <div id="musicList" class="musicListClass" v-for="(fit, index) in searchResult.slice(0, 10)" :key="fit + index" :class="{isClickMusicList:index===setColor}" @click="setIsClick(index),songPlay(fit)">
      <div id="no">
        <span>{{ indexlimit(index) }}</span>
      </div>
      <div id="love"><i class="far fa-heart"></i></div>
      <div id="download"><i class="far fa-arrow-alt-circle-down"></i></div>
      <div id="musicTitle" v-if="fit.name">
        <span>{{ fit.name }}<div id="mv" v-if="fit.mv!=0"><span id="mvSpan">mv <i class="fas fa-caret-right"></i></span></div></span>
      </div>
      <div id="time"><span>{{ getTime(fit.dt)}}</span></div>   
    </div>
    <div id="more" v-if="searchResult.length>10"><span>查看全部 <i class="fas fa-caret-right"> </i></span></div>
    </div> 

      
  </div>
</template>

<script>
const axios = require("axios");
export default {
  props: ["fit"],
  data() {
    return {
      setColor:-1,
      searchResult:[],
    };
  },
  mounted(){
      this.getalbumSong();
  },
  methods: {
   
    indexlimit(index) {
      index++;
      if (index < 10) {
        return "0" + index;
      } else return index;
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
    getTime(songs)
    {   
          // 获取毫秒数
          let min = parseInt(songs / 1000 / 60);
          let sec = parseInt((songs / 1000) % 60);
          if (min < 10) {
            min = "0" + min;
          }
          if (sec < 10) {
            sec = "0" + sec;
          }
          return min+":"+sec;
    },
    setIsClick(index) {
      this.setColor=index;
    },
     getalbumSong() {
      var that = this;
      axios
        .get("http://localhost:3000/album?id=" + this.fit.id)
        .then(
          (res) => {
           console.log(res.data); 
           this.searchResult=res.data.songs;
          },
          (res) => {}
        );
    },
     songPlay(fit) {
      this.$bus.$emit("PlaySongs", fit);
    },
  },
   
   
};
</script>

<style>
#clickSingerAlbumListBase 
{
    float: left;
    margin-top: 30px;
  width:780px;
  height: auto;
  position: relative;
}
#clickSingerAlbumListBase #left
{
    float: left;
}
#clickSingerAlbumListBase #left #mainImg
{
  width: 155px;
  border-radius: 1em;
   box-shadow: 3px 3px 4px #000;
}
 #clickSingerAlbumListBase #left #cd
 {
   position: absolute;
   top: 18px;
 }
 #clickSingerAlbumListBase #leftDate
 {
   margin-top: 5px;
     color: #676767;
     font-size: 14px;
 }
#clickSingerAlbumListBase #rightTitle
{
    float: left;
}

#clickSingerAlbumListBase #musicListColor
{
  float:left;
  margin-top: 15px;
  margin-left: 50px;
}
#clickSingerAlbumListBase #musicList {

  color: #afafaf;
  height: 35px;
  line-height: 35px;
  width: 556px;
}


#clickSingerAlbumListBase .musicListClass:nth-child(odd)
{
  background-color: #F9F9F9;
}

#clickSingerAlbumListBase .isClickMusicList {
  background-color: rgb(229, 229, 229) !Important;
  
}

#clickSingerAlbumListBase .musicListClass:hover
{
  background-color: rgb(236, 236, 236) !Important;
}

#clickSingerAlbumListBase #musicList > * {
  float: left;
}

#clickSingerAlbumListBase #musicList #no span {
  float: right;
}

#clickSingerAlbumListBase #musicList #no {
  width: 40px;

  /*  margin-left: 30px; */
}

#clickSingerAlbumListBase #musicList #love {
  margin-left: 12px;
}
#clickSingerAlbumListBase #musicList #download {
  margin-left: 12px;
}
#clickSingerAlbumListBase #musicList #musicTitle {
  width: 270px;
  color: #656565;
  margin-left: 35px;
   font-size: 14px;
   /* 字省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#clickSingerAlbumListBase #musicList #musicTitle #mv
{
  margin-left: 10px;
  display: inline-block;
  line-height: 6px;
  border: 2px solid #EC4646;
  border-radius: 0.2em;
}
#clickSingerAlbumListBase #musicList #musicTitle #mv .fa-caret-right
{
  font-size: 8px;
}
#clickSingerAlbumListBase #musicList #musicTitle #mv #mvSpan
{
  font-size: 14px;
  color: #EC4646;
  padding: 0 2px;
}
#clickSingerAlbumListBase #musicList #time {
  margin-left: 80px;
  font-size: 14px;
  width: 60px;
}
#clickSingerAlbumListBase #more
{
   color: #afafaf;
  height: 35px !important;
  line-height: 35px;
  width: 556px;
   font-size: 14px;
    background-color: #F9F9F9;
}
#clickSingerAlbumListBase #more span
{
  margin-right: 30px;
  float:right;
  cursor: pointer;
}
#clickSingerAlbumListBase #more span:hover{
  color:#8a8a8a;
}
#clickSingerAlbumListBase #rightTitle 
{
  width: 400px;
  margin-left: 60px;
}
#clickSingerAlbumListBase #rightTitle span
{
  float:left;
  font-weight: bold;
}
#clickSingerAlbumListBase #rightTitle .fa-play-circle
{
   float:left;
  font-size: 16px;
  margin-left: 20px;
  color:#666666;
}
#clickSingerAlbumListBase #rightTitle .fa-folder-plus
{
   float:left;
   font-size: 18px;
  color:#666666;
}
#clickSingerAlbumListBase #rightTitle #line
{
  margin: 0 15px;
  margin-top: 4px;
  float:left;
  width: 1px;
  height: 12px;
  background-color: #d6d6d6;
}
</style>
