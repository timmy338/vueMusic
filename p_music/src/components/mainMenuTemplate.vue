<template>
  <div>
    <div id="main-menu-top-div"><slot name="main-menu-top"></slot></div>
    <div id="main-menu-middle-div"><slot name="main-menu-middle"></slot></div>
    <div id="main-menu-last-div"><slot name="main-menu-last"></slot></div>
    <div id="main-menu-extra1-div"><slot name="main-menu-extra1"></slot></div>
    <div id="main-menu-extra2-div"><slot name="main-menu-extra2"></slot></div>
  </div>
</template>

<script>

</script>

<style>

#main-menu-top-div {
  margin-top: 10px;
}
#main-menu-middle-div {
  margin-top: 6px;
}
#main-menu-last-div,#main-menu-extra1-div,#main-menu-extra2-div
{
  margin-top: 30px;
}

</style>