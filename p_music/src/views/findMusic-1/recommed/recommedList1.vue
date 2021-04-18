<template>
  <div id="recommedList1">
    <div id="title">
      <a href="">推薦歌單 <i class="fas fa-chevron-right"></i></a>
    </div>
    <div id="recommedList1-imageWord-div">
      <slot name="recommedList1-imageWord"></slot>
      </div>
  </div>
</template>
<script>

</script>
<style>
#recommedList1 a {
  font-size: 20px;
  color: #373737;
  font-weight: bold;
}
#recommedList1 a:hover,
#recommedList1 a:hover i {
  color: black;
}
#recommedList1 .fa-chevron-right {
  font-size: 15px;
  position: relative;
  bottom: 1px;
  color: #373737;
}




</style>
