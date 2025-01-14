import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	modules: [Pagination, Navigation],
	loop: true,
	slidesPerView: 5,
	spaceBetween: 16,
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},

		500: {
			slidesPerView: 3,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1500: {
			slidesPerView: 5,
			spaceBetween: 40,
		},
	},

	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

export default swiper;
