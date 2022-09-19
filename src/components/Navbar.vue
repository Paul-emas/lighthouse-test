<template>
	<nav class="w-full fixed z-50 inset-0 h-16 bg-neutral-100 flex items-center shadow">
		<div class="container px-4 md:px-10 2xl:px-20 mx-auto">
			<div class="flex items-center justify-between">
				<div class="">
					<img src="../assets/images/logo.png" alt="Lighthouse test logo" class="w-[100px] h-10" />
				</div>
				<div class="flex items-center">
					<div class="relative">
						<div
							class="w-3.5 h-3.5 rounded-full text-center absolute bg-red-600 -right-1 flex items-center justify-center text-white font-semibold text-xxs"
						>
							5
						</div>
						<font-awesome-icon icon="fa-solid fa-bell" class="text-primary-0 text-2xl" />
					</div>
					<font-awesome-icon icon="fa-solid fa-gift" class="text-primary-0 text-2xl hidden md:block mx-4 gift" />
					<font-awesome-icon icon="fa-solid fa-sack-dollar" class="text-primary-0 text-2xl hidden md:block" />
					<div class="mx-4 w-1 h-5 border-l border-gray-400"></div>
					<div class="relative nav_profile">
						<div class="invisible nav_dropdown opacity-0 duration-200">
							<NavbarDropdown />
						</div>
						<div class="flex items-center gap-x-2 relative">
							<div class="w-9 h-9 rounded-full bg-gray-700 border overflow-hidden">
								<img src="../assets/images/avatar.webp" alt="User profile image" />
							</div>
							<div class="hidden lg:block">
								<div class="text-white text-sm">Paul Emas</div>
								<div class="text-primary-0 text-xxs">emaspaul1526@gmail.com</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
import NavbarDropdown from './NavbarDropdown.vue';
export default { components: { NavbarDropdown } };
</script>

<style scoped>
.gift:hover {
	animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	transform: translate3d(0, 0, 0);
	backface-visibility: hidden;
	perspective: 1000px;
}

@keyframes shake {
	10%,
	90% {
		transform: translate3d(-1px, 0, 0);
	}

	20%,
	80% {
		transform: translate3d(2px, 0, 0);
	}

	30%,
	50%,
	70% {
		transform: translate3d(-1px, 0, 0);
	}

	40%,
	60% {
		transform: translate3d(1px, 0, 0);
	}
}

.nav_profile:hover .nav_dropdown {
	visibility: visible;
	opacity: 100;
}
</style>
