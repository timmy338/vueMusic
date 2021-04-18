<template>
  <div id="clickMVMenu">
    <div id="left">
      <div id="topbar" @click="routerClick(), clickMV()">
        <i class="fas fa-caret-left"></i> <span>MV詳情</span>
      </div>
      <video :src="mvUrl" autoplay controls></video>
      <div id="author" v-if="mvDetail!={}"><img :src="mvDetail.cover" alt=""><span>{{authors}}</span></div>
      <div id="title"><span>{{mvDetail.name  }} </span> <i class="fas fa-sort-down" @click="introSet()" v-if="topDownControl"> </i><i class="fas fa-sort-up"  @click="introSet()" v-if="!topDownControl"></i></div>
      <div id="time"><span>{{"發布: "+ mvDetail.publishTime}}</span><span>{{"播放次數: "+moneyFormat(mvDetail.playCount)}}</span></div>
      <div id="intro" v-if="introControl"><span>{{mvDetail.desc}}</span></div>
      <div id="bottom">
          <div id="playAll">
            <span> <i class="far fa-thumbs-up"></i>贊(5230)</span>
          </div>
        
          <div id="collection" >
            <span
              ><i class="fas fa-folder-plus"></i>收藏({{
                mvDetail.subCount
              }})</span
            >
          </div>
          <div id="share" >
            <span
              ><i class="far fa-share-square"></i>分享({{
               mvDetail.shareCount
              }})</span
            >
          </div>
          <div id="download" >
            <span><i class="fas fa-arrow-circle-down"></i>下載全部</span>
          </div>
          <span id="extra">舉報</span>
        </div>
    </div>
    <div id="right">
      <span id="title">相關推薦</span>
      <clickMVMenuBox :songList="recommedMV"></clickMVMenuBox>
    </div>
  </div>
</template>

<script >
const axios = require("axios");
import clickMVMenuBox from "./clickMVMenuBox";
export default {
  data() {
    return {
      mv: this.$route.query.fit,
      mvUrl: "",
      mvDetail:{},
      authors:"",
      introControl:false,
      topDownControl:true,
      recommedMV:[],
    };
  },
  components: { clickMVMenuBox },
  mounted() {
    this.getMVDetails();
    this.getMVUrl();
    this. getRecommedMv();
  },
  methods: {
    introSet()
    {
      this.introControl=!this.introControl;
      this.topDownSet();
    },
    topDownSet()
    {
       this.topDownControl=!this.topDownControl;
    },
    moneyFormat(arg) {
      if (arg+"".length > 4) {
        const moneys = --arg / 10000;
        const realVal = parseFloat(moneys).toFixed(0);
        return realVal + "万";
      } else {
        return arg;
      }
    },
    singerlimit() {
      if (this.mvDetail.artists.length == 1) {
        return this.mvDetail.artists[0].name;
      } else {
        return this.mvDetail.artists[0].name + "/" + this.mvDetail.artists[1].name;
      }
    },
    routerClick() {
      this.$router.push({ path: "/findMusic/recommed" });
    },

    clickMV() {
      this.$bus.$emit("isClickMV");
    },
    getMVDetails() {
      var that = this;
      axios.get("http://localhost:3000/mv/detail?mvid=" + this.mv.id).then(
        (res) => {
          console.log(res.data.data);
          that.mvDetail=res.data.data;
          that.authors=that.singerlimit();
        },
        (res) => {}
      );
    },
    getMVUrl() {
      var that = this;
      axios.get("http://localhost:3000/mv/url?id=" + this.mv.id).then(
        (res) => {
          that.mvUrl = res.data.data.url;
        },
        (res) => {}
      );
    },
     getRecommedMv()
    {
       var that = this;
      axios.get("http://localhost:3000/simi/mv?mvid="+this.mv.id).then(
        res=> {
          console.log(res);
          that.recommedMV=res.data.mvs;
  
        },
        res=>  {}
      );
    }

  
  },
};
</script>

