<template lang="html">
	<div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-48 md:gap-y-36">
		<div v-for="menu in menuArr" :key="menu.id">
			<CategoryLiveCard
				:title="menu.title"
				:imageUrl="menu.imageUrl"
				:hosts="menu.hosts"
				:subscribeCount="menu.viewers"
			/>
		</div>
	</div>
</template>
<script>
import CategoryLiveCard from './CategoryLiveCard.vue';
import { LiveMenuData } from '../utils/data';

export default {
	components: { CategoryLiveCard },
	data: function () {
		return {
			menuArr: LiveMenuData,
		};
	},
};
</script>
<style lang=""></style>
