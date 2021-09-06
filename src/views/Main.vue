<template>
    <Map class="map"></Map>
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
        
        height: 50vw;
        z-index: 0;
    }
</style>