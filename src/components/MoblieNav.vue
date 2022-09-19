<template lang="html">
	<div class="w-full h-16 bottom-3 px-5 fixed md:hidden z-50">
		<div class="px-6 md:px-10 xl:px-20 mx-auto h-full bg-neutral-100 shadow-xl rounded-2xl border-2">
			<div class="flex h-full items-center justify-between">
				<div @click="active = 'home'">
					<font-awesome-icon
						icon="fa-solid fa-bell"
						:class="
							active === 'home'
								? 'text-primary-0 text-xl scale-110 transform duration-150'
								: 'text-xl scale-90 transform text-gray-400'
						"
					/>
				</div>
				<div @click="active = 'gift'">
					<font-awesome-icon
						icon="fa-solid fa-gift"
						:class="
							active === 'gift'
								? 'text-primary-0 text-xl scale-110 transform duration-150'
								: 'text-xl scale-90 transform text-gray-400'
						"
					/>
				</div>
				<div @click="active = 'bag'">
					<font-awesome-icon
						icon="fa-solid fa-sack-dollar"
						:class="
							active === 'bag'
								? 'text-primary-0 text-xl scale-110 transform duration-150'
								: 'text-xl scale-90 transform text-gray-400'
						"
					/>
				</div>
				<div @click="active = 'message'">
					<font-awesome-icon
						icon="fa-solid fa-message"
						:class="
							active === 'message'
								? 'text-primary-0 text-xl scale-110 transform duration-150'
								: 'text-xl scale-90 transform text-gray-400'
						"
					/>
				</div>
				<div @click="active = 'setting'">
					<font-awesome-icon
						icon="fa-solid fa-cog"
						:class="
							active === 'setting'
								? 'text-primary-0 text-xl scale-110 transform duration-150'
								: 'text-xl scale-90 transform text-gray-400'
						"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: function () {
		return {
			active: 'home',
		};
	},
};
</script>
<style lang=""></style>
