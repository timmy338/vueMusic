<template>
  <div id="app">
    <Tab-bar>
      <TabBaritem>
        <div slot="item-text">首頁</div>
      </TabBaritem>      
      <TabBaritem>
        <div slot="item-text">分類</div>
      </TabBaritem>
      <TabBaritem>
        <div slot="item-text">購物車</div>
      </TabBaritem>
      <TabBaritem>
        <div slot="item-text">我的</div>
      </TabBaritem>
    </Tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/tabbar'
  import TabBaritem from './components/tabbar/TabBaritem'

  export default
  {
    name:'App',
    components:
    {
      TabBar,
       TabBaritem
    }
  }
</script>

<style>
  @import "./css/base.css";

</style>
