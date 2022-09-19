<template lang="html">
	<header class="header__height w-full relative top-16 bg-neutral-100 pt-20">
		<div class="container 2xl:px-20 mx-auto">
			<div class="grid grid-cols-7 gap-x-10">
				<div class="col-span-5">
					<swiper :slides-per-view="1" :space-between="50" :autoplay="true">
						<swiper-slide
							><div class="rounded-2xl shadow-xl overflow-hidden carousel">
								<img
									src="../assets/images/sliders/slider-bg-01.jpg"
									alt="slider images"
									class="w-full h-full object-cover object-right-top"
								/></div
						></swiper-slide>
						<swiper-slide
							><div class="rounded-2xl shadow-xl overflow-hidden carousel">
								<img
									src="../assets/images/sliders/slider-bg-01.png"
									alt="slider images"
									class="w-full h-full object-cover object-right-top"
								/></div
						></swiper-slide>
						<swiper-slide
							><div class="rounded-2xl shadow-xl overflow-hidden carousel">
								<img
									src="../assets/images/sliders/slider-bg-01.png"
									alt="slider images"
									class="w-full h-full object-cover object-right-top"
								/></div
						></swiper-slide>
					</swiper>
				</div>
				<div class="col-span-2 bg-neutral-90 px-6 pb-5 rounded-2xl shadow-xl">
					<div class="bg-neutral-80 py-2.5 font-bold rounded-full text-center text-primary-0 text-sm w-44 mt-6">
						Explore Hot Games
					</div>
					<div class="grid grid-cols-2 gap-4 mt-4">
						<div class="group">
							<div class="h-40 rounded-xl overflow-hidden border border-transparent hover:border-primary-0">
								<img
									src="../assets/images/game-bg.jpg"
									alt="slider images"
									class="w-full h-full object-cover object-top hover:scale-125 duration-200 transform"
								/>
							</div>
							<div class="text-sm group-hover:text-primary-0 mt-1 text-white">Black jack</div>
							<div class="text-xxs text-gray-400">Games are fun</div>
						</div>
						<div class="group">
							<div class="h-40 rounded-xl overflow-hidden border border-transparent hover:border-primary-0">
								<img
									src="../assets/images/game-bg-2.jpg"
									alt="slider images"
									class="w-full h-full object-cover object-top hover:scale-125 duration-200 transform"
								/>
							</div>
							<div class="text-sm group-hover:text-primary-0 mt-1 text-white">Black jack</div>
							<div class="text-xxs text-gray-400">Games are fun</div>
						</div>
						<div class="group">
							<div class="h-40 rounded-xl overflow-hidden border border-transparent hover:border-primary-0">
								<img
									src="../assets/images/game-bg-3.jpg"
									alt="slider images"
									class="w-full h-full object-cover object-top hover:scale-125 duration-200 transform"
								/>
							</div>
							<div class="text-sm group-hover:text-primary-0 mt-1 text-white">Black jack</div>
							<div class="text-xxs text-gray-400">Games are fun</div>
						</div>
						<div class="group">
							<div class="h-40 rounded-xl overflow-hidden border border-transparent hover:border-primary-0">
								<img
									src="../assets/images/game-bg-4.jpg"
									alt="slider images"
									class="w-full h-full object-cover object-top hover:scale-125 duration-200 transform"
								/>
							</div>
							<div class="text-sm group-hover:text-primary-0 mt-1 text-white">Black jack</div>
							<div class="text-xxs text-gray-400">Games are fun</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper-bundle.css';

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
};
</script>
<style lang="css">
.carousel {
	height: 520px;
}
</style>
