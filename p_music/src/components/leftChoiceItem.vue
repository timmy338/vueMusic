<template>
  <div id="leftChoiceItems" >
    <div v-for="(fit,index) in tag"  :key="fit+index" id="setStyle" @click="clicking(fit)">
        <div><span>{{fit.name}}</span></div>
    </div>
  
  </div>
</template>


<script>
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

#leftChoiceItems #setStyle
{
    float: left;
    margin-left: 20px;
    line-height: 30px;
    font-size: 13px;
    color: #676767;
    cursor: pointer; 
}
#leftChoiceItems #setStyle:hover
{
    color:#202020;
}
</style>