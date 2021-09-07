<template>
   <div>
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
         default: false
      }
   }
}

</script>

<style scoped>
   * {
      margin: 0;
      padding: 0;
   }
</style>