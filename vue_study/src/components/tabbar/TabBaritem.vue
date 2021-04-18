<template>
    <div class="tab-bar-item">
        <slot name="item-text"></slot>
    </div>
</template>

<script>
    
</script>

<style>
    .tab-bar-item:hover
    {
        color: red;
    }
  .tab-bar-item
  {
    flex:1;
    text-align: center;
    height: 49px;
  }
</style>
