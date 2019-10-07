import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import App from '../components/app.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.component('app-component', App)
Vue.component('hello-world-component', HelloWorld)

document.addEventListener('DOMContentLoaded', () => {
	const vueApp = new Vue({
		el: 'div#vue-target',
		vuetify: new Vuetify
	})
})

