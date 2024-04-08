import Vue from "vue";
import Vuex from "./myVuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        num: 222,
    },
    getters: {
        getNum: (state) => {
            return state.num;
        },
    },
    mutations: {
        incre(state, arg) {
            state.num += arg;
        },
    },
    actions: {
        asyncIncre({ commit }, arg) {
            setTimeout(() => {
                commit("incre", arg);
            }, 1000);
        },
    },
    modules: {},
});
