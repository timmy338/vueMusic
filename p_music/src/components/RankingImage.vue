<template>
  <div id="rankingTop" @click="routerClick(Image)" >
    <img :src="Image.coverImgUrl" alt="" />
    <i class="fas fa-play-circle"></i>
    <span> {{ dateSet(Image.updateTime) }} </span>

    <div id="leftItem"></div>
  </div>
</template>

<script>
export default {
  props: ["Image"],
  methods: {
    dateSet(time) {
      var nowDate = new Date(--time);
      var mouth = nowDate.getMonth() + 1;
      var day = nowDate.getDay() ;
      if (mouth < 10) {
        mouth = "0" + mouth;
      }
      if (day < 10) {
        day = "0" + day;
      }
      return mouth + "月" + day + "日更新";
    },
     routerClick(fit)
    {
      console.log("click");
      this.$router.push({path : '/clickSongMenu' , query:{fit}});/* query傳值到移動到的頁面 */
    }
 
  },
};
</script>

<style>
#rankingTop {
  position: relative;
  float: left;
  cursor: pointer;
}
#rankingTop img {
  width: 180px;
  height: 180px;
  border-radius: 0.5em;
}
#rankingTop span {
  position: absolute;
  left: 45px;
  top: 120px;
  color: whitesmoke;
  font-size: 14px;
}
#rankingTop .fa-play-circle {
  display: none;
  font-size: 40px;
  position: absolute;
  left: 70px;
  top: 70px;
  color: rgba(245, 245, 245, 0.4);
}
#rankingTop:hover .fa-play-circle {
  display: block;
}
</style>