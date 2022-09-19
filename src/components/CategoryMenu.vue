<template lang="">
	<div class="overflow-hidden cursor-pointer">
		<img v-if="active" :src="activeImageUrl" alt="Live enabled" width="70" height="70" />
		<img v-else :src="imageUrl" alt="Live enabled" width="70" height="70" />
	</div>
</template>
<script>
export default {
	props: {
		imageUrl: String,
		activeImageUrl: String,
		active: Boolean,
	},
};
</script>
<style lang=""></style>
