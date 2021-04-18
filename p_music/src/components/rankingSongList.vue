<template>
<div id="rankingSongListDiv">
<div id="musicListColor">
    <div
      id="musicList"
      class="musicListClass"
      v-for="(fit, index) in rankingResult"
      :key="fit + index"
      :class="{ isClickMusicList: index === setColor }"
      @click="setIsClick(index),songPlay(fit)"
    >
      <div id="no">
        <span :class="{setRed:index<3}">{{ index + 1 }}</span>
      </div>
      <div id="hot"></div>
      <div id="musicTitle">
        <span>{{ fit.name }}</span>
      </div>

      <div id="singer">
        <span>{{singerlimit(fit) }}</span>
      </div>
  
    </div>
        <p>查看更多 <i class="fas fa-chevron-right"></i></p>
  </div>
</div>
  
</template>

<script>
export default {
  props: ["rankingResult"],
  data() {
    return {
      setColor: -1,
    };
  },
  methods: {
 
    singerlimit(fit) {
      
      var allAr = "";
      if(fit.ar.length==1)
      {
        return fit.ar[0].name;
      }
      else 
      {
      for (var i = 0; i < fit.ar.length-1 ; i++) {
        allAr = allAr+fit.ar[i].name + "/";
      }
      allAr=allAr+fit.ar[i].name;
      return allAr; 
      }
    },

    setIsClick(index) {
      this.setColor = index;
    },
songPlay(fit) {
      this.$bus.$emit("PlaySongs", fit);
    },
    
  },
};
</script>

<style>
#rankingSongListDiv #musicListColor {
  width: 560px;
  border-radius: 0.5em;
  overflow: hidden;
  float: right;
}
#rankingSongListDiv #musicListColor #musicList {
  color: #afafaf;
  height: 35px;
  line-height: 35px;
  width: 560px;
  cursor: pointer;
}
#rankingSongListDiv #musicListColor .musicListClass:nth-child(even) {
  background-color: white;
}
#rankingSongListDiv #musicListColor .musicListClass:nth-child(odd) {
  background-color: #f9f9f9;
}

#rankingSongListDiv #musicListColor .isClickMusicList {
  background-color: rgb(229, 229, 229) !important;
}

#rankingSongListDiv #musicListColor .musicListClass:hover {
  background-color: rgb(236, 236, 236) !important;
}

#rankingSongListDiv #musicListColor #musicList > * {
  float: left;
}

#rankingSongListDiv #musicListColor #musicList #no span {
  float: right;
}

#rankingSongListDiv #musicListColor #musicList #no {
  width: 30px;
  font-size: 14px;
  /*  margin-left: 30px; */
}

#rankingSongListDiv #musicListColor #musicList #musicTitle {
  width: 150px;
  color: #656565;
  margin-left: 10px;
  font-size: 12px;
  /* 字省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#rankingSongListDiv #musicListColor #musicList #singer {
  width: 330px;
  color: #9B9B9B;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#rankingSongListDiv #musicListColor #musicList #singer span
{
  float:right;
}
#rankingSongListDiv #musicListColor #musicList #singer span:hover
{
    color: #626262;
}

#rankingSongListDiv #musicListColor #hot {
  margin-left: 10px;
  width: 10px;
  height: 3px;
  margin-top: 16px;
  background-color: #c8c8c8;
}
#rankingSongListDiv #musicListColor p
{
  margin-left: 17px;
  margin-top: 5px;
  font-size: 12px;
  color: #676767;
}
.setRed
{
  color: red;
}
</style>
