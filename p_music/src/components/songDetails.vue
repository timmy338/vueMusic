<template>
<div id="songDetail-div">
<div id="songDetail" v-for="(fit,index) in songDetails" :key="fit+index" @click="songPlay(fit)">
    <i class="fas fa-play-circle"></i>
    <img :src="fit.album.picUrl" alt="" />
    <div id="detail">
      <p id="songName">{{fit.album.name}}</p>
      <p id="name">{{fit.album.artists[0].name}}</p>
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
    songPlay(fit)
    {
      this.$bus.$emit("PlaySongs",fit);
    }
  }


};
</script>
<style>
#songDetail-div 
{
  width: 750px;
  display:flex;
  flex-wrap: wrap;
  justify-content:  space-between ;
}

#songDetail-div #songDetail:hover
{
  background-color:#9f9f9f34;
}

#songDetail-div #songDetail {
  position: relative;
  margin-top: 16px;
  width: 238px;
  height: 48px;
  cursor: pointer;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
}
#songDetail-div #songDetail  i
{
  position: absolute;
  font-size: 20px;
  top: 14px;
  left: 14px;
  color: rgba(255, 255, 255, 0.8);
}
#songDetail-div #songDetail img {
  width: 48px;
  height: 48px;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
    float:left;
}
#songDetail-div #songDetail #detail {
    float:left;
    margin-left: 10px;
    margin-top: 10px;
      font-size: 12.5px;


}
#songDetail-div #songDetail #detail #songName
{
  width:125px;
  height: 13px;
    /* 字省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#songDetail-div #songDetail #detail #name:hover
{
  color:#747474
}

#songDetail-div #songDetail #detail #name
{

  margin-top: 7px;
  color:#9F9F9F;
  width:125px;
  height: 13px;
    /* 字省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
