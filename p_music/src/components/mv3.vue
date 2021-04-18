<template>
  <div class="demo-image" id="mv3">
    <div class="block" v-for="(fit,index) in  mv3" :key="fit+index"  @click="routerClick(fit),clickMV()">
      <i class="fas fa-play-circle"></i>
      <div id="limit">
        
        <el-image
          style="width: 240px; height: 138.4px"
          :src="fit.picUrl"
          :fit="fit+index"
        ></el-image>
      </div>

      <span class="demonstration">{{fit.name }}</span>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  props:["mv3"],
  data() {
    return {
      fits: ["cover"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  methods:
  {
      routerClick(fit)
    {
    
       this.$router.push({path : '/clickMVMenu' , query:{fit}});/* query傳值到移動到的頁面 */
    },
  
    clickMV()
    {
      this.$bus.$emit("isClickMV");
    }
  }
};
</script>

<style>
#mv3
{
  width: 750px;
  display:flex;
  flex-wrap: wrap;
  justify-content:  space-between ;
}

#mv3 .block
{
   width: 240px;
  position: relative;
  cursor: pointer;
}

#mv3 .fa-play-circle
{
  position: absolute;
  top: 30px;
  left: 10px;
  z-index: 9;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.452);
}
#mv3 #limit
{
  position: relative;
  z-index: 1;
}
#mv3 .el-image {
  margin-top: 20px;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  margin-bottom: 4px;
}
#mv3 span {
  font-size: 12.5px;
  line-height: 20px;
}
</style>