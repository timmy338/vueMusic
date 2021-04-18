<template>
  <div id="songListBaseLimit">
    <div id="musicTop">
      <span id="span1">音樂標題</span>
      <span id="span2">歌手</span>
      <span id="span3">專輯</span>
      <span id="span4">時長</span>
      <span id="span5">熱度</span>
    </div>

    <div id="musicListColor">
       <div id="musicList" class="musicListClass" v-for="(fit, index) in searchResult" :key="fit + index" :class="{isClickMusicList:index===setColor}" @click="setIsClick(index),songPlay(fit)">
      <div id="no">
        <span>{{ indexlimit(index) }}</span>
      </div>
      <div id="love"><i class="far fa-heart"></i></div>
      <div id="download"><i class="far fa-arrow-alt-circle-down"></i></div>
      <div id="musicTitle">
        <span>{{ fit.name }}<div id="mv" v-if="fit.mv!=0"><span id="mvSpan">mv <i class="fas fa-caret-right"></i></span></div></span>
      </div>
      <div id="singer">
        <span>{{ singerlimit(fit) }}</span>
      </div>
      <div id="works">
        <span>{{ fit.album.name }}</span>
      </div>
      <div id="time"><span>{{ getTime(fit.duration)}}</span></div>
      <div id="hot"></div>
      <div id="hotset"></div>
    </div>
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
    singerlimit(fit) {
        if (fit.artists.length==1)
        {
            return fit.artists[0].name;
        }
        else if(fit.artists.length==2)
        {
            return fit.artists[0].name+'/'+fit.artists[1].name;
        }
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
    songPlay(fit)
    {
      this.$bus.$emit("PlaySongs",fit);
    }
  },

   
};
</script>

<style>
#songListBaseLimit #musicTop {
  width: 710px;
  height: 35px;
  line-height: 35px;
  border-top: 2px solid #f2f2f2;
  padding-left: 120px;
}

#songListBaseLimit #musicTop span {
  float: left;
  font-size: 13px;
  color: #888888;
}

#songListBaseLimit #musicTop #span2 {
  margin-left: 240px;
}

#songListBaseLimit #musicTop #span3 {
  margin-left: 80px;
}

#songListBaseLimit #musicTop #span4 {
  margin-left: 130px;
}

#songListBaseLimit #musicTop #span5 {
  margin-left: 40px;
}

#songListBaseLimit #musicList {
  color: #afafaf;
  height: 35px;
  line-height: 35px;
  width: 830px;
  cursor: pointer;
}


#songListBaseLimit .musicListClass:nth-child(odd)
{
  background-color: #F9F9F9;
}

#songListBaseLimit .isClickMusicList {
  background-color: rgb(229, 229, 229) !Important;
  
}

#songListBaseLimit .musicListClass:hover
{
  background-color: rgb(236, 236, 236) !Important;
}

#songListBaseLimit #musicList > * {
  float: left;
}

#songListBaseLimit #musicList #no span {
  float: right;
}

#songListBaseLimit #musicList #no {
  width: 40px;

  /*  margin-left: 30px; */
}

#songListBaseLimit #musicList #love {
  margin-left: 12px;
}
#songListBaseLimit #musicList #download {
  margin-left: 5px;
}
#songListBaseLimit #musicList #musicTitle {
  width: 280px;
  color: #656565;
  margin-left: 30px;
   font-size: 14px;
   /* 字省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#songListBaseLimit #musicList #musicTitle #mv
{
  margin-left: 10px;
  display: inline-block;
  line-height: 6px;
  border: 2px solid #EC4646;
  border-radius: 0.2em;
}
#songListBaseLimit #musicList #musicTitle #mv .fa-caret-right
{
  font-size: 8px;
}
#songListBaseLimit #musicList #musicTitle #mv #mvSpan
{
  font-size: 14px;
  color: #EC4646;
  padding: 0 2px;
}
#songListBaseLimit #musicList #singer {
  width: 86px;
  color: #656565;
    font-size: 14px;
  margin-left: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#songListBaseLimit #musicList #works {
      font-size: 14px;
      color: #656565;
  width: 135px;
  margin-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#songListBaseLimit #musicList #time {
    font-size: 14px;
  width: 60px;
  margin-left: 20px;
}
#songListBaseLimit #hot
{
  margin-left: 8px;
  width: 40px;
  height: 5px;
  margin-top: 15px;
  background-color: #C8C8C8;
}

#songListBaseLimit #hotset
{
 width: 20px;
  height: 5px;
  margin-top: 15px;
  background-color: #DFDFDF;
}

</style>
