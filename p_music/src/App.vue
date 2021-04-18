<template>
  <div id="app">
    <div id="appLimit">
      <div id="top-bar">
        <ul>
          <li id="icon-li">
            <a href="" id="icon">
              <img src="./assets/music.png" alt="" />
              <span>網抑云音樂~</span>
            </a>
          </li>
          <li>
            <a href="" id="back"><i class="fas fa-chevron-left"></i></a>
          </li>
          <li>
            <a href="" id="next"><i class="fas fa-chevron-right"></i></a>
          </li>
          <li id="search-li">
            <i class="fas fa-search"></i>
            <input
              type="text"
              placeholder="搜索"
              v-model="query"
              @keyup.enter="searchMusic(), searchEnter(), searchMatching()"
            />
          </li>
          <li id="search-music">
            <a href=""><i class="fas fa-microphone"></i></a>
          </li>
          <li id="user-li">
            <a href="" id="user"><i class="far fa-user"></i></a>
          </li>
          <li id="login-in-li">
            <a href="">未登錄<i class="fas fa-caret-down"></i></a>
          </li>
          <li id="vip-li">
            <a href="">開通VIP</a>
          </li>
          <li id="set-li">
            <a href="" id="set"><i class="fas fa-cog"></i></a>
          </li>
          <li id="skin-li">
            <a href="" id="skin"><i class="fas fa-tshirt"></i></a>
          </li>
          <li id="email-li">
            <a href="" id="email"><i class="far fa-envelope"></i></a>
          </li>
          <li id="line-li">
            <div></div>
          </li>
          <li id="mini-li">
            <a href="" id="mini"><i class="far fa-minus-square"></i></a>
          </li>
          <li id="min-li">
            <a href="" id="min"><i class="far fa-window-minimize"></i></a>
          </li>
          <li id="max-li">
            <a href="" id="max"><i class="far fa-square"></i></a>
          </li>
          <li id="end-li">
            <a href="" id="end"><i class="fas fa-times"></i></a>
          </li>
        </ul>
      </div>

      <div id="menuMain">
        <leftList  v-if="isClickMV">
          <leftListItem slot="left-list-first" link="/findMusic">
            <div slot="item-text">發現音樂</div></leftListItem
          >
          <leftListItem link="/vedio"
            ><div slot="item-text">視頻</div></leftListItem
          >
          <leftListItem><div slot="item-text">朋友</div></leftListItem>
          <leftListItem><div slot="item-text">直播</div></leftListItem>
          <leftListItem><div slot="item-text">私人FM</div></leftListItem>

          <leftListItem2 slot="left-list-middle">
            <i class="fas fa-music" slot="item-icon"></i>
            <div slot="item-text">本地音樂</div></leftListItem2
          >
          <leftListItem2 slot="left-list-middle"
            ><i class="fas fa-cloud-download-alt" slot="item-icon"></i>
            <div slot="item-text">下載管理</div></leftListItem2
          >
        </leftList>

        <router-view
          :searchResult="searchSong"
          :bestSearch="bestSearch"
        ></router-view>
      </div>
      <div id="pop" v-if="isClickMV" v-show="musicBox">
        <div id="popLeft">
          <img src="./assets/cdstick.png" alt="" id="stick" />
          <img
            :src="songImage"
            alt=""
            id="songImg"
            :style="{ 'animation-play-state': isPlaying }"
          />
          <img
            src="./assets/Cd.png"
            alt=""
            id="cd"
            :style="{ 'animation-play-state': isPlaying }"
          />
          <div id="leftBottom">
            <div id="love"><i class="far fa-heart"></i></div>
            <div id="fold"><i class="fas fa-folder-plus"></i></div>
            <div id="download">
              <i class="far fa-arrow-alt-circle-down"></i>
            </div>
            <div id="share"><i class="fas fa-external-link-alt"></i></div>
          </div>
        </div>
        <div id="popRight">
          <div id="songTitle">
            <span>{{ songName }}</span>
          </div>
          <div id="detail">
            <span class="limit" id="limit1">專輯: </span
            ><span class="message">{{ album }}</span>
            <span class="limit">歌手: </span
            ><span class="message">{{ authorName }}</span>
            <span class="limit">來源: </span
            ><span class="message">{{ from }}</span>
          </div>
          <div id="lyric" ref="lyric" v-if="songLyric!=''">
            <div
              id="line"
              v-for="(fit, i) in finallyLyric"
              :key="fit + i"
              :style="{color: lyricIndex === i ? 'black' : '#ded9d9' , fontSize: lyricIndex === i ? '18px' : '16px'}"
              :data-index='i'
              ref="lyricDiv"
            >
              <span>{{ fit.lyric }}</span>
            </div>
          </div>
        </div>
      </div>
      <div id="musicBottom" v-if="isClickMV">
        <div id="musicDiv">
          <img :src="songImage" alt="" @click="clickMusicBox()" />
          <div id="intro">
            <div id="songName">
              <div id="author">
                <span>{{ songName }}</span>
              </div>
              <i class="far fa-heart"></i>
            </div>

            <div id="name">
              <span>{{ authorName }}</span>
            </div>
          </div>
        </div>
        <audio
          :src="songUrl"
          autoplay
          loop
          controls
          @play="play"
          @pause="pause"
          @canplay="getDuration"
          @timeupdate="songSlide"
          ref="audio"
        ></audio>
        <div id="ornament">
          <div id="spanDiv"><span>標準</span></div>
          <i class="fas fa-music"></i><i class="fas fa-list-ul"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import topBar from "./components/TopBar/topBar";
