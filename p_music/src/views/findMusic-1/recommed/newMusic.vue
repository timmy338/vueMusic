<template>
  <div id="newMusic">
    <div id="title">
      <a href="">最新音樂 <i class="fas fa-chevron-right"></i></a>
    </div>
    <div id="newMusic-songDetails-div">
      <slot name="newMusic-songDetails"></slot>
      </div>
  </div>
</template>
<script>
</script>
<style>
#newMusic a {
  font-size: 20px;
  color: #373737;
  font-weight: bold;
}
#newMusic a:hover,
#newMusic a:hover i {
  color: black;
}
#newMusic .fa-chevron-right {
  font-size: 15px;
  position: relative;
  bottom: 1px;
  color: #373737;
}

</style>