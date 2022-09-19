<template lang="html">
	<div>
		<swiper :slides-per-view="1" :space-between="50" :autoplay="true">
			<swiper-slide
				><div class="rounded-2xl shadow-xl overflow-hidden carousel">
					<img
						src="../assets/images/sliders/slider-bg-01.jpg"
						alt="slider images"
						class="w-full h-full object-cover object-top lg:object-right-top"
					/></div
			></swiper-slide>
			<swiper-slide
				><div class="rounded-2xl shadow-xl overflow-hidden carousel">
					<img
						src="../assets/images/sliders/slider-bg-02.jpg"
						alt="slider images"
						class="w-full h-full object-cover object-top lg:object-right-top"
					/></div
			></swiper-slide>
			<swiper-slide
				><div class="rounded-2xl shadow-xl overflow-hidden carousel">
					<img
						src="../assets/images/sliders/slider-bg-01.png"
						alt="slider images"
						class="w-full h-full object-cover object-top lg:object-right-top"
					/></div
			></swiper-slide>
		</swiper>
	</div>
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
	height: 180px;
}

@screen sm {
	.carousel {
		height: 350px;
	}
}

@screen lg {
	.carousel {
		height: 320px;
	}
}

@screen xl {
	.carousel {
		height: 475px;
	}
}
</style>
