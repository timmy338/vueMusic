/* 輪播圖 */
<template>
  <div id="slideShow" >
    <el-carousel :interval="4000" type="card" height="170px" id="image-play"  >
      <el-carousel-item  v-for="(item,index)  in Image " :key="item+index" >
            <img :src="item.imageUrl"  width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>
<script >
const axios = require("axios");
export default {
  name: "slideShow",
  components: {
  },
  props:["Image"],
  data()
  {
    return{
    }
  }

};
</script>
       
<style>
#slideShow
{
  width: 760px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

#image-play .el-carousel__container .el-carousel__item--card {
  width: 50%;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;

}

#image-play .el-carousel__container h3 {
  display: none;
}
#image-play .el-carousel__indicators--outside button {
  background-color: #ec4141;
}

</style>
