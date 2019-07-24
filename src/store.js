import Vue from 'vue'
import Vuex from 'vuex'
import Constants from './Constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: function(packages) {
      return packages;
    },
    packages: [
      {
        id: '201907210003',
        owner: 'aaa',
        tel: '111',
        status: Constants.status.notDate,
        type: Constants.type.light
      },
      {
        id: '201907210004',
        owner: 'bbb',
        tel: '222',
        status: Constants.status.date,
        dateTime: '2019-07-21 18:30',
        type: Constants.type.medium
      },
      {
        id: '201907210003',
        owner: 'ccc',
        tel: '333',
        status: Constants.status.gone,
        type: Constants.type.heavy
      },
    ]
  },
  getters: {
    getPackages: state => () => {
      return state.filter(state.packages);
    }
  },
  mutations: {
    updateFilter: (state, filter) => {
      state.filter = filter;
    }
  },
  actions: {}
})
