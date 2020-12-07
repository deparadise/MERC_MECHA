import { createStore } from 'vuex';

import PlayerModule from './modules/player';

export default createStore({
	// ROOT
	state: {},
	mutations: {},
	actions: {},

	// MODULES
	modules: {
		player: PlayerModule,
	},
});
