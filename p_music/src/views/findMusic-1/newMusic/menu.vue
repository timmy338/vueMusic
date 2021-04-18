<template>
    <div id="newMusic">
        <div id="top">
            <div id="topLeftDiv" @click="routerClick(1)" :class="{ setIsClick: nowRouter == 1 }"><span >新歌速递</span></div>
            <div id="topRightDiv" @click="routerClick(2)" :class="{ setIsClick: nowRouter == 2 }"><span>新碟上架</span></div>
        </div>
        <div id="middle">
            <newMusicEverTop :isClick.sync="isClick" :isClickRouter2.sync="isClickRouter2" @getNewSong="getNewSong" @getNewCD="getNewCD"></newMusicEverTop>
            <router-view :songDetails="newSongArr"  :newCDArr="newCDArr" :isClickHot.sync="isClickHot"  @getNewCD="getNewCD"></router-view>
        </div>
        

    </div>
</template>
<script>

const axios = require("axios");
import newMusicEverTop from "./newMusicEverTop"; 
export default {
   data(){
    return{
        isClick:"0",
        nowRouter:"1",
        newSongArr:[],
        isClickRouter2:"ALL",
        isClickHot:"hot",
        newCDArr:[],
    }
  },
  components: {
 newMusicEverTop
  },
   mounted(){
       this.getNewSong();
       this.getNewCD();
  },
methods:
{
     routerClick(a) {
         if(a==1)
         {
              this.$router.push('/findMusic/newMusic/newMusicSongTag');
              this.nowRouter=1;
         }
        else
        {
            this.$router.push('/findMusic/newMusic/newMusicCDTag');
            this.nowRouter=2;
        }
    },
    getNewSong() {
      var that = this;
      axios.get("http://localhost:3000/top/song?limit=20&type="+this.isClick).then(
        (res) => {
/*           console.log(res.data.data); */
          that.newSongArr=res.data.data.slice(0, 10);
        },
        (res) => {}
      );
    },
    getNewCD() {
      var that = this;
      axios.get("http://localhost:3000/top/album?limit=5&area="+this.isClickRouter2+"&type="+this.isClickHot).then(
        (res) => {
         /* console.log(res.data.monthData);  */
          that.newCDArr=res.data.monthData.slice(0, 8);
        },
        (res) => {}
      );
    },
}
};
</script>
<style>

#newMusic #top
{
    margin-top: 20px;
    margin: 0 auto;
    width: 228px;
    height: 32px;
    line-height: 32px;
    border: solid 1px #BBBBBB;
    border-radius: 3em;
    display: flex;
    justify-content:space-between;
}
#newMusic #top #topLeftDiv,#newMusic #top #topRightDiv
{
    /* background-color: #BBBBBB; */
    font-size: 12px;
    /* color: white; */
    border-radius: 3em;
}
#newMusic #top span
{
    padding: 0 33px;
}
#newMusic #top #topLeftDiv:hover,#newMusic #top #topRightDiv:hover
{
    background-color: #e0e0e0;
    cursor: pointer;
}
.setIsClick
{
    background-color: #cecece;
    color: white;
}
</style> 
