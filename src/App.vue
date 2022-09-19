<template>
	<main>
		<Navbar />
		<Header />
		<Category />
	</main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';

import './styles/tailwind.css';
import Category from './components/Category.vue';

export default {
	name: 'App',
	components: {
		Navbar,
		Header,
		Category,
	},
};
</script>
