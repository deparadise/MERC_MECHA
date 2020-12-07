<template>
	<div>
		<h1>This will be the Root Game Page (To be Lazy Loaded)</h1>
		<p>Player: {{ playerAlias }}</p>
	</div>

	<router-view />
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		...mapState('player', {
			playerAlias: state => state.alias,
		}),
	},
};
</script>

<style lang="scss" scoped></style>
