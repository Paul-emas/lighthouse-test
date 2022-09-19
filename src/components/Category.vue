<template lang="html">
	<section class="w-full bg-neutral-100 pt-32 pb-56 md:pb-40">
		<div class="container px-4 md:px-10 xl:px-20 mx-auto">
			<div class="text-white text-center font-bold text-2xl md:text-4xl">Top Games Categories</div>
			<p class="text-gray-400 text-sm md:text-base text-center mt-1">Select what interest you</p>
			<div class="flex justify-center mt-5 md:mt-10 gap-x-5">
				<div v-for="menu in menuDataArr" :key="menu.id">
					<CategoryMenu
						:active="activeIndex.id === menu.id"
						:imageUrl="menu.imageUrl"
						:activeImageUrl="menu.activeUrl"
						@click="activeIndex = menu"
					/>
				</div>
			</div>

			<div class="mt-10">
				<CategoryLive />
			</div>
		</div>
	</section>
</template>
<script>
import CategoryMenu from './CategoryMenu.vue';
import CategoryLive from './CategoryLive.vue';

const data = [
	{
		id: '011',
		type: 'live',
		imageUrl: require('../assets/images/categories/category-01-ba.png'),
		activeUrl: require('../assets/images/categories/category-01-active.png'),
	},
	{
		id: '022',
		type: 'sports',
		imageUrl: require('../assets/images/categories/category-02-ba.png'),
		activeUrl: require('../assets/images/categories/category-02-active.png'),
	},
	{
		id: '033',
		type: 'lottery',
		imageUrl: require('../assets/images/categories/category-03-ba.png'),
		activeUrl: require('../assets/images/categories/category-03-active.png'),
	},
	{
		id: '044',
		type: 'poker',
		imageUrl: require('../assets/images/categories/category-04-ba.png'),
		activeUrl: require('../assets/images/categories/category-04-active.png'),
	},
	{
		id: '055',
		type: 'games',
		imageUrl: require('../assets/images/categories/category-05-ba.png'),
		activeUrl: require('../assets/images/categories/category-05-active.png'),
	},
];

export default {
	// eslint-disable-next-line vue/no-unused-components
	components: { CategoryMenu, CategoryLive },
	data: function () {
		return {
			menuDataArr: data,
			activeIndex: data[0],
		};
	},
	mounted() {
		console.log(this.activeIndex);
	},
};
</script>
<style lang=""></style>
