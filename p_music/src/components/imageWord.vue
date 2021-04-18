<template>
  <div class="demo-image" id="image">
    <div
      class="block"
      v-for="(fit, index) in mainMenuMusicListRecommed"
      :key="fit + index"
       @click="routerClick(fit)"
    >
      <div id="image-clout">
         <i class="fas fa-play-circle"></i>
        <div id="clout-div">
          <span id="clout"
            ><i class="fas fa-headphones-alt"></i>
            {{ moneyFormat(fit.playCount) }}</span
          >
        </div>
        <el-image
          :src="fit.picUrl"
          :fit="fit + index"
        >
        </el-image>
      </div>

      <span class="demonstration">{{ fit.name }}</span>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  props: ["mainMenuMusicListRecommed"],
  data() {
    return {
      fits: ["cover"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  methods: {
    moneyFormat(arg) {
      if (arg.toString().length > 4) {
        const moneys = arg / 10000;
        const realVal = parseFloat(moneys).toFixed(0);
        return realVal + "万";
      } else {
        return arg;
      }
    },
    routerClick(fit)
    {
       this.$router.push({path : '/clickSongMenu' , query:{fit}});/* query傳值到移動到的頁面 */
    }
  },
};
</script>

<style>
#image {
  width: 750px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#image #clout {
  float: right;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
}

#image .block {
  width: 138.4px;
  cursor: pointer;
}

#image #image-clout {
  width: 138.4px;
  height: 138.4px;
  position: relative;
  margin-bottom: 4px;
  display: inline-block;
}

#image #image-clout #clout-div {
  width: 138.4px;
  position: absolute;
  top: 25px;
  left: -10px;
  z-index: 3;
  font-size: 10px;
  color: #e9eaeb;
}

#image .el-image {
  margin-top: 20px;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
}

#image .demonstration {
  display: block;
  font-size: 12.5px;
  line-height: 20px;
  height: 45px !important;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: wrap;
}

#image .fa-play-circle {
  display: none;
  position: absolute;
  z-index: 9;
  font-size: 20px;
  top: 130px;
  left: 105px;
  color: rgba(255, 255, 255, 0.8);
}
#image #image-clout:hover .fa-play-circle
{
  display:block;
}
</style>