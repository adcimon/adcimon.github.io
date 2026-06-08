import { html } from '../../html.js';

export function Banner() {
	React.useEffect(() => {
		const breakpointMd =
			parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-md').trim(), 10) ||
			768;

		const breakpointXl =
			parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-xl').trim(), 10) ||
			1200;

		const shouldLoop = window.innerWidth < breakpointXl;

		const swiper = new Swiper('#banner-swiper', {
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 1500,
			loop: shouldLoop,
			rewind: !shouldLoop,
			autoplay: {
				delay: 6000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				[breakpointMd]: {
					slidesPerView: 2,
					spaceBetween: 0,
				},
				[breakpointXl]: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
			},
		});

		return () => {
			swiper.destroy();
		};
	}, []);

	return html`
		<div
			id="banner-swiper"
			class="swiper header-banner">
			<div class="swiper-wrapper">
				<div
					class="swiper-slide header-banner-image"
					style=${{ backgroundImage: 'url(assets/banners/banner1.png)' }}></div>
				<div
					class="swiper-slide header-banner-image"
					style=${{ backgroundImage: 'url(assets/banners/banner2.png)' }}></div>
				<div
					class="swiper-slide header-banner-image"
					style=${{ backgroundImage: 'url(assets/banners/banner3.png)' }}></div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	`;
}
