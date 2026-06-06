import { html } from '../html.js';
import { Header } from './header/Header.js';
import { Navbar } from './navbar/Navbar.js';
import { Resume } from './resume/Resume.js';
import { Gallery } from './gallery/Gallery.js';

const { useState } = React;

export function App() {
	const [nav, setNav] = useState(0);

	const params = new URLSearchParams(window.location.search);
	const isCVMode = params.has('cv');

	return html`
		<main>
			<div id="banner" class="header-banner">
				<div
					class="header-banner__image"
					style=${{ backgroundImage: 'url(assets/images/banners/banner1.png)' }}></div>
				<div
					class="header-banner__image"
					style=${{ backgroundImage: 'url(assets/images/banners/banner2.png)' }}></div>
				<div
					class="header-banner__image"
					style=${{ backgroundImage: 'url(assets/images/banners/banner3.png)' }}></div>
			</div>

			<div class="container gutter-top">
				<${Header} />

				<div class="row sticky-parent">
					${!isCVMode ? html`<${Navbar} activeTab=${nav} setActiveTab=${setNav} />` : null}

					<div id="sections" class=${isCVMode ? 'col-12 col-md-12 col-lg-12' : 'col-12 col-md-12 col-lg-10'}>
						<${Resume} show=${nav === 0} />
						<${Gallery} show=${nav === 1} />
					</div>
				</div>

				<footer></footer>
			</div>
		</main>
	`;
}
