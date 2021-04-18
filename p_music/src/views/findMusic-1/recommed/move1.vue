<template>
  <div id="move1">
    <div id="title">
      <a href="">獨家放送 <i class="fas fa-chevron-right"></i></a>
    </div>
    <div id="move1-image3-div">
      <slot name="move1-image3"></slot>
      </div>
  </div>
</template>
<script>

</script>
<style>
#move1 a {
  font-size: 20px;
  color: #373737;
  font-weight: bold;
}
#move1 a:hover,
#move1 a:hover i {
  color: black;
}
#move1 .fa-chevron-right {
  font-size: 15px;
  position: relative;
  bottom: 1px;
  color: #373737;
}

</style>