<template>
  <div id="clickSongListBase">
    <div id="musicTop">
      <span id="span1">音樂標題</span>
      <span id="span2">歌手</span>
      <span id="span3">專輯</span>
      <span id="span4">時長</span>
    </div>

    <div id="musicListColor">
      <div
        id="musicList"
        class="musicListClass"
        v-for="(fit, index) in searchResult"
        :key="fit + index"
        :class="{ isClickMusicList: index === setColor }"
        @click="setIsClick(index), songPlay(fit)"
      >
        <div id="no">
          <span>{{ indexlimit(index) }}</span>
        </div>
        <div id="love"><i class="far fa-heart"></i></div>
        <div id="download"><i class="far fa-arrow-alt-circle-down"></i></div>
        <div id="musicTitle" v-if="fit.name">
          <span
            >{{ fit.name }}
            <div id="mv" v-if="fit.mv != 0">
              <span id="mvSpan"
                >mv <i class="fas fa-caret-right"></i
              ></span></div
          ></span>
        </div>
        <div id="singer">
          <span>{{ singerlimit(fit) }}</span>
        </div>
        <div id="works">
          <span>{{ nothing(fit.al.name) }}</span>
        </div>
        <div id="time">
          <span>{{ getTime(fit.dt) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["searchResult"],
  data() {
    return {
      setColor: -1,
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
      if (fit.ar.length == 1) {
        return fit.ar[0].name;
      } else {
        return fit.ar[0].name + "/" + fit.ar[1].name;
      }
    },
    getTime(songs) {
      // 获取毫秒数
      let min = parseInt(songs / 1000 / 60);
      let sec = parseInt((songs / 1000) % 60);
      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      return min + ":" + sec;
    },
    setIsClick(index) {
      this.setColor = index;
    },
    nothing(fit)
    {
      if(fit=="")
      {
        return "undefined";
      }
      else
        return fit;
    },
    songPlay(fit) {
      this.$bus.$emit("PlaySongs", fit);
    },
  },
};
</script>

<style>
#clickSongListBase #musicTop {
  width: 710px;
  height: 35px;
  line-height: 35px;
  border-top: 2px solid #f2f2f2;
  padding-left: 120px;
}

#clickSongListBase #musicTop span {
  float: left;
  font-size: 13px;
  color: #888888;
  margin-left: 10px;
}

#clickSongListBase #musicTop #span2 {
  margin-left: 240px;
}

#clickSongListBase #musicTop #span3 {
  margin-left: 84px;
}

#clickSongListBase #musicTop #span4 {
  margin-left: 159px;
}

#clickSongListBase #musicList {
  color: #afafaf;
  height: 35px;
  line-height: 35px;
  width: 830px;
  cursor: pointer;
}

#clickSongListBase #musicList #musicTitle #mv {
  margin-left: 10px;
  display: inline-block;
  line-height: 6px;
  border: 2px solid #ec4646;
  border-radius: 0.2em;
}
#clickSongListBase #musicList #musicTitle #mv .fa-caret-right {
  font-size: 8px;
}
#clickSongListBase #musicList #musicTitle #mv #mvSpan {
  font-size: 14px;
  color: #ec4646;
  padding: 0 2px;
}
#clickSongListBase .musicListClass:nth-child(odd) {
  background-color: #f9f9f9;
}

#clickSongListBase .isClickMusicList {
  background-color: rgb(229, 229, 229) !important;
}

#clickSongListBase .musicListClass:hover {
  background-color: rgb(236, 236, 236) !important;
}

#clickSongListBase #musicList > * {
  float: left;
}

#clickSongListBase #musicList #no span {
  float: right;
}

#clickSongListBase #musicList #no {
  width: 50px;

  /*  margin-left: 30px; */
}

#clickSongListBase #musicList #love {
  margin-left: 12px;
}
#clickSongListBase #musicList #download {
  margin-left: 5px;
}
#clickSongListBase #musicList #musicTitle {
  width: 280px;
  color: #656565;
  margin-left: 30px;
  font-size: 14px;
  /* 字省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#clickSongListBase #musicList #singer {
  width: 86px;
  color: #656565;
  font-size: 14px;
  margin-left: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#clickSongListBase #musicList #works {
  font-size: 14px;
  color: #656565;
  width: 165px;
  margin-left: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
   margin-right: 10px;
}
#clickSongListBase #musicList #time {
  font-size: 14px;
  width: 60px;

}
</style>
