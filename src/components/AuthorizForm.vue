<template>
   <div>
      <form v-if="!signIn" action="POST">
         <p class="title">{{ titleName.titleName }}</p>
         <div class="group">
            <input type="login" class="inp" placeholder="Логин"/>
         </div>  
         <div v-if="signIn" class="group">
            <input type="text" class="inp" placeholder="Почта"/>
         </div>
         <div class="group">
            <input type="password" class="inp" placeholder="Пароль"/>
         </div>
         <div v-if="signIn" class="group">
            <input type="password" class="inp" placeholder="Подтвердить пароль"/>
         </div>
         <div>
            <button type="button" class="button" id="btn">{{ titleName.buttonName }}</button>
         </div>
         <div class="bottom_group" v-if="!signIn">
            <a class="link" href="">Забыли пароль?</a>
            <a class="link" href="">Зарегистрироваться</a>
         </div>
      </form>      
   </div>
</template>

<script>

export default {
   name: 'AuthorizForm',
   props: {
      titleName: { type: Object },
      signIn: {
         type: Boolean,
         //default: false
      }
   }
}

</script>

<style scoped lang="scss">
   @import "src/assets/css/function";
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
   form{
      display: flex;
      flex-direction: column;

      font-family: 'Roboto';

      width: auto;
      height: auto;
      background: rgba(65, 62, 62, 0.53);
      border: 1px solid rgba(134, 100, 100, 0.23);
      box-sizing: border-box;
      border-radius: 20px;
      padding: vw(47) vw(63) vw(57) vw(63);
      div{
         align-items: center;
         text-align: center;
      }

      p{
         width: 100%;
      }
   }

   ::-webkit-input-placeholder { 
      color: #fff;
   }

   .inp{
      width: 90%;
      margin-bottom: vw(35);

      color: #fff;
      font-size: vw(18);
      padding-left: vw(10);
      padding-bottom: vw(3);
      border-bottom: 4px solid #F4791F;
   }

   .title {
      display: flex;
      font-family: 'Roboto Slab';
      font-size: vw(40);
      margin-top: vw(20);
      margin-bottom: vw(85);
   }

   .button {
      background: #F4791F;
      border: 4px solid #F4791F;
      color: #fff;
      font-size: vw(24);
      width: 90%;
      
      padding: 1vh;
      margin-top: vw(35);
      margin-bottom: vw(15);
      cursor: pointer;
   }

   .button:hover {
      background: #ACACAC;
      border: 4px solid #ACACAC;
   }

   .button:active {
      background: #F4791F;
      border: 4px solid #F4791F;
   }

   .link {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      color: #fff;
      text-decoration: none;
      font-size: vw(16);
   } 

   .link:hover, .link:active {
      color: #000;
   }

   .bottom_group {
      margin-bottom: vw(20);
   }

</style>