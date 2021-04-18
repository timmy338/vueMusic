<template>
  <div id="singerDiv">
    <div id="singerImage" v-for="(fit, index) in singer" :key="fit + index"  @click="routerClick(fit)">
      <div id="imgDiv"><img :src="fit.picUrl" alt="" /></div>
      <span>{{fit.name}}</span><div id="spanI"><i class="far fa-user"></i></div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  props: ["singer"],
  data() {
    return {};
  },
  components: {},
  methods:{
    routerClick(fit)
    {
       this.$router.push({path : '/clickSingerMenu' , query:{fit}});/* query傳值到移動到的頁面 */
    }
  }
};
</script>
<style>
#singerDiv
{
  width: 750px;
  display:flex;
  flex-wrap: wrap;
  justify-content:  space-between ;

}
#singerImage
{
  position: relative;
}
#singerImage #imgDiv
{
  margin-top: 20px;
  width: 140px;
  height: 140px;
  border-radius: 0.5em;
  overflow: hidden;
  margin-bottom: 10px;
  
}
#singerImage #imgDiv img
{
  width:100%;
  height: 100%;
    cursor: pointer;
}
#singerImage span
{
  display: inline-block;
  width: 100px;
  font-size: 14px;
  color: #373737;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#singerImage span:hover
{
  font-size: 14px;
  color: #000000;
  cursor: pointer;
}
#singerImage #spanI
{
  position: absolute;
  width: 20px;
  height: 20px;
  display:inline-block;
  background-color:#EF4441;
  border-radius: 3em;
  right: 4px;
  bottom: 2px;
}
#singerImage .fa-user
{
  padding: 4px;
  color: whitesmoke;
  font-size: 12px;
  margin-left: 1px;

}
</style>
