import { html } from '../../html.js';

export function Header({ theme, toggleTheme }) {
	return html`
		<header class="header box">
			<button
				class="theme-toggle"
				onClick=${toggleTheme}
				aria-label="Toggle theme">
				<i class=${theme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'}></i>
			</button>
			<div class="header-left">
				<div class="header-photo">
					<img
						class="header-photo-img cover"
						src="assets/photo.png" />
				</div>
				<div class="header-base-info">
					<h4 class="title">Adrián Ciborro Montes</h4>
					<div class="status">Software Engineer</div>
					<ul class="header-social">
						<li>
							<a href="https://www.linkedin.com/in/adcimon/">
								<i class="bi bi-linkedin"></i>
							</a>
						</li>
						<li>
							<a href="https://github.com/adcimon">
								<i class="bi bi-github"></i>
							</a>
						</li>
						<li>
							<a href="https://youtube.com/@adcimon">
								<i class="bi bi-youtube"></i>
							</a>
						</li>
						<li>
							<a href="mailto: contact.adcimon@gmail.com">
								<i class="bi bi-envelope-fill"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="header-right">
				<ul class="header-contact">
					<li><span class="overhead">Birthday</span>26 March, 1990</li>
					<li><span class="overhead">Location</span>Valencia, Spain</li>
				</ul>
				<ul class="header-contact">
					<li><span class="overhead">Contact</span>contact.adcimon@gmail.com</li>
				</ul>
			</div>
		</header>
	`;
}
