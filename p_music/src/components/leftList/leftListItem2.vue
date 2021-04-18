<template>
    <a id="left-list-item2" href="">
        <div><slot name="item-icon"></slot></div>
        <div id="text"><slot name="item-text"></slot></div>
    </a>
</template>

<style>
     #left-list-item2
     {
       position: relative;
         display: flex;
         margin-top: 2px;
         margin-left: 12px;
         padding-left: 10px;
         width: 166px;
         line-height: 36.8px;
        /*  background-color:rgba(246,246,247) ; */
         color:black;
         
     }
    #left-list-item2 #text 
    {
        position: absolute;
        left: 40px;
    }
      #left-list-item2:hover
      {
          background-color:rgba(246,246,247) ;
      }
</style>