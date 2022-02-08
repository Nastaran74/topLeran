import Vue from 'vue'
import App from './App.vue'

export const BusEvent = new Vue({
    methods: {
        changeAge(age) {
            this.$emit("changeAge", age)
        }
    },
    data() {
        return {
            PublicAge: 100
        }
    },
});
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')