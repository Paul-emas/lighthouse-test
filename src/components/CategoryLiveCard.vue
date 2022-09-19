<template lang="html">
	<div>
		<div class="h-44 relative group z-20">
			<div
				class="absolute top-3 left-3 bg-red-600 rounded-md uppercase text-xs font-semibold text-white px-2 py-1 z-10"
			>
				Live
			</div>
			<img :src="imageUrl" alt="live bg images" class="w-full h-full object-cover" />
			<div
				class="opacity-0 group-hover:opacity-100 duration-300 absolute w-full flex items-center justify-center h-full inset-0 bg-black bg-opacity-70"
			>
				<div class="w-full text-center">
					<div class="text-white text-center text-4xl">{{ subscribeCount }} Viewers</div>
					<a href="#" class="text-primary-0 text-sm underline text-center">Watch now</a>
				</div>
			</div>
			<div class="text-white mt-1 truncate font-bold">{{ title }}</div>
			<span class="text-gray-500 text-sm">Live with:</span>
			<div class="flex flex-wrap items-center gap-1.5 mt-1">
				<div
					v-for="host in hosts"
					:key="host.id"
					class="px-2.5 py-1.5 bg-neutral-80 text-xxs text-primary-0 hover:scale-95 duration-200 transform cursor-pointer rounded-md"
				>
					#{{ host.name }}
				</div>
			</div>
			<button class="text-neutral-100 mt-3 rounded block md:hidden py-2 w-full bg-primary-0 font-semibold">
				Watch Now
			</button>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		imageUrl: String,
		subscribeCount: String,
		title: String,
		hosts: Array,
	},
};
</script>
<style lang="css"></style>
