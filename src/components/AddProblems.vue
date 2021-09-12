<template>
   <form>
      <div>
         <img src="../assets/img/titleicon.svg">
         <p>Добавление проблемы</p>
      </div>
      <div>
         <input v-model="address" type="text" class="inp design" placeholder="адрес"/>
         <img class="inp design f_btn" src="../assets/img/Flag.svg">
      </div>
      <div>
         <drop-down-list-full :list="list" :nameSelect="nameSelect" ></drop-down-list-full>
      </div>
      <div>
         <textarea v-model="comment" class="inp com" placeholder="комментарий"/>
      </div>
      <div class="button_group">
         <button type="button" @click="close">Отменить</button>
         <button @click="addProblem" type="button">Добавить</button>
      </div>
   </form>
</template>

<script>
   import {mapActions, mapState} from 'vuex';
   import DropDownListFull from "./DropDownListFull";
export default {
   name: 'AddProblems',
   data(){
     return{
        address: '',
        comment: '',
        nameSelect: "проблемы",
        list:[{value: 'грязь', id:1},{value: 'толпа', id:2},
        {value: 'шумно', id:3},{value: 'воняет', id:4}],
        isActive: false
     }
   },
   components:{
     DropDownListFull
   },
   methods:{
      ...mapActions(['getCoordbyAddressProblem']),
      async addProblem(){
         let res = await this.getCoordbyAddressProblem(this.address)
         let icon = L.icon({
            iconUrl: require('@/assets/img/pin1.svg'),
            iconSize: [40, 40],
            iconAnchor: [16, 37]
         })
         this.$store.commit('setCoordsProblem', {
            position:{lat : res.suggestions[0].data.geo_lat, lng: res.suggestions[0].data.geo_lon},
            draggable: false,
            visible: true,
            autoPan: false,
            autoPanSpeed: 13,
            comment: this.comment,
            icon: icon})
         this.$emit('close')
      },
      close(){
         this.$emit('close')
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
      background: #fff;
      border: 1px solid rgba(134, 100, 100, 0.23);
      box-sizing: border-box;
      border-radius: 10px;
      padding: vw(10) vw(20) vw(10) vw(20);

      div {
         display: flex;
         padding-bottom: vw(10);
      }

      img {
         width: vw(41);
         height: vw(41);
      }

      p{
         width: vw(220);
         color: #000;
         font-size: vw(20);
         text-decoration: underline;
         padding: vw(10) vw(15) vw(30) vw(15);
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

   .inp.com {
      width: vw(286);
      height: vw(100);
      background: rgba(255, 255, 255, 0.86);
      border: 1px solid #569E9E;
      box-sizing: border-box;
      border-radius: 5px;
      font-size: vw(16);
      padding-left: vw(10);
      outline: none;
      margin-top: vw(20);
   }

   .inp::-webkit-input-placeholder { 
      color: #569E9E;
   }

   .inp.design::-webkit-input-placeholder { 
      color: #fff;
   }

   .inp.design.f_btn {
      margin-left: vw(10);
      width: vw(40);
      display:inline-block;
      padding-right: vw(5);
   }

   .inp.design.f_btn:hover {
      background: #fff;
   }

   .img {
      border: 1px solid #000000;
      background: rgba(86, 158, 158, 0.86);
      border-radius: 5px;
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
      margin-left: vw(10);
   }

   button:hover {
      background: #F4791F;
      color: #fff;
   }

   .button_group {
      margin: vw(40) auto vw(20) vw(80);
   }

</style>