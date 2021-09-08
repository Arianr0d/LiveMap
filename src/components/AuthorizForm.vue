<template>
   <div>
      <form v-if="!signIn & visible" action="POST">
         <p class="title">Авторизоваться</p>
         <div>
            <input type="login" class="inp" placeholder="Логин"/>
         </div>  
         <div>
            <input type="password" class="inp" placeholder="Пароль"/>
         </div>
         <div>
            <button type="button" class="button" id="btn" @click="visible = false">Войти</button>
         </div>
         <div class="bottom_group">
            <a class="link" href="">Забыли пароль?</a>
            <a class="link" @click="signIn = !signIn">Зарегистрироваться</a>
         </div>
      </form> 
      <form v-if="signIn & visible" action="POST">
         <p class="title">Зарегистрироваться</p>
         <div>
            <input type="login" class="inp" placeholder="Логин"/>
         </div>  
         <div>
            <input type="text" class="inp" placeholder="Почта"/>
         </div>
         <div>
            <input type="password" class="inp" placeholder="Пароль"/>
         </div>
         <div>
            <input type="password" class="inp" placeholder="Подтвердить пароль"/>
         </div>
         <div>
            <button type="button" class="button" id="btn" @click="signIn = !signIn">Зарегистрироваться</button>
         </div>
      </form>    
   </div>
</template>

<script>

export default {
   name: 'AuthorizForm',
   props: {
      signIn: { type: Boolean }
   },
   data() {
      return { visible: true }
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
      cursor: pointer;
   } 

   .link:hover, .link:active {
      color: #000;
   }

   .bottom_group {
      margin-bottom: vw(20);
   }

</style>