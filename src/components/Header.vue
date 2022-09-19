<template lang="html">
	<header class="header__height w-full relative top-16 bg-neutral-100 pt-5 md:pt-10 xl:pt-20">
		<div class="px-4 md:px-10 xl:px-20 mx-auto">
			<div class="grid xl:grid-cols-7 gap-y-6 gap-x-10">
				<div class="xl:col-span-5 overflow-hidden">
					<Carousel />
				</div>
				<div class="xl:col-span-2">
					<Explore />
				</div>
			</div>
		</div>
	</header>
</template>
<script>
import Carousel from './Carousel.vue';
import Explore from './Explore.vue';
export default { components: { Carousel, Explore } };
</script>
