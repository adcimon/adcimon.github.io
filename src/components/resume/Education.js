import { html } from '../../html.js';

const educationHistory = [
	{
		title: "Master's Degree in Secondary Education Teaching",
		institution: 'Universitat de València',
		institutionUrl: 'https://www.uv.es/',
		period: '2022 — 2023',
		bullets: [
			html`<strong>Specialization:</strong> Computer Science and Electronic Systems.`
		]
	},
	{
		title: "Master's Degree in Artificial Intelligence, Pattern Recognition and Digital Imaging",
		institution: 'Universitat Politècnica de València',
		institutionUrl: 'https://www.upv.es/titulaciones/MUIARFID/',
		period: '2016 — 2017',
		bullets: [
			html`<strong>Final project:</strong>${' '}<a href="https://riunet.upv.es/entities/publication/07441873-f96d-4b3f-af05-326111983bb8">Rendering of distance functions using raymarching in Unity</a>${' '}(<a href="https://github.com/adcimon/com.adcimon.raymarching"><i class="font-icon icon-github1"></i></a>).`,
			html`Artificial intelligence, machine learning and deep learning.`,
			html`Computer graphics, game engines and mixed reality.`
		]
	},
	{
		title: "Computer Engineering",
		institution: 'Universitat Politècnica de València',
		institutionUrl: 'https://www.upv.es/en',
		period: '2008 — 2015',
		bullets: [
			html`<strong>Final Project:</strong>${' '}<a href="https://riunet.upv.es/entities/publication/15590867-9786-4027-ac93-c72e2a87f057">Development of a cross-platform game with augmented reality in Unity</a>.`,
			html`<strong>Specialization:</strong> Computer graphics, computer vision and robotics.`,
			html`
				<div><strong>(2014) Erasmus</strong></div>
				<div><a href="https://www.sdu.dk/en">Syddansk Universitet</a></div>
				<div>Game design and programming, .NET and Android.</div>
			`,
			html`
				<div><strong>(2013) Erasmus Intensive Program: Human-Machine Interaction</strong></div>
				<div><a href="https://www.univ-reims.eu/">Université de Reims-Champagne-Ardenne</a></div>
				<div>Design and simulation of a robotic system made for the handling and storage of champagne bottles in the cellars using 3D software and SCADA systems.</div>
			`
		]
	}
];

export function Education() {
	return html`
		<div class="row">
			<div class="col-12">
				<h2 class="title title--h3">
					<img
						class="title-icon"
						src="assets/images/icons/education.svg"
						alt="" />
					Education
				</h2>
				<div class="timeline">
					${educationHistory.map((edu, idx) => html`
						<article class="timeline__item" key=${idx}>
							<h5 class="title title--h5 timeline__title">${edu.title}</h5>
							<div>
								<a href=${edu.institutionUrl}>${edu.institution}</a>
							</div>
							<div class="timeline__period">${edu.period}</div>
							<div class="timeline__description">
								<ul>
									${edu.bullets.map((bullet, bIdx) => html`
										<li key=${bIdx}>${bullet}</li>
									`)}
								</ul>
							</div>
						</article>
					`)}
				</div>
			</div>
		</div>
	`;
}
