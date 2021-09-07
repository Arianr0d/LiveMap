import Vue from 'vue'
import Vuex from 'vuex'
import api from "../../fetch/api";
Vue.use(Vuex)

export default{
    state: {
        coords:{
            lat: '54',
            lon: '54'
        }
    },
    actions: {
        async getCoordbyAddress(ctx, address){
            try {
                //let url = `https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address`
                let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address"
                let res = await api(url, 'POST', address)
                return res
            }
            catch (e) {
                return e.message
            }
        },
    },
    mutations: {
        setCoord (state, coord) {
            state.coords = coord
            console.log(state.coords)
        }
    }
}
