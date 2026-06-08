import { html } from '../../html.js';

export function Banner() {
	React.useEffect(() => {
		const shouldLoop = window.innerWidth < 1200;
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
				768: {
					slidesPerView: 2,
					spaceBetween: 0,
				},
				1200: {
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
