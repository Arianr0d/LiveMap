<template>
    <!--<Map class="map"></Map>-->
</template>

<script>
    //import Map from "../components/map";
    import Map from "../components/map"
    export default {
        name: 'Main',
        components:{
           Map
        }
    }
</script>

<style scoped>
    .map{
        width: 45%;
        height: 32.5vw;
        z-index: 0;
    }
</style>