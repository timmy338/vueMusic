<template>
<div id="newCDMenu">
    <div id="title">
      <span>本周新碟</span>
    </div>

   <div class="demo-image" id="newCDAll">
    <div
      class="block"
      v-for="(fit, index) in newCDArr"
      :key="fit + index"
      @click="routerClick(fit)"
    >
      <div id="image-clout">
         <i class="fas fa-play-circle"></i>
        <el-image
          :src="fit.picUrl"
          :fit="fit + index"
        >
        </el-image>
           <img src="./cd.png" alt="" id="imgCd">
      </div>
      
      <span class="demonstration">{{ fit.name }}</span>
    </div>
  </div> 
  </div>
</template>

<script>
const axios = require("axios");
export default {
  props: ["newCDArr"],
  data() {
    return {
      fits: ["cover"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  methods: {
    routerClick(fit)
    {
       this.$router.push({path : '/clickAlbumMenu' , query:{fit}});/* query傳值到移動到的頁面 */
    }
  },
};
</script>

<style>

#newCDMenu
{
  margin-left: 10px;
  width: 800px;
  float:left;
}
#newCDMenu #title
{
  margin-top: 20px;
  float:left;
  width: 10px;
  height: 100px;
  line-height: 22px;
}
#newCDMenu #title span
{
  font-size: 20px;
}
#newCDAll {
  float:left;
  margin-left: 30px;
  width: 670px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#newCDAll #imgCd
{
  height: 90px;
  position: absolute;
  top: 40px;
}
#newCDAll #clout {
  float: right;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
}

#newCDAll .block {
  
    margin-left: 20px;
  width: 138.4px;
  cursor: pointer;
}

#newCDAll #image-clout {
  width: 138.4px;
  height: 138.4px;
  position: relative;
  margin-bottom: 4px;
  display: inline-block;
}

#newCDAll #image-clout #clout-div {
  width: 138.4px;
  position: absolute;
  top: 25px;
  left: -10px;
  z-index: 3;
  font-size: 10px;
  color: #e9eaeb;
}

#newCDAll .el-image {
  margin-top: 20px;
  border-radius:0.5em;

}

#newCDAll .demonstration {
  display: block;
  font-size: 12.5px;
  line-height: 20px;
  height: 45px !important;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: wrap;
}

#newCDAll .fa-play-circle {
  display: none;
  position: absolute;
  font-size: 45px !important;
  z-index: 9;
  font-size: 20px;
  top: 70px;
  left: 50px;
  color: rgba(255, 255, 255, 0.8);
}
#newCDAll #image-clout:hover .fa-play-circle
{
  display:block;

}
</style>