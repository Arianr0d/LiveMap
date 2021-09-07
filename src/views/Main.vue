<template>
    <div class="container">
        <Map class="map"></Map>
        <ButtonFilter class="button-filter"></ButtonFilter>
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
</style>