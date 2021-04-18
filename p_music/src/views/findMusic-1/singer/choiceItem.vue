<template>
  <div id="singerChoiceItems">
    <div
      v-for="(fit, index) in tag"
      :key="fit + index"
      id="setStyle"
      @click="clicking(fit)"
    >
      <div :class="{ setDiv: isClick == fit }">
        <span>{{ fit }}</span>
      </div>
      <div id="line"></div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["tag", "isClick","changeTo"],
  data() {
    return {
      change:"",
    };
  },
  methods: {
    clicking(fit) {
      this.$emit("update:isClick", fit);
      this.switchChoice(fit);
     
       this.$emit("update:changeTo", this.change);
       this.$emit('getSingerDetail');
        console.log(this.change);
    },
    switchChoice(fit) {
      if (fit >= "A" && fit <= "Z") {
        this.change=(fit.toLowerCase());
      } else {
        switch (fit) {
          case "熱門":
            this.change = -1;
            break;
          case "全部":
            this.change = -1;
            break;
          case "男歌手":
            this.change = 1;
            break;
          case "女歌手":
            this.change = 2;
            break;
          case "乐队組合":
            this.change = 3;
            break;
          case "其他":
            this.change = 0;
            break;
          case "#":
            this.change = 0;
            break;
          case "华语":
            this.change = 7;
            break;
          case "欧美":
            this.change = 96;
            break;
          case "日本":
            this.change = 8;
            break;
          case "韩国":
            this.change = 16;
            break;
        }
      }
    },
  },
};
</script>

<style>
#singerChoiceItems {
  float: left;
  width: 660px;
  height: auto;
}
#singerChoiceItems #setStyle {
  line-height: 30px;
  font-size: 13px;
  color: #676767;
}
#singerChoiceItems #setStyle:hover {
  color: #202020;
}
#singerChoiceItems #line {
  margin-left: 14px;
  margin-top: 3px;
  width: 1px !important;
  height: 26px;
  background-color: #f2f2f2;
}

#singerChoiceItems #setStyle div {
  width: auto;
  border-radius: 2em;
  cursor: pointer;
  margin-left: 14px;
  
}

#singerChoiceItems #setStyle span {
  padding: 0 10px;
}

.setDiv {
  background-color: #fdf5f5;
  color: #ec4141;
}
</style>