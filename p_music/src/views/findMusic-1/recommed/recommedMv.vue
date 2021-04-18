<template>
  <div id="recommedMv">
    <div id="title">
      <a href="">推薦MV <i class="fas fa-chevron-right"></i></a>
    </div>
    <div id="recommedMv-mv-div">
      <slot name="recommedMv-mv"></slot>
      </div>
  </div>
</template>
<script>

</script>
<style>
#recommedMv a {
  font-size: 20px;
  color: #373737;
  font-weight: bold;
}
#recommedMv a:hover,
#recommedMv a:hover i {
  color: black;
}
#recommedMv .fa-chevron-right {
  font-size: 15px;
  position: relative;
  bottom: 1px;
  color: #373737;
}

</style>