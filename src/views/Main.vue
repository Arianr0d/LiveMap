<template>
    <div class="container">
        <Map class="map"></Map>
        <ButtonFilter class="button-filter"></ButtonFilter>
        <img src="../assets/img/problem.svg" class="problem">
    </div>
</template>

<script>
    import ButtonFilter from "../components/ButtonFilter";
    import Map from "../components/Map"
    export default {
        name: 'Main',
        components:{
           Map,
            ButtonFilter
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
</style>