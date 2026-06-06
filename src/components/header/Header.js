import { html } from '../../html.js';

export function Header() {
	return html`
		<header class="header box">
			<div class="header__left">
				<div class="header__photo">
					<img
						class="header__photo-img cover"
						src="assets/images/photo.png" />
				</div>
				<div class="header__base-info">
					<h4 class="title">Adrián Ciborro Montes</h4>
					<div class="status">Software Engineer</div>
					<ul class="header__social">
						<li>
							<a href="https://www.linkedin.com/in/adcimon/">
								<i class="font-icon icon-linkedin"></i>
							</a>
						</li>
						<li>
							<a href="https://github.com/adcimon">
								<i class="font-icon icon-github1"></i>
							</a>
						</li>
						<li>
							<a href="https://youtube.com/@adcimon">
								<i class="font-icon icon-youtube1"></i>
							</a>
						</li>
						<li>
							<a href="mailto: contact.adcimon@gmail.com">
								<i class="font-icon icon-mail"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="header__right">
				<ul class="header__contact">
					<li><span class="overhead">Birthday</span>26 March, 1990</li>
					<li><span class="overhead">Location</span>Valencia, Spain</li>
				</ul>
				<ul class="header__contact">
					<li><span class="overhead">Contact</span>contact.adcimon@gmail.com</li>
				</ul>
			</div>
		</header>
	`;
}
