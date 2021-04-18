<template>
<div id="singerDiv">
 <div id="choiceDiv">
      <div id="language">
        <i class="fas fa-globe"></i><span class="titleSpan"> 語種:</span
        ><choiceLeftItem  :tag="languageList" :isClick.sync="isClick1" :changeTo.sync="changeTo1" @getSingerDetail="getSingerDetail"></choiceLeftItem>
      </div>
        <div id="themes">
        <i class="fas fa-th-large"></i><span class="titleSpan"> 分類:</span
        ><choiceLeftItem  :tag="classification" :isClick.sync="isClick2" :changeTo.sync="changeTo2" @getSingerDetail="getSingerDetail"> </choiceLeftItem>
      </div>
      <div id="choice">
        <i class="far fa-hand-point-right"></i><span class="titleSpan"> 篩選:</span
        ><choiceLeftItem :tag="english" :isClick.sync="isClick3" :changeTo.sync="changeTo3" @getSingerDetail="getSingerDetail"></choiceLeftItem>
      </div>
    
    </div>
    <router-view :singer="singerDetail"></router-view>
</div>
   
</template>
<script>
import choiceLeftItem from "./choiceItem";
const axios = require("axios");
export default {
   data(){
    return{
      languageList:["全部","华语","欧美","日本","韩国","其他"],
      classification:["全部","男歌手","女歌手","乐队組合"],
      english:["熱門","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"],
      singerDetail:[],
      isClick1: "全部",
      isClick2: "全部",
      isClick3: "熱門",
      changeTo1:"-1",
      changeTo2:"-1",
      changeTo3:"-1",
    }
  },
  components: {
     choiceLeftItem
  },
   mounted(){
     this.getSingerDetail();
  },
  methods:{
    getSingerDetail() {
      var that = this;
      axios.get("http://localhost:3000/artist/list?type="+this.changeTo2+"&area="+this.changeTo1+"&initial="+this.changeTo3).then(
        (res) => {
          /* console.log(res);  */
          that.singerDetail=res.data.artists.slice(0, 10);
        },
        (res) => {}
      );
    },
  }
};
</script>
<style>
#singerDiv #choiceDiv {
  width:740px;
  height: auto;
  float: left;
}
#singerDiv #choiceDiv #language,#singerDiv #choiceDiv #themes,#singerDiv #choiceDiv #choice
{
  width: 740px;
  height: auto;
  margin-top: 10px;
  color:#373737 ;
  float: left;
}
#singerDiv #choiceDiv i
{
  margin-right: 10px;
}
#singerDiv #choiceDiv #language *,#singerDiv #choiceDiv #themes *,#singerDiv #choiceDiv #choice *
{
  line-height: 32px;
  float: left;
}

</style>
