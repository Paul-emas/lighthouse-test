<template lang="html">
	<div class="absolute dropdown bg-neutral-80 shadow-lg -left-28 top-14 rounded-2xl overflow-hidden">
		<div class="px-5 py-5 border-b border-gray-800">
			<UserProfile />
		</div>
		<div class="mt-1.5">
			<a href="#">
				<div class="h-12 flex items-center font-semibold hover:bg-neutral-90 text-gray-200 px-6 w-full">My Games</div>
			</a>
			<a href="#">
				<div class="h-12 flex items-center font-semibold hover:bg-neutral-90 text-gray-200 px-6 w-full">
					Start Live Broadcast
				</div>
			</a>
			<a href="#">
				<div class="h-12 flex items-center font-semibold hover:bg-neutral-90 text-gray-200 px-6 w-full">Profile</div>
			</a>
			<a href="#">
				<div class="h-12 flex items-center font-semibold hover:bg-neutral-90 text-gray-200 px-6 w-full">Setting</div>
			</a>
		</div>
		<div class="py-1.5 border-t border-gray-800">
			<a href="#">
				<div class="h-12 flex items-center font-semibold hover:bg-neutral-90 text-red-600 px-6 w-full">Log Out</div>
			</a>
		</div>
	</div>
</template>

<script>
import UserProfile from './UserProfile.vue';
export default { components: { UserProfile } };
</script>

<style lang="css" scoped>
.dropdown {
	width: 270px;
	height: 340px;
}
</style>
