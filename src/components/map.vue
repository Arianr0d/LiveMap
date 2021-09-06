<template>
  <div>
    <p>{{address}}</p>
    <l-map
            ref="myMap"
            :zoom="geoData.zoom"
            :center="geoData.center"
            :options="geoData.mapOptions"
            @update:zoom="zoomUpdate"
            @mouseout="mouseOut"
            @click="mapClick"
    >
      <l-tile-layer
              :url="geoData.url"
              :attribution="geoData.attribution"
      />

      <l-marker
              :visible="marker.visible"
              :draggable="marker.draggable"
              :options="optionsMarket"
              :lat-lng="marker.position"
              :icon="icon"
              :autoPan="marker.autoPan"
              :autoPanSpeed="marker.autoPanSpeed"
              @mousedown="markerClick"
              @mouseup="updateCoordinates"
              @mouseover="mouseOver"
      >
      </l-marker>

    </l-map>


  </div>
</template>

<script>

  import {latLng} from "leaflet";
  import {LMap, LTileLayer, LMarker, LPopup, LTooltip, LGeoJson} from "vue2-leaflet";
  import LeafletMarkercluster from "../components/LeafletMarkercluster";

  import 'leaflet/dist/leaflet.css';
  import "leaflet.markercluster/dist/MarkerCluster.css";
  import "leaflet.markercluster/dist/MarkerCluster.Default.css";

  export default {
    name: 'Map',
    props:{
      coord_map:{
        type:Object
      },
      checkSelect:{
        type: Boolean
      }
    },
    mounted() {
      setTimeout(() => {
        this.$refs.myMap.mapObject.invalidateSize();
      }, 0);
    },
    methods: {
      mouseOut() {
        this.marker.draggable = false
        this.marker.autoPan = false
        this.marker.autoPanSpeed = 0
      },
      mouseOver() {
        this.marker.draggable = true
        this.marker.autoPan = true
      },
      async mapClick(event){
        this.marker.position.lat = event.latlng.lat
        this.marker.position.lng = event.latlng.lng
        console.log(event.latlng.lat, event.latlng.lng)
        this.marker.visible = true
        this.updateCoordinates(event)
      },
      async updateCoordinates(event) {
        this.updateCenter(event)
        //await this.getAddressByCoords( {lat :event.latlng.lat, lon :event.latlng.lng})
        //this.$emit('addCoords', event.latlng.lat, event.latlng.lng)
      },
      updateCenter(event) {
        this.geoData.center = event.latlng
      },
      markerClick(e) {
        this.marker.autoPanSpeed = 13
      },
      zoomUpdate(zoom) {
        this.geoData.currentZoom = zoom;
      },
    },
    data() {
      return {
        addressList: [],//координаты и адреса
        address: "",
        marker: {
          id: 1,
          position: {lat: 52.613, lng: 39.5974},
          draggable: false,
          visible: false,
          autoPan: false,
          autoPanSpeed: 13,
        },

        icon: L.icon({
          iconUrl: require('@/assets/img/pin1.svg'),
          iconSize: [40, 40],
          iconAnchor: [16, 37]
        }),

        geoData: {
          zoom: 15,
          center: latLng(52.6130549393468, 39.59747314453126),
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution:
                  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          currentZoom: 11.5,
          showParagraph: false,
          mapOptions: {
            zoomSnap: 0.5
          },
          showMap: true,
          fillColor: "#e4ce7f",
          enableTooltip: false,
        },
      }
    },
    computed: {
      optionsMarket() {
        return {
          draggable: this.marker.draggable,
          autoPan: this.marker.autoPan,
          autoPanSpeed: this.marker.autoPanSpeed,
          autoPanPadding: [150, 150]
        }
      },
    },
    watch:{
      'coord_map.lat':function (newVal, oldVal) {
        this.marker.position.lat = newVal
      },
      'coord_map.lng':function (newVal, oldVal) {
        this.marker.position.lng = newVal
        this.marker.visible = true
        this.geoData.center = this.marker.position
      },
      checkSelect:function (newVal, oldVal) {
        this.marker.visible = newVal
      }
    },
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LTooltip,
      LGeoJson,
      'v-marker-cluster': LeafletMarkercluster,
    }
  }
</script>

<style scoped>

</style>