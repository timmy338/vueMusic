<template>
    <div id="left-list">
        <ul>
            <li id="home"><slot name="left-list-first"></slot></li>
            <li><slot></slot></li>
            <li id="left-list-mymusic">我的音樂</li>
            <li id="left-list-middle-li"><slot name="left-list-middle"></slot></li>
            <li id="left-list-musiclist"><a href="" id="musiclist-a">創建的歌單<i class="fas fa-caret-down"></i></a><i class="fas fa-plus"></i></li>
        </ul>
     
    </div>
</template>

<style>
    #left-list
    {
        display: flex;
        width: 200px;
        height: 537.6px;
        background-color:white ;
        border-right: 1px solid rgb(225,225,225);
    }
    #home
     {
         margin-top: 13px;
     }
    #left-list-mymusic
    {
         margin-top: 3px;
         margin-left: 12px;
         padding-left: 10px;
         width: 166px;
         line-height: 34px;
         color:rgb(169,169,169);
         font-size: 8px;
    }

    #left-list-musiclist
    {
         margin-top: 3px;
         margin-left: 12px;
         padding-left: 10px;
         width: 166px;
         line-height: 34px;
         color:rgb(169,169,169);
         font-size: 8px;
    }
      #left-list-musiclist #musiclist-a
      {
          color:rgb(169,169,169) ;      
      }
       #left-list-musiclist #add
       {
           font-size: 20px;
           position: absolute;
           left: 160px;
       }
    #left-list-musiclist .fa-caret-down
    {
        padding-left: 8px;
    }
    #left-list-musiclist .fa-plus
    {
        font-size: 10px;
        margin-left: 65px;
    }
</style>