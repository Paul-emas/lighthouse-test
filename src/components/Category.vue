<template lang="html">
	<section class="w-full bg-neutral-100 pt-32 pb-56 md:pb-40">
		<div class="container px-4 md:px-10 2xl:px-20 mx-auto">
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
import { CategoryMenuData } from '../utils/data';

export default {
	components: { CategoryMenu, CategoryLive },
	data: function () {
		return {
			menuDataArr: CategoryMenuData,
			activeIndex: CategoryMenuData[0],
		};
	},
};
</script>
<style lang=""></style>
