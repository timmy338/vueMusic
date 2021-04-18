<template>
<div id="findMusicMusicListMenu">
  <router-view  :musicListTop="musicListTop" name="top"  v-if="!musicListTop.length==0"></router-view>
    <div id="choice">
    <div id="choiceBlock" @click="changeDisplay()">
      <span>{{ isClick }} <i class="fas fa-chevron-right"></i></span>
    </div>
    <div id="conceal" v-show="displaySet">
      <div id="title">
        <div @click="isClick='全部' ,getSongDetails(),getBottomSongList()" :class="{setDiv:isClick=='全部'}"><span>全部歌單</span></div>
      </div>
      <div id="language">
        <i class="fas fa-globe"></i><span class="titleSpan">語種</span
        ><choice-items :tag="tag1" :isClick.sync="isClick" @getSongDetails="getSongDetails" @getBottomSongList="getBottomSongList"></choice-items>
      </div>
      <div id="style">
        <i class="fas fa-guitar"></i><span class="titleSpan">風格</span
        ><choice-items :tag="tag2" :isClick.sync="isClick" @getSongDetails="getSongDetails" @getBottomSongList="getBottomSongList"></choice-items>
      </div>
      <div id="scene">
        <i class="fas fa-mug-hot"></i><span class="titleSpan">場景</span
        ><choice-items :tag="tag3" :isClick.sync="isClick" @getSongDetails="getSongDetails" @getBottomSongList="getBottomSongList"></choice-items>
      </div>
      <div id="feeling">
        <i class="far fa-smile-wink"></i><span class="titleSpan">情感</span
        ><choice-items :tag="tag4" :isClick.sync="isClick" @getSongDetails="getSongDetails" @getBottomSongList="getBottomSongList"></choice-items>
      </div>
      <div id="themes">
        <i class="fas fa-th-large"></i><span class="titleSpan">主題</span
        ><choice-items :tag="tag5" :isClick.sync="isClick" @getSongDetails="getSongDetails" @getBottomSongList="getBottomSongList"></choice-items>
      </div>
    </div>
    <div id="leftChoice" >
      <choiceLeftItem :tag="leftChoiceItem" :isClick.sync="isClick" @getSongDetails="getSongDetails"  @getBottomSongList="getBottomSongList"></choiceLeftItem>
    </div>

    
  </div>
    <div id="setZ"><router-view  :songList="BottomSongList" name="bottom"></router-view></div>
</div>
 
</template>

<script>
import choiceItems from "../../../components/choiceItems";
import choiceLeftItem from "../../../components/leftChoiceItem";
const axios = require("axios");
export default {
  data() {
    return {
      musicListTop:[],
      leftChoiceItem: [],
      BottomSongList:[],
      tag1: [],
      tag2: [],
      tag3: [],
      tag4: [],
      tag5: [],
      isClick: "全部",
      displaySet: false,
    };
  },
  components: {
    choiceItems,choiceLeftItem
  },
  mounted() {
    this.getClassification();
    this.getLeftClassification();
    this.getSongDetails();
    this.getBottomSongList();
  },
  methods: {
    getClassification() {
      var that = this;
      axios.get("http://localhost:3000/playlist/catlist").then(
        (res) => {
 /*          console.log(res); */
          this.getCategories(res);
        },
        (res) => {}
      );
    },
    getCategories(res) {
      for (var i = 0; i < res.data.sub.length; i++) {
        switch (res.data.sub[i].category) {
          case 0:
            this.tag1.push(res.data.sub[i]);
            break;
          case 1:
            this.tag2.push(res.data.sub[i]);
            break;
          case 2:
            this.tag3.push(res.data.sub[i]);
            break;
          case 3:
            this.tag4.push(res.data.sub[i]);
            break;
          case 4:
            this.tag5.push(res.data.sub[i]);
            break;
        }
      }
    },

    getLeftClassification() {
      var that = this;
      axios.get("http://localhost:3000/playlist/hot").then(
        (res) => {
/*           console.log(res); */
          that.leftChoiceItem = res.data.tags;
        },
        (res) => {}
      );
    },

    changeDisplay() {
      this.displaySet = !this.displaySet;
    },
     getSongDetails() {
      var that = this;
      axios.get("http://localhost:3000/top/playlist/highquality?before=1503639064232&limit=1&cat="+this.isClick).then(
        (res) => {
         that.musicListTop=res.data.playlists;
        },
        (res) => {}
      );
    },

     getBottomSongList() {
      var that = this;
      axios.get("http://localhost:3000/top/playlist?limit=12&cat="+this.isClick).then(
        (res) => {
          that.BottomSongList=res.data.playlists;
        },
        (res) => {}
      );
    },
    
  },
};
</script>

<style >
#choice {
  margin-top: 20px;
  position: relative;
  z-index:5;
  height: 70px;
}
#choice #choiceBlock {
  border: 1px solid #d8d8d8;
  border-radius: 2em;
  width: 100px;
  line-height: 30px;
  text-align: center;
  cursor: pointer; 
   float: left;
}
#choice #choiceBlock span {
  margin: 0px auto; 
}

#choice #conceal {
  width: 740px;
  height: auto;
  position: absolute;
  top: 40px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
#choice #conceal #language,
#choice #conceal #style,
#choice #conceal #scene,
#choice #conceal #feeling,
#choice #conceal #themes {
  margin-top: 30px;
  width: 740px;
}

#choice #conceal i {
  float: left;
  font-size: 24px;
  margin-top: 23px;
  margin-left: 20px;
  color: #cfcfcf;
}

#choice #conceal .titleSpan {
  float: left;
  font-size: 14px;
  margin-left: 6px;
  line-height: 70px;
  color: #cfcfcf;
}

#choice #conceal #title {
  height: 46px;
  border-bottom: 1px solid #e5e5e5;
  margin-top: 12px;
}
#choice #conceal #title div {
  width: 90px;
  border-radius: 2em;
  text-align: left;
  margin-left: 30px;
  cursor: pointer; 
}
#choice #conceal #title div span {
  padding: 12px;
  line-height: 30px;
}
#choice #conceal #title:hover span {
  color: #ec4141;
}
#leftChoice
{
  width: 550px;
  float: right;
}
#findMusicMusicListMenu #setZ
{
  position: relative;
  top: -30px;
  z-index: 1;
}

</style>