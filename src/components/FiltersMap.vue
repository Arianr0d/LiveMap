<template>
   <form>
      <div>
         <img src="../assets/img/titleicon.svg">
         <p>Фильтры карты</p>
      </div>
      <div>
         <DropDownListPart :nameSelect="buttonCategory" :list="listCategory"></DropDownListPart>
      </div>
      <div>
         <DropDownListFull :nameSelect="buttonKeyWord" :list="listKeyWord"></DropDownListFull>
      </div>
      <div class="button_group">
         <button type="button">Применить</button>
      </div>
   </form>
</template>

<script>
import DropDownListPart from "../components/DropDownListPart.vue"
import DropDownListFull from '../components/DropDownListFull.vue'

export default {
   name: 'FiltersMap',
   components: {
      DropDownListPart,
      DropDownListFull
   },
   data() {
      return {
         listCategory: [
            {id: 1, value: 'грязь'},
            {id: 2, value: 'мусор'},
            {id: 3, value: 'шумно'},
            {id: 4, value: 'светло'},
            {id: 5, value: 'воняет'},
            {id: 6, value: 'бздыхи'}
         ],
         listKeyWord: [
            {id: 1, value: 'грязь'},
            {id: 2, value: 'мусор'},
            {id: 3, value: 'шумно'},
            {id: 4, value: 'светло'},
            {id: 5, value: 'воняет'},
            {id: 6, value: 'бздыхи'}
         ], 
         buttonCategory: 'категория проблем:',
         buttonKeyWord: 'выбрать по ключевым словам:'
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
         margin-bottom: vw(-5);

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
      margin: vw(15) auto vw(10) vw(80);
   }
</style>