import leftList from "./components/leftList/leftList";
import leftListItem from "./components/leftList/leftListItem";
import leftListItem2 from "./components/leftList/leftListItem2";

export default {
  name: "App",
  components: {
    topBar,
    leftList,
    leftListItem,
    leftListItem2,
  },
  data() {
    return {
      query: "",
      searchSong: [],
      bestSearch: [],
      songUrl: "",
      songImage: "",
      authorName: "",
      songName: "",
      musicBox: false,
      album: "",
      from: "",
      isPlaying: "pause",
      songLyric: "",
      finallyLyric: {},
      lyricIndex:0,
      isClickMV:true,
    };
  },
  created() {
    this.$bus.$on("PlaySongs", (data) => {
      var that = this;
      axios.get("http://localhost:3000/song/detail?ids=" + data.id).then(
        (res) => {
          that.songImage = res.data.songs[0].al.picUrl;
          that.authorName = res.data.songs[0].ar[0].name;
          that.songName = res.data.songs[0].name;
          if (data.hasOwnProperty("al")) {
            if (data.al.name == "") {
              this.album = "undefined";
            } else this.album = data.al.name;
            if (data.alia.length == 0) {
              this.from = "undefined";
            } else {
              this.from = data.alia[0];
            }
          } else if (data.hasOwnProperty("album")) {
            this.album = data.album.name;
            if (data.alias.length == 0) {
              this.from = "undefined";
            } else this.from = data.alias[0];
          }
        },
        (res) => {}
      );

      axios.get("http://localhost:3000/song/url?id=" + data.id).then(
        (res) => {
          /* console.log(res);  */
          that.songUrl = res.data.data[0].url;
        },
        (res) => {}
      );
      axios.get("http://localhost:3000/lyric?id=" + data.id).then(
        (res) => {
          
          if(res.data.lrc.lyric!="")
          {
            that.songLyric = res.data.lrc.lyric;
            that.slideLyric();
          }
        },
        (res) => {}
      );
    });

    this.$bus.$on("isClickMV", (data) => {   
    
      this.isClickMV=!this.isClickMV;
    })
  },

  methods: {
    searchMusic() {
      var that = this;
      axios
        .get("http://localhost:3000/search/cloudsearch?keywords=" + this.query)
        .then(
          (res) => {
            that.searchSong = res.data.result.songs;
          },
          (res) => {}
        );
    },
    searchMatching() {
      var that = this;
      axios
        .get("http://localhost:3000/search/multimatch?keywords=" + this.query)
        .then(
          (res) => {
            that.bestSearch = res.data.result.artist;
          },
          (res) => {}
        );
    },

    searchEnter() {
      this.$router.push("/search");
    },
    clickMusicBox() {
      this.musicBox = !this.musicBox;
      this.$refs.lyric.scrollTop =0;
    },
    play() {
      this.isPlaying = "running";
    },
    pause() {
      this.isPlaying = "paused";
    },
    formatLyricTime(time) {
      // 格式化歌词的时间 转换成 sss:ms
      const regMin = /.*:/;
      const regSec = /:.*\./;
      const regMs = /\./;

      const min = parseInt(time.match(regMin)[0].slice(0, 2));
      let sec = parseInt(time.match(regSec)[0].slice(1, 3));
      const ms = time.slice(
        time.match(regMs)[0].index + 1,
        time.match(regMs)[0].index + 3
      );
      if (min !== 0) {
        sec += min * 60;
      }
      return Number(sec + "." + ms);
    },
    slideLyric() {
      var newLine = /\n/;
      var regTime = /\[\d{2}:\d{2}.\d{2,3}\]/;
      var lineArr = this.songLyric.split(newLine);
      var lyricsObjArr = [];
      /* console.log(lineArr); */
      for (var i = 0; i < lineArr.length - 1; i++) {
        if (lineArr[i] === "") return;
        const obj = {};
        const time = lineArr[i].match(regTime);

        time[0] = time[0].slice(1, time[0].length - 1);

        obj.lyric =
          lineArr[i].split("]")[1].trim() === ""
            ? ""
            : lineArr[i].split("]")[1].trim();
        obj.time = time ? this.formatLyricTime(time[0]) : 0;
        if (obj.lyric === "") {
          /* console.log("这一行没有歌词"); */
        } else {
          lyricsObjArr.push(obj);
        }
      }
      /* console.log(lyricsObjArr); */
      this.finallyLyric = lyricsObjArr;
    },
    getDuration() {
       /* console.log(this.$refs.audio.duration); */ //此时可以获取到duration
       this.duration = this.$refs.audio.duration;
    },
   
    songSlide(e) {
       this.currentTime = e.target.currentTime;  //获取audio当前播放时间
      for (let i = 0; i < this.finallyLyric.length; i++) {
    if (this.currentTime > (parseInt(this.finallyLyric[i].time))) {
     
      const index = this.$refs.lyricDiv[i].dataset.index
      
      if (i === parseInt(index)) {
        this.lyricIndex = i
        if((i - 3)>0)
        {
           this.$refs.lyric.scrollTop =50 * (i -3); 
        }
       
      }
    }
  }
    },

 
  },
};
</script>


