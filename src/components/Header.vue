<template>
    <div class="head-content">
        <h1>
            Provtour
        </h1>
        <div>
            <input placeholder="Введите адрес" type="search" v-model="address">
            <button @click="search">пава</button>
        </div>
        <img src="../assets/img/User.svg">
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    export default {
        name: "Header",
        data(){
            return{
                address:''
            }
        },
        methods:{
            ...mapActions(['getCoordbyAddress']),
            async search(){
                let res = await this.getCoordbyAddress(this.address)
                this.$store.commit('setCoord', {lat : res.suggestions[0].data.geo_lat, lon: res.suggestions[0].data.geo_lon});
                //this.$store.commit('setCoord', {lat : 53.32, lon: 32.56});
                //console.log(res.suggestions[0].data)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import 'src/assets/css/function';
    .head-content{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 vw(29) 0 vw(29);
        background: #569E9E;

        h1{
            font-size: vw(46);
        }
        div{
            display: flex;
            flex-direction: row;
            input{
                width: vw(593);
                height: vw(35);
                background: linear-gradient(89.39deg, #F5F1F1 26.9%, rgba(245, 241, 241, 0) 77.46%);
                border-radius: 5px;
                border: none;
                outline: none;
                padding-left: vw(23);
                margin-left: vw(412);
            }

        }
        img{
            width: vw(23.3);
            margin-left: vw(550);
        }
    }
</style>