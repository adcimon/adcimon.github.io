import { html } from '../html.js';
import { Banner } from './banner/Banner.js';
import { Header } from './header/Header.js';
import { Navbar } from './navbar/Navbar.js';
import { Resume } from './resume/Resume.js';
import { Gallery } from './gallery/Gallery.js';

export function App() {
	const params = new URLSearchParams(window.location.search);
	const isCV = params.has('cv');

	const [nav, setNav] = React.useState(0);
	const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');

	React.useEffect(() => {
		if (theme === 'light') {
			document.body.className = 'theme-light';
		} else {
			document.body.className = 'theme-dark';
		}
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => {
			if (prev === 'light') {
				return 'dark';
			} else {
				return 'light';
			}
		});
	};

	return html`
		<main>
			<${Banner} />

			<div class="container gutter-top">
				<${Header}
					theme=${theme}
					toggleTheme=${toggleTheme} />

				<div class="row sticky-parent">
					${!isCV
						? html`<${Navbar}
								activeTab=${nav}
								setActiveTab=${setNav} />`
						: null}

					<div
						id="sections"
						class=${isCV ? 'col-12 col-md-12 col-lg-12' : 'col-12 col-md-12 col-lg-10'}>
						<${Resume} show=${nav === 0} />
						<${Gallery} show=${nav === 1} />
					</div>
				</div>

				<footer></footer>
			</div>
		</main>
	`;
}
