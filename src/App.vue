<template>
  <div class="main-container">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from "./components/Header";
  export default {
    name:'App',
    components:{
      Header
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rammetto+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
  *{
    padding: 0;
    margin: 0;
  }

  h1{
    font-family: 'Rammetto One';
    color: #FFFFFF;
  }

  p{
    font-family: 'Roboto';
    color: #FFFFFF;
  }
  input{
    font-family: 'Roboto';
    color: #FFFFFF;
    border: none;
    background: none;
    outline: none;
  }
  .main-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
</style>
