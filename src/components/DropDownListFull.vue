<template>
   <div>
      <div>
         <input id="inp" type="text" :placeholder="nameSelect" @click="openList = !openList">
      </div>
      <div>
         <img v-if="!openList" src="../assets/img/arrowDown.svg" @click="openList = !openList">
         <img v-else src="../assets/img/ArrowUp.svg" @click="openList = !openList">
      </div>
      <ul v-if="openList">
         <li v-for="item in list" :key="item.id">{{ item.value }}</li>
      </ul>
   </div>
</template>

<script>

export default {
   name: 'DropDownListFull',
   props: {
      list: {
         type: Array,
         default() { return [] }
      },
      nameSelect: { type: String }
   },
   data() {
      return {
         openList: false
      }
   }
}
</script>

<style scoped lang="scss">
   @import "src/assets/css/function";

   div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-bottom: vw(2);

      div {
         display: inline-block;
         justify-content: space-between;
         flex-direction: row;

      }

      input {
            height: vw(35);
            width: vw(275); //vw(275);
            color: #569E9E;
            background: #fff;
            border: 1px solid #569E9E;
            padding-left: vw(10);
            font-size: vw(16);
            border-radius: 5px;
            margin-bottom: vw(5);
            }

      input::-webkit-input-placeholder { 
         color: #569E9E;
      }

      img {
         margin-left: vw(-25);
         margin-top: vw(13);
         width: vw(18);
         height: vw(10);
      }

      ul {
         position: absolute;
         margin-top: vw(40);
         list-style-type: none;
         overflow: auto;

         width: vw(286);
         max-height: vw(119);
         font-family: 'Roboto';
         font-size: vw(16);
         border: 1px solid #569E9E;
      }

      ul::-webkit-scrollbar-thumb {
         width: vw(16);
         
      }

      li {
         height: vw(30);
         width: vw(274);
         background: #fff;
         border: 1px solid #569E9E;
         padding-left: vw(10);
         color: #569E9E;
         vertical-align: middle;
         padding-top: vw(8);
      }

      li:hover {
         background: #C6C6C6;
         color: #fff;
      }

      .active {
         background: #569E9E;
         color: #fff;
      }
   }
</style>