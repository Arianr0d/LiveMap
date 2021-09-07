<template>
   <div v-if="signIn">
      <form action="POST">
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
         <button type="button" class="button" id="btn">{{ titleName.buttonName }}</button>
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
   form{
      display: flex;
      flex-direction: column;

      width: vw(398);
      height: vw(538);
      background: rgba(65, 62, 62, 0.53);
      border: 1px solid rgba(134, 100, 100, 0.23);
      box-sizing: border-box;
      border-radius: 20px;
      padding: vw(47) vw(63) vw(47) vw(63);
      div{
         margin-bottom: vw(66);
      }

      p{
         width: 100%;
      }
   }
   .inp{
      color: #F5F1F1;
      border-bottom: 4px solid #F4791F;;
   }
</style>