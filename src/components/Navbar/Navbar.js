import { html } from '../../html.js';

export function Navbar({ activeTab, setActiveTab }) {
	const handleTabClick = (e, tabIndex) => {
		e.preventDefault();
		setActiveTab(tabIndex);
	};

	return html`
		<aside
			id="navbar"
			class="col-12 col-md-12 col-lg-2">
			<div class="sidebar box sticky-column">
				<ul class="nav">
					<li class="nav-item">
						<a
							class=${activeTab === 0 ? 'active' : ''}
							href="#"
							role="button"
							onClick=${(e) => handleTabClick(e, 0)}>
							<i class="bi bi-file-earmark-person-fill"></i>Resume
						</a>
					</li>
					<li class="nav-item">
						<a
							class=${activeTab === 1 ? 'active' : ''}
							href="#"
							role="button"
							onClick=${(e) => handleTabClick(e, 1)}>
							<i class="bi bi-images"></i>Gallery
						</a>
					</li>
				</ul>
			</div>
		</aside>
	`;
}
