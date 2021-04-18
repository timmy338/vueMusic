<template>
  <div id="choiceItems" >
    <div v-for="(fit,index) in tag"  :key="fit+index" id="setStyle" @click="clicking(fit)" >
    
  <div :class="{setDiv:isClick==fit.name}"><span>{{fit.name}}</span></div>
    </div>
  
  </div>
</template>


<script>
const axios = require("axios");
export default {
  props:["tag","isClick"],
  data() {
    return {
    };
  },
  methods:
  {
    clicking(fit)
    {
      this.$emit('update:isClick', fit.name);
      this.$emit('getSongDetails');
      this.$emit('getBottomSongList');
    }
  }
};
</script>

<style>
#choiceItems
{
  display: flex;
  margin-left: 30px;
  flex-wrap:  wrap ;
  width: 600px;

}
#choiceItems #setStyle
{
  margin-top: 20px;
  margin-left: 40px;
  height: 40px;
}
#choiceItems #setStyle div
{
  height: 30px;
  line-height: 30px;
  border-radius: 2em;
  cursor: pointer; 
  text-align:center;
}
#choiceItems #setStyle div:hover span
{
  color: #ec4141;
}
#choiceItems #setStyle span
{
  padding: 10px;
}
.setDiv
{
    background-color:#FDF5F5;
    color:#ec4141;
}
</style>