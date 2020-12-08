import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

//TODO: Can't use vue-material untill V3 is supported
// https://github.com/vuematerial/vue-material/issues/2277
// import VueMaterial from 'vue-material';

createApp(App)
	.use(store)
	.use(router)
	// .use(VueMaterial)
	.mount('#app');
