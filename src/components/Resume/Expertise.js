import { html } from '../../html.js';

const services = [
	{
		title: 'Web Development',
		icon: 'assets/icons/web_development.svg',
		desc: 'Proficient in full-stack applications, cloud-based architectures and CI/CD workflows with emphasis on performance, reliability, and maintainability.',
	},
	{
		title: 'Artificial Intelligence',
		icon: 'assets/icons/artificial_intelligence.svg',
		desc: 'Exploring how AI can enhance product value and development workflows integrating agent pipelines like STT/LLM/TTS and video pipelines like AI video matting/chroma keying.',
	},
	{
		title: 'Media Streaming',
		icon: 'assets/icons/media_streaming.svg',
		desc: 'Specialized in real-time streaming architectures that achieve low-latency, seamless synchronization, efficient encoding/decoding, and scalability for interactive applications such as live virtual productions and remote collaboration applications.',
	},
	{
		title: 'Computer Graphics',
		icon: 'assets/icons/graphics.svg',
		desc: 'Experienced in designing and developing 3D engines and interactive environments, from real-time rendering pipelines to XR systems.',
	},
];

export function Expertise() {
	return html`
		<div class="mt-1">
			<div class="row">
				${services.map(
					(s) => html`
						<div
							class="col-12 col-lg-6"
							key=${s.title}>
							<div class="case-item">
								<img
									class="case-item-icon"
									src=${s.icon} />
								<div>
									<h3 class="title title-h4">${s.title}</h3>
									<p class="case-item-caption">${s.desc}</p>
								</div>
							</div>
						</div>
					`,
				)}
			</div>
		</div>
	`;
}
