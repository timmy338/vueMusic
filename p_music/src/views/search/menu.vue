<template>
<div id="search-div">
  <p id="count">找到{{searchResult.length}}首單曲</p>
   <searchEverTop ></searchEverTop>
   <router-view :searchResult="searchResult" :bestSearch="bestSearch"></router-view>
</div>

</template>

<script>
import searchEverTop from "./searchEverTop";

export default {
  name: "Search",
  props:["searchResult","bestSearch"],
  components: {
    searchEverTop
  },
  data(){
    return{
  
    }
  },

};
</script>

<style>
#search-div
{
  width: 820.5px;
  height: 537.6px;
  overflow: auto;
}

#search-div::-webkit-scrollbar {
  width: 0px;
}

#search-div #count
{
  padding-left: 32px;
  padding-top: 32px;
  font-weight: bold;
}
</style>