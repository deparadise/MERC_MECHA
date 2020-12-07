import { createStore } from 'vuex';

import GameSettingsModule from './modules/game_settings';
import PlayerModule from './modules/player';
import FactionsModule from './modules/factions';
import LocationsModule from './modules/locations';
import SortiesModule from './modules/sorties';
import BattleRecordsModule from './modules/battle_records';

export default createStore({
	// ROOT
	state: {},
	mutations: {},
	actions: {},

	// MODULES
	modules: {
		gameSetting: GameSettingsModule,
		player: PlayerModule,
		factions: FactionsModule,
		locations: LocationsModule,
		sorties: SortiesModule,
		battleRecords: BattleRecordsModule,
	},
});
