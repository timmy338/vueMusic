<template>
  <a id="left-list-item" href="javaScript:;">
    <div id="text" @click="itemClick" :class="{isClick:setIsClick()}"><slot name="item-text"></slot></div>
  </a>
</template>

<script>
export default {
  name: "leftListItem",
  props: ["link"],
  data() {
    return {
      current: 0,
    };
  },
    mounted(){
    this.setIsClick();
  },
  methods: {
    itemClick() {
      this.$router.push(this.link);
    },
   setIsClick() {
      return this.$route.path.indexOf(this.link)!==-1;
    },
  },

};
</script>


<style>
#left-list-item {
  display: block;
  margin-top: 3px;
  margin-left: 12px;
  padding-left: 10px;
  width: 166px;
  line-height: 36.8px;
  /*  background-color:rgba(246,246,247) ; */
  color: black;
}

#left-list-item:hover {
  background-color: rgba(246, 246, 247);
}

.isClick {
  font-weight: bolder;
  background-color: rgba(246, 246, 247);
}
</style>