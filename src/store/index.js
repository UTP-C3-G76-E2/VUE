import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personajes: [],
    municipios: []
  },
  mutations: {
    setPersonajes(state, payload){
      state.personajes = payload;
    },
    setMunicipios(state, payload){
      state.municipios = payload;
    }
  },
  actions: {
    //Acción para llamar los personajes de futurama
    async getPersonajes({commit}){
      const peticion = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
      const data = await peticion.json();
      console.log(data);
      commit('setPersonajes', data)
    },
    //acción para obtener los municipios de colombia
    async getMunicipios({commit}){
      const peticion = await fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json');
      const municipios = await peticion.json();
      commit('setMunicipios', municipios);
    }
  },
  modules: {
  }
})