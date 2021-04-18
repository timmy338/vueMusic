<template>
<mainMenuTemplate>
    <slide-show slot="main-menu-top" :Image="mainMenuTopImage"></slide-show>
    <recommedList1 slot="main-menu-middle">
      <imageWord
        slot="recommedList1-imageWord"
        :mainMenuMusicListRecommed="mainMenuMusicListRecommed"
      ></imageWord>
    </recommedList1>
    <move1 slot="main-menu-last"
      ><mv3 slot="move1-image3" :mv3="move1"></mv3
    ></move1>
    <newMusic slot="main-menu-extra1"><songDetails slot="newMusic-songDetails" :songDetails="songDetails"></songDetails></newMusic>
    <recommedMv slot="main-menu-extra2"><mv3 slot="recommedMv-mv" :mv3="recommedMv3" ></mv3></recommedMv>
</mainMenuTemplate>
  
</template>

<script>
import recommedList1 from "./recommedList1";
import move1 from "./move1";
import newMusic from "./newMusic";
import recommedMv from "./recommedMv";
import slideShow from "../../../components/slideShow";
import imageWord from "../../../components/imageWord";
import mv3 from "../../../components/mv3";
import mainMenuTemplate from "../../../components/mainMenuTemplate";
import songDetails from "../../../components/songDetails";

const axios = require("axios");
export default {
  name: "Recommed",
   data(){
    return{
       mainMenuTopImage: [],
       mainMenuMusicListRecommed:[],
       move1:[],
       songDetails:[],
       recommedMv3:[],

    }
  },
  components: {
    slideShow,imageWord,recommedList1,mv3,move1,mainMenuTemplate,newMusic,songDetails,recommedMv
  },
   mounted(){
    this.getMainMenuImage();
    this.getMainMenuMusicListRecommed();
    this.getMv();
    this.getSongDetails();
    this.getRecommedMv3();
  },
  methods: {
    getMainMenuImage:function () {
      var that = this;
      axios.get("http://localhost:3000/banner").then(
        res=> {
          that.mainMenuTopImage =res.data.banners;
        },
        res=>  {}
      );
    },

    getMainMenuMusicListRecommed:function () {
      var that = this;
      axios.get("http://localhost:3000/personalized?limit=10").then(
        res=> {
          that.mainMenuMusicListRecommed=res.data.result;
        },
        res=>  {}
      );
    },

    /* 發現音樂-個性推薦-獨家放送 */
    getMv:function () {
      var that = this;
      axios.get("http://localhost:3000/personalized/privatecontent").then(
        res=> {
          that.move1=res.data.result;
        },
        res=>  {}
      );
    },

    getSongDetails()
    {
       var that = this;
      axios.get("http://localhost:3000/top/song?type=0").then(
        res=> {
          that.songDetails=res.data.data.slice(0,12);
        },
        res=>  {}
      );
    },

   getRecommedMv3()
    {
       var that = this;
      axios.get("http://localhost:3000/personalized/mv").then(
        res=> {
          that.recommedMv3=res.data.result.slice(0,3);
        },
        res=>  {}
      );
    }

  },

 


};
</script>

<style>

</style>