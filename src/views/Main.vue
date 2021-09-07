<template>
    <Map class="map"></Map>
</template>

<script>
    import Map from "../components/Map"
    export default {
        name: 'Main',
        components:{
           Map
        }
    }
</script>

<style scoped>
    .map{
        height: 100%;
        z-index: 0;
    }
</style>