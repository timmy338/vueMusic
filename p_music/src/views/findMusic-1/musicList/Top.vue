<template>
  <div id="findMusic-1-musicListTop">
    <div  >
      <img  v-if="musicListTop[0]" :src="musicListTop[0].coverImgUrl" alt="" />
      <div id="limit">
        <div id="title">
          <div><i class="fas fa-crown"></i><span> 精品歌單</span></div>
        </div>
        <div id="name">
          <span v-if="musicListTop[0]">{{ musicListTop[0].name }}</span>
        </div>

        <div id="copywrite">
          <span v-if="musicListTop[0]"> {{ musicListTop[0].copywriter }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["musicListTop"],
  data() {
    return {
     
    };
  },
  components: {},
  mounted() {

  },
  methods: {},
};
</script>
<style>
#findMusic-1-musicListTop {
  width: 763px;
  height: 171px;
  background-color: rgba(0, 0, 0, 0.6);
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  background-image: linear-gradient(
    to bottom right,
    #534b49 5%,
    #826b65 40%,
    #775141 70%
  );
}
#findMusic-1-musicListTop img {
  margin-top: 13.5px;
  margin-left: 13.5px;
  width: 144px;
  height: 144px;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  float: left;
}

#findMusic-1-musicListTop #limit {
  float: left;
  margin-left: 10px;
  margin-top: 35px;
  height: 136px;
}

#findMusic-1-musicListTop #title {
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  border: 2px solid #dea458;
  width: 100px;
  height: 30px;
  line-height: 30px;
  color: #dea458;
  font-size: 14px;
    margin-top: 8px;
}
#findMusic-1-musicListTop #title div {
  margin: auto 10px;

}

#findMusic-1-musicListTop #name {
  display: block;
  width: 250px;
  line-height: 30px;
  color: #fdfdfd;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#findMusic-1-musicListTop #copywrite
{
    display: block;
  width: 400px;
  margin-top: 4px;
  font-size: 12px;
  color: #B6ACA9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