<style>
@import "./css/reset.css";
@import "./icon-css/fontawesome-free-5.15.2-web/css/all.css";
#app #appLimit {
  width: 1021.6px;
  height: 669.6px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
}
#app #menuMain {
  display: flex;
}
#app #musicBottom {
  width: 1021.6px;
  height: 62px;
  border-top: 1px solid #e1e1e1;
  overflow: hidden;
}
#app #musicBottom #musicDiv {
  float: left;
  width: 188px;
  height: 62px;
}
#app #musicBottom #musicDiv img {
  float: left;
  padding: 8px 10px;
  width: 48px;
  border-radius: 1em;
  cursor: pointer;
}
#app #musicBottom #musicDiv #intro {
  margin-top: 13px;
  float: left;
}

#app #musicBottom #musicDiv #songName #author {
  cursor: pointer;
  display: inline-block;
  margin-top: 4px;
  width: 100px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #474747;
}
#app #musicBottom #musicDiv #songName .fa-heart {
  cursor: pointer;
}
#app #musicBottom #musicDiv #songName #author span:hover {
  color: black;
}
#app #musicBottom #musicDiv #name {
  cursor: pointer;
  margin-top: 6px;
  width: 100px;
  font-size: 12px;
  color: #373737;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#app #musicBottom audio {
  margin-left: 20px;
  float: left;
  padding-top: 10px;
  width: 630px;
  background-color: white;
  margin-right: 10px;
}
#app #musicBottom audio::-webkit-media-controls-panel {
  background-color: white;
}
#app #musicBottom #ornament {
  margin-left: 10px;
  color: #686868;
  line-height: 65px;
}
#app #musicBottom #ornament #spanDiv {
  margin-top: 23px;
  display: inline-block;
  border: 2px solid #686868;
  line-height: 22px;
  border-radius: 0.4em;
  cursor: pointer;
}
#app #musicBottom #ornament span {
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
}

#app #musicBottom #ornament i {
  margin-left: 25px;
  font-size: 20px;
  cursor: pointer;
  color: #686868;
}
#app #musicBottom #ornament .fa-list-ul {
  margin-left: 29px;
}
#pop {
  z-index: 999;
  top: 60px;
  position: absolute;
  width: 1021.6px;
  height: 537.6px;
  background-color: white;

}
#pop #popLeft {
  float: left;
}
#pop #popLeft #stick {
  position: absolute;
  left: 250px;
  width: 200px;
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

#pop #popLeft #cd {
  width: 300px;
  margin-top: 80px;
  margin-left: 100px;
    -webkit-animation: rotate 6s infinite linear;
}
#pop #popLeft #songImg {
  position: absolute;
  left: 147px;
  top: 125px;
  width: 196px;
  border-radius: 10em;

  -webkit-animation: rotate 6s infinite linear;
}

#pop #popLeft #leftBottom {
  margin-top: 30px;
  margin-left: 60px;
}
#pop #popLeft #leftBottom div {
  float: left;
  font-size: 24px;
  background-color: #e2e2e296;
  color: #696969;
  border-radius: 2em;
  margin-left: 40px;
  cursor: pointer;
}
#pop #popLeft #leftBottom i {
  padding: 10px;
}
#pop #popRight {
  margin-top: 35px;
  margin-left: 150px;
  float: left;
  width: 420px;
  height: 100%;
}
#pop #popRight #songTitle span {
  display: inline-block;
  width: 430px;
  font-size: 24px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#pop #popRight #detail {
  margin-top: 10px;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}
#pop #popRight #detail span {
  float: left;
}
#pop #popRight #detail .limit {
  margin-left: 10px;
}
#pop #popRight #detail #limit1 {
  margin-left: 0px;
}
#pop #popRight #detail .message {
  margin-left: 6px;
  display: inline-block;
  width: 90px;
  height: 30px;
  color: #507daf;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#pop #popRight #lyric {
  width: 400px;
  height: 400px;
  overflow: auto;
}
#pop #popRight #lyric::-webkit-scrollbar {
  width: 0px;
}
#pop #popRight #lyric #line {
  line-height: 50px;
  font-size: 16px;
  color: #797979;
  text-align: center;
}
</style>
