<template>
  <div id="app">
    <div id="tab-bar">
        <slot></slot>
     <!--  <div class="tab-bar-item">首頁</div>
      <div class="tab-bar-item">分類</div>
      <div class="tab-bar-item">購物車</div>
      <div class="tab-bar-item">我的</div> -->
    </div>
  </div>
</template>

<script>

</script>

<style>

  #tab-bar{
    display:flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    right:0;
    left: 0;

  }

 
</style>