<style >
#clickMVMenu {
  width: 1021.6px;
  height: 610px;
  overflow: auto;

}
#clickMVMenu::-webkit-scrollbar {
  width: 0px;
}

#clickMVMenu #left {
  float: left;
  margin-left: 20px;
  margin-top: 15px;
  width: 620px;
}
#clickMVMenu #topbar {
  font-size: 18px;
  cursor: pointer;
}
#clickMVMenu #topbar i {
  margin-right: 5px;
}
#clickMVMenu #left video {
  margin-top: 10px;
  width: 620px;
  height: 354px;
}
#clickMVMenu #left #author
{
    width: 100%;
    height:80px;
}
#clickMVMenu #left #author *
{
    margin-top: 14px;
    float: left;
    line-height: 50px;
    color: #676767;
}
#clickMVMenu #left #author span:hover{
   color: #373737;
}
#clickMVMenu #left #author img
{
    width: 50px;
    height: 50px;
    border-radius: 2em;
    margin-right: 10px;
}
#clickMVMenu #left #title
{
    margin-top: 15px;
    font-weight: bold;
    font-size: 22px;
      position: relative;
}

#clickMVMenu #left #time
{
  margin-top: 16px;
  margin-left: 10px;
  color:#CFCFCF;
  font-size: 14px;
}
#clickMVMenu #left #time span
{
  margin-right: 20px;
}
#clickMVMenu #left #intro
{
  margin-left: 10px;
  margin-top: 20px;
  width: 600px;
  font-size: 14px;
  line-height: 22px;
}
#clickMVMenu #left #bottom {
  margin-top: 10px;
  width: 590px;
  height: 34px;
  padding-bottom: 50px;
}
#clickMVMenu #left #bottom * {
  float: left;
  line-height: 32px;
}
#clickMVMenu #left #bottom #playAll {
  height: 32px;
  border: 1px rgb(187, 187, 187) solid;
  border-radius: 3em;
  cursor: pointer;
}
#clickMVMenu #left #bottom #playAll span {
  padding: 0 8px;
  color: #676767;
}
#clickMVMenu #left #bottom #playAll .fa-thumbs-up {
  margin-right: 8px;
  font-size: 16px;
}


#clickMVMenu #left #bottom #collection {
  margin-left: 10px;
  height: 32px;
  border: 1px rgb(187, 187, 187) solid;
  border-radius: 3em;
  cursor: pointer;
}
#clickMVMenu #left #bottom #collection:hover,#clickMVMenu #left #bottom #share:hover,#clickMVMenu #left #bottom #download:hover,
#clickMVMenu #left #bottom #playAll:hover
{
  background-color: #e7e7e7;
}
#clickMVMenu #left #bottom #collection span {
  padding: 0 8px;
  color: #676767;
}
#clickMVMenu #left #bottom .fa-folder-plus {
  font-size: 18px;
  margin-right: 6px;
}
#clickMVMenu #left #bottom #share {
  height: 32px;
  line-height: 28px;
  border: 1px rgb(187, 187, 187) solid;
  border-radius: 3em;
  margin-left: 10px;
  cursor: pointer;
}
#clickMVMenu #left #bottom #share .fa-share-square {
  margin-right: 6px;
}
#clickMVMenu #left #bottom #share span {
  padding: 0 8px;
  color: #676767;
}
#clickMVMenu #left #bottom #download {
  width: 122px;
  height: 32px;
  border: 1px rgb(187, 187, 187) solid;
  border-radius: 3em;
  margin-left: 10px;
  cursor: pointer;
  color: #676767;
}

#clickMVMenu #left #bottom #download .fa-arrow-circle-down {
  margin-left: 16px;
  margin-right: 4px;
}
#clickMVMenu #left #bottom #extra
{
  float:right;
  font-size: 12px;
  color: #9F9F9F;
  text-decoration:underline;
}
#clickMVMenu #right
{
  float:left;
  margin-left: 30px;
  margin-top: 14px;
  width: 340px;
}
#clickMVMenu #right #title
{
  font-weight: bold;
  font-size: 20px;
}
</style>