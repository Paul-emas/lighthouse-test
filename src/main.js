import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBell, faGift, faChevronDown, faSackDollar, faMessage, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faBell, faGift, faChevronDown, faSackDollar, faMessage, faCog);

import './styles/main.css';
import './styles/tailwind.css';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
