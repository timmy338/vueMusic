<template>
  <div id="clickMVMenuBox-div">
    <div id="clickMVMenuBox" v-for="(fit, index) in songList" :key="fit + index" @click="routerClick(fit)">
      <!-- playCount -->

      <div id="clout-div">
          <span id="clout"
            ><i class="fas fa-headphones-alt"></i>
            {{moneyFormat(fit.playCount) }}</span
          >
        </div>

   
    
      <img :src="fit.cover" alt="" />

      <div id="detail">
        <span id="name">{{fit.name}}</span>
        <div id="author"><span>{{"by "+fit.artists[0].name}}</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["songList"],
  data() {
    return {};
  },
  methods: {
    ellipsis(value, limit) {
      if (!value) return "";
      if (value.length > limit) {
        return value.slice(0, limit) + "...";
      }
      return value;
    },
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
       this.$router.push({path : '/clickMVMenu' , query:{fit}});/* query傳值到移動到的頁面 */
    }
  },
};
</script>
<style>
#clickMVMenuBox-div {
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#clickMVMenuBox {
  cursor: pointer; 
  position: relative;
  margin-top: 16px;
  height: auto;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  cursor: pointer;
}
#clickMVMenuBox .fa-play-circle {
  display: none;
  position: absolute;
  font-size: 34px;
  top: 130px;
  left: 130px;
  color: rgba(255, 255, 255, 0.8);
}
#clickMVMenuBox:hover .fa-play-circle
{
  display:block;
}

#clickMVMenuBox img {
  width: 142px;
  height: 82px;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  float: left;
}
#clickMVMenuBox #detail {
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 12.5px;
  width: 190px;
}
#clickMVMenuBox #detail #name {
  margin-top: 7px;
  line-height:16px;
  color: #373737;
}

#clickMVMenuBox #detail #name:hover {
  color: rgb(27, 27, 27);
}
#clickMVMenuBox #detail #author
{
  color:#9F9F9F ;
  margin-top: 12px;
}
#clickMVMenuBox #detail #author:hover
{
   color:#9F9F9F ;
}
#clickMVMenuBox #creator {
  position: absolute;
  color: #ffffff;
  font-size: 10px;
  top: 154px;
  left: 12px;
  text-shadow: 2px 2px 2px rgb(83, 83, 83);
}
#clickMVMenuBox  #clout-div {
  width: 138.4px;
  position: absolute;
  top: 5px;
  left: -4px;
  z-index: 3;
  font-size: 10px;
  color: #e9eaeb;
   text-shadow: 2px 2px 2px rgb(83, 83, 83);
}

 #clickMVMenuBox  #clout {
  float: right;
}
</style>
