<template>
  <div id="NewCDTag">
    <div id="middleRightDiv">
      <div
        id="left"
        :class="{ setRightDivIsClick: rightClick == 'left' }"
        @click="setIsClick(1)"
      >
        <span>推薦</span>
      </div>
      <div id="right" :class="{ setRightDivIsClick: rightClick == 'right' }" @click="setIsClick(2)">
        <span>全部</span>
      </div>
    </div>

    <router-view :newCDArr="newCDArr"></router-view>
  </div>
</template>
<script>
const axios = require("axios");

export default {
  props: ["newCDArr", "isClickHot", "getNewCD"],
  data() {
    return {
      rightClick: "left",
    };
  },
  components: {},
  mounted() {},
  methods: {
    setIsClick(fit) {
      if (fit == 1) {
        this.rightClick="left";
        this.$emit("update:isClickHot","hot");
      } else {
        this.rightClick="right";
        this.$emit("update:isClickHot","new")
        
      }
      this.$emit("getNewCD");
    },
    
  },
};
</script>
<style>
#NewCDTag #middleRightDiv {
  margin-top: 35px;
  margin-right: 30px;
  float: right;
}
#NewCDTag #middleRightDiv #left {
  display: inline-block;
  font-size: 14px;
  width: auto;
  border-radius: 3em;
  color: #676767;
}
#NewCDTag #middleRightDiv #right {
  margin-left: 10px;
  font-size: 14px;
    border-radius: 3em;
  display: inline-block;
  color: #676767;
}
#NewCDTag #middleRightDiv #right:hover,
#NewCDTag #middleRightDiv #left:hover {
  color: #353535;
}
#NewCDTag #middleRightDiv #left,
#NewCDTag #middleRightDiv #right {
  padding: 4px 12px;
  cursor: pointer;
}
.setRightDivIsClick {
  background-color: #fdf5f5;
  color: #ec4141 !important;
}
</style> 
