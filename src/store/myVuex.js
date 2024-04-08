import Vue from "vue";
class Store {
    constructor(options) {
        this.vm = new Vue({
            data: {
                state: options.state,
            },
        });
        // 新增getter代码
        let getters = options.getters || {};
        this.getters = {};
        console.log(options);
        Object.keys(getters).forEach((getterName) => {
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                    return getters[getterName](this.state);
                },
            });
            console.log(this.getters);
        });

        //新增mutation代码
        let mutations = options.mutations || {};
        this.mutations = {};
        Object.keys(mutations).forEach((mutationName) => {
            this.mutations[mutationName] = (arg) => {
                mutations[mutationName](this.state, arg);
            };
        });
        //新增action代码
        let actions = options.actions;
        this.actions = {};
        Object.keys(actions).forEach((actionName) => {
            this.actions[actionName] = (arg) => {
                actions[actionName](this, arg);
            };
        });
    }
    dispatch(method, arg) {
        this.actions[method](arg);
    }
    commit = (method, arg) => {
        this.mutations[method](arg);
    }
    get state() {
        return this.vm.state;
    }
}
let install = function (Vue) {
    Vue.mixin({
        beforeCreate() {
            if (this.$options && this.$options.store) {
                // 如果是根组件
                this.$store = this.$options.store;
            } else {
                //如果是子组件
                this.$store = this.$parent && this.$parent.$store;
            }
        },
    });
};

let Vuex = {
    Store,
    install,
};

export default Vuex;
