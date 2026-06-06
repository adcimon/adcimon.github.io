import { html } from '../../html.js';

const professionalProjects = [
	{
		title: 'StudioCall',
		category: 'Application',
		url: 'https://studiocall.brainstorm3d.com',
		image: 'assets/images/projects/studiocall.jpg',
	},
	{
		title: 'Brainstorm SaaS',
		category: 'Application',
		url: 'https://go.brainstorm3d.com',
		image: 'assets/images/projects/brainstorm_saas.png',
	},
	{
		title: 'InfinitySet',
		category: 'Application',
		url: 'https://www.brainstorm3d.com/products/infinityset',
		image: 'assets/images/projects/infinity_set.png',
	},
	{
		title: 'Edison',
		category: 'Application',
		url: 'https://www.brainstorm3d.com/products/edison',
		image: 'assets/images/projects/edison.png',
	},
	{
		title: 'App Template',
		category: 'Template',
		url: 'https://github.com/adcimon/app-template',
		image: 'assets/images/projects/app_template.jpg',
	},
	{
		title: 'Baintex',
		category: 'Application',
		url: 'https://www.baintex.com/',
		image: 'assets/images/projects/baintex_app.jpg',
	},
	{
		title: 'Baintex VR',
		category: 'XR',
		url: 'https://www.youtube.com/watch?v=UE9zPuvrNMo',
		image: 'assets/images/projects/baintex_vr.jpg',
	},
	{
		title: 'Raymarching Library',
		category: 'Library',
		url: 'https://github.com/adcimon/com.adcimon.raymarching',
		image: 'assets/images/projects/raymarching_library.jpg',
	},
];

const personalProjects = [
	{
		title: 'Stylized Foliage',
		category: 'Shader',
		url: 'https://github.com/adcimon/stylized-foliage',
		image: 'assets/images/projects/stylized_foliage.jpg',
	},
	{
		title: 'React Components',
		category: 'Library',
		url: 'https://adcimon.github.io/react-components-template',
		image: 'assets/images/projects/react_components.jpg',
	},
	{
		title: 'Filter Studio',
		category: 'Application',
		url: 'https://github.com/adcimon/filter-studio-release',
		image: 'assets/images/projects/filter_studio.jpg',
	},
	{
		title: 'MoCap VFX',
		category: 'Demo',
		url: 'https://www.youtube.com/watch?v=z2Kst0t0PBA',
		image: 'assets/images/projects/mocap_vfx.jpg',
	},
	{
		title: 'Game Off 2018: The night is dark',
		category: 'Videogame',
		url: 'https://adcimon.github.io/gameoff2018-release/',
		image: 'assets/images/projects/the_night_is_dark.jpg',
	},
	{
		title: 'MDX Importer',
		category: 'Library',
		url: 'https://github.com/adcimon/com.adcimon.mdx-importer',
		image: 'assets/images/projects/mdx_importer.jpg',
	},
	{
		title: 'Bounce Effect',
		category: 'Shader',
		url: 'https://github.com/adcimon/bounce-effect',
		image: 'assets/images/projects/bounce_effect.jpg',
	},
	{
		title: 'Portal Room',
		category: 'Shader',
		url: 'https://github.com/adcimon/portal-room',
		image: 'assets/images/projects/portal_room.jpg',
	},
	{
		title: 'Morph Effect',
		category: 'Shader',
		url: 'https://github.com/adcimon/morph-effect',
		image: 'assets/images/projects/morph_effect.jpg',
	},
];

export function Gallery({ show }) {
	if (!show) {
		return null;
	}

	return html`
		<div>
			<div class="box box-content">
				<div class="pb-0 pb-sm-2">
					<h3 class="title title--h3">Professional</h3>
					<p>Professional work built along my career.</p>
				</div>

				<div class="pb-0">
					<div class="gallery-grid">
						${professionalProjects.map(
							(project) => html`
								<figure
									class="gallery-grid__item"
									key=${project.title}>
									<div class="gallery-grid__image-wrap">
										<a
											href=${project.url}
											target="_blank">
											<img
												class="gallery-grid__image cover"
												src=${project.image} />
										</a>
									</div>
									<figcaption class="gallery-grid__caption">
										<h4 class="title title--h6 gallery-grid__title">${project.title}</h4>
										<span class="gallery-grid__category">${project.category}</span>
									</figcaption>
								</figure>
							`,
						)}
					</div>
				</div>
			</div>

			<br />

			<div class="box box-content">
				<div class="pb-0 pb-sm-2">
					<h3 class="title title--h3">Personal</h3>
					<p>Personal and side projects developed to explore new technologies.</p>
				</div>

				<div class="pb-0">
					<div class="gallery-grid">
						${personalProjects.map(
							(project) => html`
								<figure
									class="gallery-grid__item"
									key=${project.title}>
									<div class="gallery-grid__image-wrap">
										<a
											href=${project.url}
											target="_blank">
											<img
												class="gallery-grid__image cover"
												src=${project.image} />
										</a>
									</div>
									<figcaption class="gallery-grid__caption">
										<h4 class="title title--h6 gallery-grid__title">${project.title}</h4>
										<span class="gallery-grid__category">${project.category}</span>
									</figcaption>
								</figure>
							`,
						)}
					</div>
				</div>
			</div>
		</div>
	`;
}
