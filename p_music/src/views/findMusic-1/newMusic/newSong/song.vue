<template>
<div id="newSongTagDiv">
<div id="songDetail" v-for="(fit,index) in songDetails" :key="fit+index" @click="songPlay(fit)">
    <span id="no">{{setNo(index+2)}}</span>
    <i class="fas fa-play-circle"></i>
    <img :src="fit.album.picUrl" alt="" />
      <span id="songName">{{fit.name}}</span>
      <div id="nameDiv">
          <span id="name">{{fit.album.artists[0].name}}</span>
      </div>
      <div id="albumNameDiv">
          <span id="albumName">{{fit.album.name}}</span>
      </div>
         <div id="timeDiv">
          <span id="time">{{ getTime(fit.mMusic.playTime)}}</span>
      </div>
  </div>
</div>
  
</template>
<script>
export default {
  props:["songDetails"],
  data()
  {
    return{
    }
  },
  methods:
  {
    setNo(fit)
    {
      if((--fit)<10)
      {
        return "0"+fit;
      }
      else
      {
        return fit;
      }
    } ,
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
    songPlay(fit) {
      this.$bus.$emit("PlaySongs", fit);
    },
  }


};
</script>
<style>
#newSongTagDiv 
{
  float: left;
}
#newSongTagDiv #songDetail #no
{
  float: left;
  line-height: 80px;
  color: #CACACA;
  margin: 0 20px;
}
#newSongTagDiv #songDetail:hover
{
  background-color:#9f9f9f34!important;;
}

#newSongTagDiv #songDetail
{
  position: relative;
  width: 820px;
  height: 80px;
   font-size: 14px;
 border-radius: 3em;
 cursor: pointer;
}
#newSongTagDiv #songDetail:nth-child(odd)
{
  background-color: #F9F9F9;
}
#newSongTagDiv #songDetail  i
{
  position: absolute;
  font-size: 20px;
  top: 30px;
  left: 80px;
  color: rgba(255, 255, 255, 0.8);
}
#newSongTagDiv #songDetail img {
  width: 60px;
  height: 60px;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  margin-top: 10px;
    float:left;
    margin-right: 20px;
}

#newSongTagDiv #songDetail  #songName
{
  float: left;
  width:232px;
  line-height: 80px;
  /* 字省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#newSongTagDiv #songDetail #nameDiv
{
  float:left;
  width:175px;
  height: 18px;
  line-height: 80px;

}
#newSongTagDiv #songDetail #name:hover
{
  color:#747474 ;
}

#newSongTagDiv #songDetail #name
{
  color:#9F9F9F;
  margin-left: 10px;
    /* 字省略 */
      overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  

}

#newSongTagDiv #songDetail #albumNameDiv
{
  float:left;
  width:125px;
  height: 80px;
  line-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #747474;
    margin-right: 20px;
}
#newSongTagDiv #songDetail #timeDiv
{
  line-height: 80px;
   color: #747474;
}
</style>
