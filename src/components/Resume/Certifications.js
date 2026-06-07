import { html } from '../../html.js';

export function Certifications() {
	return html`
		<div class="row">
			<div class="col-12">
				<h2 class="title title--h3">
					<img
						class="title-icon"
						src="assets/icons/certifications.svg"
						alt="" />
					Certifications
				</h2>
				<div class="box box__border">
					<div>
						<h4 class="title title--h5 timeline__title">Languages</h4>
						<div class="timeline__period">
							Common European Framework of Reference for Languages (<a
								href="https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions"
								>CEFR</a
							>)
						</div>
						<div>
							<ul>
								<li><strong>English:</strong> C1</li>
								<li><strong>Español / Castellano:</strong> Native</li>
								<li><strong>Valencià / Català:</strong> Native</li>
							</ul>
						</div>
					</div>

					<div>
						<h4 class="title title--h5 timeline__title">
							Development of games for Windows, Mac, Web, iOS and Android with Unity
						</h4>
						<div>
							<a href="https://www.upv.es/en">Universitat Politècnica de València</a>
						</div>
						<div class="timeline__period">2012</div>
						<div>
							<ul>
								<li>
									Advanced course focused on multiplatform development, industry standard workflows
									and modern rendering pipelines.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
}
