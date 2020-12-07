import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/game',
		name: 'Play',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "Game" */ '../views/Game.vue'),
		children: [
			{
				path: 'leaderboards',
				name: 'High Scores',
				component: () =>
					import(
						/* webpackChunkName: "Sortie_Leaderboards" */ '../views/Game/Leaderboards.vue'
					),
			},
			{
				path: 'settings',
				name: 'Settings',
				component: () =>
					import(
						/* webpackChunkName: "Settings" */ '../views/Game/Settings.vue'
					),
			},
			{
				path: 'hangar',
				name: 'Hangar',
				component: () =>
					import(
						/* webpackChunkName: "Hangar" */ '../views/Game/Hangar.vue'
					),
			},
			{
				path: 'launch', // NOTE: WILL BE GAME Launch / PRE FLIGHT
				name: 'Launch',
				component: () =>
					import(
						/* webpackChunkName: "Launch" */ '../views/Game/Launch.vue'
					),
				children: [
					{
						path: ':sortie_id', // NOTE: <<< GAME PLAY
						name: 'Run Sortie',
						component: () =>
							import(
								/* webpackChunkName: "Sortie" */ '../views/Game/Sortie.vue'
							),
					},
				],
			},
			{
				path: 'retro/:sortie_id', // NOTE: WILL BE GAME Launch / PRE FLIGHT
				name: 'Retro',
				component: () =>
					import(
						/* webpackChunkName: "Sortie_Retro" */ '../views/Game/Retro.vue'
					),
			},
		],
	},
	{
		path: '/store',
		name: 'Store',
		component: () =>
			import(/* webpackChunkName: "Store" */ '../views/Store.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
