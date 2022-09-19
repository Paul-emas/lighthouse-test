<template lang="">
	<div class="group border border-transparent hover:border-primary-0 pb-2 rounded-xl ex_card">
		<div v-if="imageUrl" class="lg:h-52 xl:h-36 rounded-xl overflow-hidden">
			<img
				:src="imageUrl ?? ''"
				alt="slider images"
				class="w-full h-full object-cover object-top duration-200 transform"
			/>
		</div>
		<div class="mt-1 ex_info duration-200 transform">
			<div class="text-sm group-hover:text-primary-0 text-white flex items-center">
				<span>{{ title }}</span>
				<span class="px-1 text-xxs bg-yellow-400 ml-0.5 transform scale-75 font-semibold text-white">#New</span>
			</div>
			<div class="text-xxs text-gray-400">{{ description }}</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		imageUrl: String,
		title: String,
		description: String,
	},
};
</script>
<style lang="css">
.ex_card:hover img {
	transform: scale(1.2) translateY(10px);
}

.ex_card:hover .ex_info {
	transform: translateX(10px);
}
</style>
