<template>
   <form>
      <div>
         <img src="../assets/img/titleicon.svg">
         <p>Фильтры карты</p>
      </div>
      <div>
         <DropDownListFull :nameSelect="buttonName" :list="listKeyWords"></DropDownListFull>
      </div>
      <div class="button_group">
         <button type="button">Применить</button>
      </div>
   </form>
</template>

<script>
import DropDownListFull from '../components/DropDownListFull.vue'

export default {
   name: 'FiltersMap',
   components: {
      DropDownListFull
   },
   data() {
      return {
         listKeyWords: [
            {id: 1, value: 'грязь'},
            {id: 1, value: 'мусор'},
            {id: 1, value: 'шумно'},
            {id: 1, value: 'светло'},
            {id: 1, value: 'воняет'},
            {id: 1, value: 'бздыхи'}
         ], 
         buttonName: 'выбрать по ключевым словам:'
      }
   }
}
</script>

<style scoped lang="scss">
   @import "src/assets/css/function";

   form {
      position: relative;
      display: flex;
      flex-direction: column;

      font-family: 'Roboto';

      width: vw(334);
      height: vw(254);
      background: #fff;
      border: 1px solid rgba(134, 100, 100, 0.23);
      box-sizing: border-box;
      border-radius: 10px;
      padding: vw(10) vw(20) vw(10) vw(20);

      div {
         display: flex;
         padding-bottom: vw(10);

         img {
            width: vw(41);
            height: vw(41);
         }

         p {
            width: vw(220);
            color: #000;
            font-size: vw(20);
            text-decoration: underline;
            padding: vw(10) vw(15) vw(30) vw(15);
         }
      }
   }

   button {
      width: auto;
      height: vw(36);
      font-size: vw(16);
      color: #000;
      background: transparent;
      border: 2px solid #F4791F;
      box-sizing: border-box;
      border-radius: 5px;
      padding: vw(5);
      margin-left: vw(110);
   }

   button:hover {
      background: #F4791F;
      color: #fff;
   }

   .button_group {
      position: flex;
      margin: vw(40) auto vw(20) vw(80);
   }
</style>