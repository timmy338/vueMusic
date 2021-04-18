<template>
  <div id="musicListBox-div">
    <div id="musicListBox" v-for="(fit, index) in songList" :key="fit + index" @click="routerClick(fit)" >
      <!-- playCount -->

      <div id="clout-div">
          <span id="clout"
            ><i class="fas fa-headphones-alt"></i>
            {{ moneyFormat(fit.playCount) }}</span
          >
        </div>

      <i class="fas fa-play-circle"></i>
      <p id="creator">
        <i class="far fa-user"> </i> {{ ellipsis(fit.creator.nickname, 20) }}
      </p>
      <img :src="fit.coverImgUrl" alt="" />

      <div id="detail">
        <p id="name">{{ ellipsis(fit.name, 30)}}</p>
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
       this.$router.push({path : '/clickSongMenu' , query:{fit}});/* query傳值到移動到的頁面 */
    },
    
  },
};
</script>
<style>
#musicListBox-div {
  width: 750px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#musicListBox {
  cursor: pointer; 
  position: relative;
  margin-top: 16px;
  width: 176px;
  height: auto;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  cursor: pointer;
}
#musicListBox .fa-play-circle {
  display: none;
  position: absolute;
  font-size: 34px;
  top: 130px;
  left: 130px;
  color: rgba(255, 255, 255, 0.8);
}
#musicListBox:hover .fa-play-circle
{
  display:block;
}

#musicListBox img {
  width: 176px;
  height: 176px;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  float: left;
}
#musicListBox #detail {
  float: left;
  margin-top: 4px;
  font-size: 12.5px;
}
#musicListBox #detail #name {
  margin-top: 7px;
  line-height:16px;
  color: #373737;
}

#musicListBox #detail #name:hover {
  color: rgb(27, 27, 27);
}
#musicListBox #creator {
  position: absolute;
  color: #ffffff;
  font-size: 10px;
  top: 154px;
  left: 12px;
  text-shadow: 2px 2px 2px rgb(83, 83, 83);
}
#musicListBox  #clout-div {
  width: 138.4px;
  position: absolute;
  top: 10px;
  left: 30px;
  z-index: 3;
  font-size: 10px;
  color: #e9eaeb;
   text-shadow: 2px 2px 2px rgb(83, 83, 83);
}

 #musicListBox  #clout {
  float: right;
}
</style>
