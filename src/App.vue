<template>
	<main>
		<Navbar />
		<MoblieNav />
		<Header />
		<Category />
		<Footer />
	</main>
</template>

<script>
import './styles/tailwind.css';

import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import Category from './components/Category.vue';
import Footer from './components/Footer.vue';
import MoblieNav from './components/MoblieNav.vue';

export default {
	name: 'App',
	components: {
		Navbar,
		Header,
		Category,
		Footer,
		MoblieNav,
	},
};
</script>
