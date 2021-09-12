<template>
    <div class="container">
        <Map class="map"></Map>
        <img @click="openModalFilter = !openModalFilter" src="../assets/img/Menu.svg" class="button-filter">
        <img @click="openModalProblem = !openModalProblem" src="../assets/img/problem.svg" class="problem">
         <AddProblems v-if="openModalProblem" class="modal__problem"></AddProblems>
         <FiltersMap v-if="openModalFilter" class="modal__filter"></FiltersMap>
    </div>
</template>

<script>
    import AddProblems from "../components/AddProblems"
    import FiltersMap from "../components/FiltersMap.vue"
    import Map from "../components/Map"
    export default {
        name: 'Main',
        components:{
            Map,
            AddProblems,
            FiltersMap
        },
        data() {
           return {
               openModalProblem: false,
               openModalFilter: false
           }
        },
        methods:{
            fun(){
                console.log(1)
            }
        }
    }
</script>

<style scoped lang="scss">
    .container{
        height: 100%;

        .map{
            height: 100%;
        }
        .button-filter{
            position: absolute;
            z-index: 1000;
            top: 10%;
            left: 1%;
        }
    }
    .problem{
        position: absolute;
        z-index: 1000;
        top: 15%;
        left: 1%;
    }
    .modal__filter{
        position: absolute;
        top: 30%;
        left: 41.5%;
        z-index: 1000;
    }
    .modal__problem{
        position: absolute;
        top: 30%;
        left: 41.5%;
        z-index: 1000;
    }
</style>