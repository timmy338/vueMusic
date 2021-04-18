<template>
  <div id="top-bar">
    <ul>
      <li id="icon-li">
        <a href="" id="icon">
          <img src="../../assets/music.png" alt="" />
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
          @keyup.enter="searchEnter(), searchMusic()"
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
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      query: "",
      searchSong: [],
    };
  },

  methods: {
    searchEnter() {
      this.$router.push(this.link);
    },

    searchMusic: function () {
      var that = this;
      axios
        .get("http://localhost:3000/cloudsearch?keywords=" + this.query)
        .then(
          (res) => {
            that.searchSong=res.data.result.songs;

          },
          (res) => {}
        );
    },
  },
};
</script>

<style>
#top-bar {
  height: 60px;
  background-color: rgb(236, 65, 65);
  position: relative;
  display: flex;
}

#icon-li {
  margin-left: 18px;
  width: 160px;
  position: absolute;
  top: 17px;
}
#icon-li a {
  display: flex;
}
#icon img {
  height: 26px;
  width: 26px;
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  border: none;
}
#icon span {
  line-height: 26px;
  padding-left: 5px;
  font-size: 18px;
  color: white;
  letter-spacing: 3px;
}
#top-bar #back {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 228.8px;
  top: 18px;
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  background-color: rgba(0, 0, 0, 0.3);
}
#top-bar #back i {
  font-size: 7px;
  margin-left: 8px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.3);
}
#top-bar #next {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 260.8px;
  top: 18px;
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  background-color: rgba(0, 0, 0, 0.3);
}

#top-bar #next i {
  font-size: 7px;
  margin-left: 9px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.3);
}
#top-bar #search-li {
  position: absolute;
  left: 298.4px;
  top: 15px;
  display: flex;
}
#top-bar #search-li i {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255, 0.6);
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  padding-left: 4px;
  font-size: 13px;
}
#top-bar #search-li input {
  width: 128px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  padding: 0;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  color: white;
}

::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
}
#top-bar #search-music {
  position: absolute;
  left: 465.6px;
  top: 15px;
}
#top-bar #search-music i {
  width: 30px;
  text-align: center;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.6);
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  background-color: rgba(0, 0, 0, 0.3);
}
#user-li {
  position: absolute;
  left: 602px;
  top: 15px;
}
#user-li i {
  color: rgb(254, 253, 253);
  width: 30px;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  background-color: rgb(224, 224, 224);
}
#login-in-li {
  position: absolute;
  left: 637px;
  line-height: 60px;
  font-size: 12px;
}
#login-in-li a {
  color: rgb(251, 217, 217);
}
#login-in-li i {
  padding-left: 6px;
  width: 10px;
  color: rgb(251, 217, 217);
}
#vip-li {
  position: absolute;
  left: 694px;
  line-height: 60px;
  font-size: 12px;
}
#vip-li a {
  color: rgb(251, 217, 217);
}

#vip-li a:hover,
#login-in-li:hover a,
#login-in-li:hover i {
  color: white;
}

#set-li {
  position: absolute;
  left: 754px;
  line-height: 60px;
  font-size: 18px;
}
#set-li i,
#skin-li i,
#email-li i,
#mini-li i,
#min-li i,
#max-li i,
#end-li i {
  color: rgba(255, 255, 255, 0.6);
}

#set-li i:hover,
#skin-li i:hover,
#email-li i:hover,
#mini-li i:hover,
#min-li i:hover,
#max-li i:hover,
#end-li i:hover {
  color: white;
}

#skin-li {
  position: absolute;
  left: 787px;
  line-height: 60px;
  font-size: 16px;
}

#email-li {
  position: absolute;
  left: 824px;
  line-height: 60px;
  font-size: 16px;
}
#line-li {
  position: absolute;
  left: 858px;
  line-height: 60px;
  top: 20px;
}
#line-li div {
  width: 1px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.6);
}

#mini-li {
  position: absolute;
  left: 875px;
  line-height: 60px;
}

#min-li {
  position: absolute;
  left: 910px;
  line-height: 48px;
}

#max-li {
  position: absolute;
  left: 950px;
  line-height: 60px;
}

#end-li {
  position: absolute;
  left: 985px;
  line-height: 60px;
  font-size: 20px;
}
</style>
