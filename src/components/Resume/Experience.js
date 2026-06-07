import { html } from '../../html.js';

const workHistory = [
	{
		company: 'Brainstorm Multimedia',
		companyUrl: 'https://www.brainstorm3d.com/',
		period: '2020 — Present',
		title: 'Senior Software Engineer',
		bullets: [
			html`
				<a href="https://studiocall.brainstorm3d.com/"> StudioCall</a>
				<br />
				Real-time streaming application for 3D video conferencing and live virtual productions used in broadcast
				environments compatible with WebRTC/NDI/RTMP/HLS deployed on${' '}
				<a href="https://aws.amazon.com/">AWS</a>.
				<ul>
					<li>
						Frontend:${' '}
						${['nodejs', 'vite', 'typescript', 'react', 'mui', 'webgl', 'threejs'].map(
							(badge) =>
								html`<img
									class="stack-badge"
									src="https://adcimon.github.io/badges/${badge}.svg"
									key=${badge} /> `,
						)}
					</li>
					<li>
						Backend:${' '}
						${['nodejs', 'typescript', 'nestjs', 'go'].map(
							(badge) =>
								html`<img
									class="stack-badge"
									src="https://adcimon.github.io/badges/${badge}.svg"
									key=${badge} /> `,
						)}
					</li>
					<li>
						Infrastructure:${' '}
						${['docker', 'terraform', 'aws'].map(
							(badge) =>
								html`<img
									class="stack-badge"
									src="https://adcimon.github.io/badges/${badge}.svg"
									key=${badge} /> `,
						)}
						<sub>(ECS/Cognito/DynamoDB/S3/CloudFront)</sub>
					</li>
					<li>
						Services:${' '}
						${['stripe', 'livekit'].map(
							(badge) =>
								html`<img
									class="stack-badge"
									src="https://adcimon.github.io/badges/${badge}.svg"
									key=${badge} /> `,
						)}
					</li>
					<li>
						Integration of AI-based conversational multimodal agents with STT/LLM/TTS pipelines using${' '}
						<a href="https://github.com/livekit/agents">LiveKit Agents</a>.
					</li>
					<li>
						Development of an AI-based video matting/chroma keying pipeline using${' '}
						<a href="https://github.com/PeterL1n/RobustVideoMatting">RobustVideoMatting</a>.
					</li>
				</ul>
			`,
			html`
				<a href="https://go.brainstorm3d.com/"> Brainstorm SaaS</a>
				<br />
				Software-as-a-service serverless application made to use Brainstorm Suite products on${' '}
				<a href="https://aws.amazon.com/">AWS</a>.
				<ul>
					<li>
						Frontend:${' '}
						${['nodejs', 'vite', 'typescript', 'react', 'mui'].map(
							(badge) =>
								html`<img
									class="stack-badge"
									src="https://adcimon.github.io/badges/${badge}.svg"
									key=${badge} /> `,
						)}
					</li>
					<li>
						Backend:${' '}
						${['python'].map(
							(badge) =>
								html`<img
									class="stack-badge"
									src="https://adcimon.github.io/badges/${badge}.svg"
									key=${badge} /> `,
						)}
						<sub>(Lambda)</sub>
					</li>
					<li>
						Infrastructure:${' '}
						${['terraform', 'aws'].map(
							(badge) =>
								html`<img
									class="stack-badge"
									src="https://adcimon.github.io/badges/${badge}.svg"
									key=${badge} /> `,
						)}
						<sub>(Lambda/Cognito/DynamoDB/S3/CloudFront)</sub>
					</li>
					<li>
						Services:${' '}
						${['stripe'].map(
							(badge) =>
								html`<img
									class="stack-badge"
									src="https://adcimon.github.io/badges/${badge}.svg"
									key=${badge} /> `,
						)}
					</li>
				</ul>
			`,
			html`
				<a href="https://www.brainstorm3d.com/products/infinityset/">InfinitySet</a>
				<br />
				Virtual set and XR/AR engine solution for live events integrated with${' '}
				<a href="https://www.unrealengine.com/">Unreal Engine</a>.
				<ul>
					<li>
						${['cpp', 'directx', 'opengl', 'ffmpeg'].map(
							(badge) =>
								html`<img
									class="stack-badge"
									src="https://adcimon.github.io/badges/${badge}.svg"
									key=${badge} /> `,
						)}
					</li>
				</ul>
			`,
			html`
				<a href="https://www.brainstorm3d.com/products/edison/">Edison</a>
				<br />
				Inmersive AR solution for online presentations.
				<ul>
					<li>
						${['cpp', 'directx', 'opengl', 'ffmpeg'].map(
							(badge) =>
								html`<img
									class="stack-badge"
									src="https://adcimon.github.io/badges/${badge}.svg"
									key=${badge} /> `,
						)}
					</li>
				</ul>
			`,
			html`
				Integration of <a href="https://livekit.io/">LiveKit</a> and${' '}
				<a href="https://trtc.io/">TencentRTC</a> into Brainstorm Suite products, enabling production-grade
				remote interaction and collaboration.
			`,
			html`
				Development of a WebRTC/NDI real-time streaming pipeline with${' '}
				<a href="https://webrtc.googlesource.com/src/">libwebrtc</a>
				that allows remote control and previsualization of Brainstorm Suite products.
			`,
			html`
				<a href="https://www.brainstorm3d.com/corporate/research-and-development/">Research & Development</a>
				<br />
				Leading role in${' '}
				<a href="http://www.admire3d.eu/">Advanced Mixed Realities</a>${' '} (<a
					href="https://www.youtube.com/watch?v=44Ka9zlbpT8"
					><i class="font-icon icon-youtube1"></i></a
				>) and${' '}
				<a href="https://newsinitiative.withgoogle.com/dnifund/dni-projects/TelePorter/"
					>Google Digital News Initiative Teleporter</a
				>${' '} (<a href="https://www.youtube.com/watch?v=ZX5zu1fVduo"
					><i class="font-icon icon-youtube1"></i></a
				>) projects that explored the use of XR and real-time video in live TV productions with AI-based
				background extraction and super resolution.
			`,
		],
	},
	{
		company: 'Baintex Technologies',
		companyUrl: 'https://www.baintex.com/uk/',
		period: '2017 — 2019',
		title: 'Software Engineer',
		bullets: [
			html`
				<a href="https://www.baintex.com/">Baintex</a>
				<br />
				Smart home IoT ecosystem.
				<ul>
					<li>
						Client applications that provide home automation control and monitoring using WiFi and Bluetooth
						communication with the central hub and peripheral devices.
						<ul>
							<li style=${{ listStyleType: 'circle' }}>
								${['typescript', 'react', 'java', 'android'].map(
									(badge) =>
										html`<img
											class="stack-badge"
											src="https://adcimon.github.io/badges/${badge}.svg"
											key=${badge} /> `,
								)}
							</li>
						</ul>
					</li>
					<li>
						Server infrastructure that provides services for user management, event handling and real-time
						streaming.
						<ul>
							<li style=${{ listStyleType: 'circle' }}>
								${['c', 'python', 'django', 'go'].map(
									(badge) =>
										html`<img
											class="stack-badge"
											src="https://adcimon.github.io/badges/${badge}.svg"
											key=${badge} /> `,
								)}
							</li>
						</ul>
					</li>
					<li>
						Development of a new RTP-based real-time streaming pipeline
						<sub>(previously RTMP-based)</sub> enabling bidirectional audio and video communication between
						the central hub and client applications, providing low-latency and reliable connectivity.
					</li>
					<li>
						Development of an AI-based infant cry detection pipeline that processes live audio streams
						captured by the central hub classifying infant distress events using support vector machines.
					</li>
				</ul>
			`,
			html`
				<a href="https://www.youtube.com/watch?v=UE9zPuvrNMo">Baintex VR</a>
				<br />
				Virtual reality application made with${' '}
				<a href="https://unity.com/">Unity</a> and Oculus that helps customers to explore and understand the
				smart home ecosystem. The experience improved user engagement and supported the marketing team in
				physical stores by effectively demonstrating and promoting the company products.
			`,
		],
	},
	{
		company: 'Sopra Steria',
		companyUrl: 'https://www.soprasteria.com/',
		period: '2015 — 2016',
		title: 'Backend Engineer',
		bullets: [
			html`
				Development and maintenance of fintech applications.
				<ul>
					<li style=${{ listStyleType: 'circle' }}>
						${['java', 'spring', 'nodejs'].map(
							(badge) =>
								html`<img
									class="stack-badge"
									src="https://adcimon.github.io/badges/${badge}.svg"
									key=${badge} /> `,
						)}
					</li>
				</ul>
			`,
		],
	},
];

export function Experience() {
	return html`
		<div class="row">
			<div class="col-12">
				<h2 class="title title-h3">
					<img
						class="title-icon"
						src="assets/icons/experience.svg"
						alt="" />
					Experience
				</h2>
				<div class="timeline">
					${workHistory.map(
						(work, idx) => html`
							<article
								class="timeline-item"
								key=${idx}>
								<h5 class="title title-h5 timeline-title">
									${work.company}${' '}
									<a href=${work.companyUrl}>
										<i class="font-icon icon-link"></i>
									</a>
								</h5>
								<div class="timeline-period">${work.period}</div>
								<div class="timeline-period">${work.title}</div>
								<div class="timeline-description">
									<ul>
										${work.bullets.map((bullet, bIdx) => html` <li key=${bIdx}>${bullet}</li> `)}
									</ul>
								</div>
							</article>
						`,
					)}
				</div>
			</div>
		</div>
	`;
}
