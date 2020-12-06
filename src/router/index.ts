import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Settings from '../views/Settings.vue';
import About from '../views/About.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/leaderboards',
		name: 'High Scores',
		component: () =>
			import(
				/* webpackChunkName: "Sortie_Leaderboards" */ '../views/Leaderboards.vue'
			),
	},
	{
		path: '/store',
		name: 'store',
		component: () =>
			import(/* webpackChunkName: "Store" */ '../views/Store.vue'),
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
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
