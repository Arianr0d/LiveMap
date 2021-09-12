<template>
   <div>
      <div>
         <input id="inp" type="text" :placeholder="nameSelect" @click="openList = !openList">
      </div>
      <div>
         <img v-if="!openList" src="../assets/img/arrowDown.svg" @click="openList = !openList">
         <img v-else src="../assets/img/ArrowUp.svg" @click="openList = !openList">
      </div>
      <select name="dropDown" id="ddl" v-if="openList" multiple>
         <option v-for="item in list" :key="item.id" v-text="item.value"/>
      </select>
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

      select {
         position: absolute;
         margin-top: vw(40);

         width: vw(287);
         font-family: 'Roboto';
         font-size: vw(16);
         border: 1px solid #569E9E;
      }  

      option {
         height: vw(30);
         width: vw(287);
         background: #fff;
         border: 1px solid #569E9E;
         padding-left: vw(10);
         color: #569E9E;
         vertical-align: center;
         padding-top: vw(8);
      }

      option:hover {
         background: #C6C6C6;
         color: #fff;
      }

      option:focus {
         background: #569E9E;
         color: #fff;
      }
   }

</style>