<template>
  <div id="clickSingerListBase">
 

    <div id="musicListColor">
       <div id="musicList" class="musicListClass" v-for="(fit, index) in searchResult" :key="fit + index" :class="{isClickMusicList:index===setColor}" @click="setIsClick(index),songPlay(fit)">
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
    <div id="more" v-if="searchResult.length<=10"><span>查看全部 <i class="fas fa-caret-right"> </i></span></div>
    </div>

      
  </div>
</template>

<script>
export default {
  props: ["searchResult"],
  data() {
    return {
      setColor:-1,
    };
  },
  methods: {
   
    indexlimit(index) {
      index++;
      if (index < 10) {
        return "0" + index;
      } else return index;
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
      songPlay(fit) {
      this.$bus.$emit("PlaySongs", fit);
    },
  },

   
};
</script>

<style>
#clickSingerListBase 
{
  width:560px;
}
#clickSingerListBase #musicTop span {
  float: left;
  font-size: 13px;
  color: #888888;
  margin-left: 10px;
}

#clickSingerListBase #musicTop #span4 {
  margin-left: 159px;
}

#clickSingerListBase #musicList {
  color: #afafaf;
  height: 35px;
  line-height: 35px;
  width: 556px;
}


#clickSingerListBase .musicListClass:nth-child(odd)
{
  background-color: #F9F9F9;
}

#clickSingerListBase .isClickMusicList {
  background-color: rgb(229, 229, 229) !Important;
  
}

#clickSingerListBase .musicListClass:hover
{
  background-color: rgb(236, 236, 236) !Important;
}

#clickSingerListBase #musicList > * {
  float: left;
}

#clickSingerListBase #musicList #no span {
  float: right;
}

#clickSingerListBase #musicList #no {
  width: 40px;

  /*  margin-left: 30px; */
}

#clickSingerListBase #musicList #love {
  margin-left: 12px;
}
#clickSingerListBase #musicList #download {
  margin-left: 12px;
}
#clickSingerListBase #musicList #musicTitle {
  width: 200px;
  color: #656565;
  margin-left: 35px;
   font-size: 14px;
   /* 字省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#clickSingerListBase #musicList #musicTitle #mv
{
  margin-left: 10px;
  display: inline-block;
  line-height: 6px;
  border: 2px solid #EC4646;
  border-radius: 0.2em;
}
#clickSingerListBase #musicList #musicTitle #mv .fa-caret-right
{
  font-size: 8px;
}
#clickSingerListBase #musicList #musicTitle #mv #mvSpan
{
  font-size: 14px;
  color: #EC4646;
  padding: 0 2px;
}
#clickSingerListBase #musicList #time {
  margin-left: 150px;
  font-size: 14px;
  width: 60px;
}
#clickSingerListBase #more
{
   color: #afafaf;
  height: 35px !important;
  line-height: 35px;
  width: 556px;
   font-size: 14px;
    background-color: #F9F9F9;
}
#clickSingerListBase #more span
{
  margin-right: 30px;
  float:right;
  cursor: pointer;
}
#clickSingerListBase #more span:hover{
  color:#8a8a8a;
}
</style>
