import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// NOTE: VUE3 UNSUPPORTED
// https://github.com/bootstrap-vue/bootstrap-vue/issues/5196#issuecomment-700426488
import '@babel/polyfill';
import 'mutationobserver-shim';
import './plugins/bootstrap-vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

createApp(App)
	.use(store)
	.use(router)
	.use(BootstrapVue)
	.use(BootstrapVueIcons)
	.mount('#app');
