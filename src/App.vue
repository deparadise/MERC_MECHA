<template>
	<div id="nav">
		<div id="site-nav">
			<!-- MAIN -->
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>

		<!-- GAME -->
		<div id="game-nav">
			<router-link to="/game/leaderboards">Leaderboards</router-link> |
			<router-link to="/game/settings">Settings</router-link> |
			<router-link to="/game/hangar">Hangar</router-link> |
			<router-link to="/game/launch">Launch!</router-link>
		</div>

		<div id="store-nav">
			<!-- STORE -->
			<router-link to="/store">Store</router-link>
		</div>
	</div>
	<router-view />
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
