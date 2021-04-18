<template>
  <div>
    <div id="searchSongMenu" v-if="Display()">
      <div id="bestMatch" >
        <p>最佳匹配</p>
        <div id="imgDiv">
          <img :src="Default()" alt="" />
          <div>
            <span id="name"
              >歌手: {{ bestSearch[0].name }}
              <span id="detail">{{ bestSearch[0].alias }}</span></span
            >
          </div>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
    
    <div>
      <songListBase :searchResult="searchResult"></songListBase>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
import songListBase from "../../../components/songListBase";

export default {
  props: ["searchResult", "bestSearch"],
  data() {
    return {};
  },

  components: { songListBase },
  mounted() {
     this.test(); 
  },
  methods: {
       test()
      {
       /*  console.log(this.searchResult); */
      }, 

    Display() {
      return this.bestSearch != undefined && this.bestSearch.length != 0;
    },
    Default() {
      if (this.bestSearch.length != 0) {
        return this.bestSearch[0].picUrl;
      } else {
        return 0;
      }
    },
  },
};
</script>
<style>
#searchSongMenu {
  margin-top: 10px;
  margin-left: 32px;
  margin-bottom: 20px;
}


#searchSongMenu #imgDiv {
  margin-top: 10px;
  width: 364px;
  height: 80px;
  background-color: #f4f4f4;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  overflow: hidden;
}

#searchSongMenu #imgDiv div {
  float: left;
  width: 240px;
  height: 80px;
  padding: 18px 0;
}
#searchSongMenu #imgDiv i {
  float: left;
  line-height: 80px;
  font-size: 20px;
  margin-left: 15px;
  color: #9a9a9a;
}
#searchSongMenu #bestMatch img {
  width: 80px;
  height: 80px;
  float: left;
}
#searchSongMenu #bestMatch #name {
  margin-left: 10px;
  font-size: 14px;
  display: block;
  width: 240px;
}
#searchSongMenu #bestMatch #detail {
  margin-left: 10px;
  color: #9a9a9a;
  line-height: 25px;
}

#searchSongMenu #bestMatch p {
  font-size: 12px;
  font-weight: bold;
}
</style>
