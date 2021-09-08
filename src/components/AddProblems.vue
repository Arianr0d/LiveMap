<template>
   <form>
      <div>
         <img class="group" src="../assets/img/titleicon.svg">
         <p class="group">Добавление проблемы</p>
      </div>
      <div>
         <input type="" class="inp design" placeholder="адрес"/>
         <img src="../assets/img/Flag.svg">
         <!-- выпадающий список -->
      </div>
      <div>
         <input class="inp" placeholder="комментарий"/>
      </div>
      <div class="button_group">
         <button type="button">Отменить</button>
         <button type="button">Добавить</button>
      </div>
   </form>
</template>

<script>

export default {
   name: 'AddProblems'
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
      height: vw(358);
      background: #fff;
      border: 1px solid rgba(134, 100, 100, 0.23);
      box-sizing: border-box;
      border-radius: 10px;
       padding: vw(10) vw(10) vw(10) vw(10);

      img {
         width: vw(41);
         height: vw(41);
      }

      p{
         width: vw(230);
         color: #000;
         font-size: vw(20);
         text-decoration: underline;
      }
   }

   .inp.design {
      width: vw(231);
      height: vw(35);

      font-size: vw(16);
      color: #fff;
      background: rgba(86, 158, 158, 0.86);
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 5px;
      padding-left: vw(10);
   }

   .inp {
      width: vw(286);
      height: vw(35);
      background: rgba(255, 255, 255, 0.86);
      border: 1px solid #569E9E;
      box-sizing: border-box;
      border-radius: 5px;
      color: #569E9E;
      font-size: vw(16);
      padding-left: vw(10);
   }

   .inp::-webkit-input-placeholder { 
      color: #569E9E;
   }

   .inp.design::-webkit-input-placeholder { 
      color: #fff;
   }

   .group {
      display:inline-block;
   }

   button {
      width: vw(93);
      height: vw(36);
      font-size: vw(16);
      color: #000;
      background: transparent;
      border: 2px solid #F4791F;
      box-sizing: border-box;
      border-radius: 5px;
   }
</style>