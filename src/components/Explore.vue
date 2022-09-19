<template lang="html">
	<div class="bg-neutral-90 px-6 pt-2 pb-4 lg:pt-4 lg:pb-7 rounded-2xl shadow-xl explore">
		<div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-x-4 gap-y-6 mt-4">
			<div v-for="item in exploreDataArr" :key="item.id">
				<ExploreCard :title="item.title" :description="item.description" :imageUrl="item.url" />
			</div>
		</div>
	</div>
</template>
<script>
import ExploreCard from './ExploreCard.vue';
import { ExploreMenuData } from '../utils/data';

export default {
	components: { ExploreCard },
	data: function () {
		return {
			exploreDataArr: ExploreMenuData,
		};
	},
};
</script>
<style lang="css">
.explore {
	height: auto;
}

@screen xl {
	.explore {
		height: 475px;
	}
}
</style>
