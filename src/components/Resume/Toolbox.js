import { html } from '../../html.js';

const toolboxBadges = {
	Languages: ['c', 'cpp', 'csharp', 'python', 'go', 'javascript', 'typescript'],
	Web: ['http', 'html', 'css', 'svg', 'tailwindcss', 'mui', 'react', 'vite', 'nodejs', 'nestjs', 'electron'],
	Cloud: ['aws', 'stripe'],
	Databases: ['mysql', 'postgresql', 'mongodb', 'dynamodb', 'redis', 'sqlite'],
	Streaming: ['ffmpeg', 'gstreamer', 'webrtc', 'pion', 'livekit', 'ndi'],
	Graphics: ['unreal', 'unity', 'directx', 'hlsl', 'opengl', 'glsl', 'threejs', 'webgl'],
	DevOps: ['windows', 'linux', 'cmake', 'git', 'mercurial', 'github', 'gitlab', 'jenkins', 'docker', 'terraform'],
	Programs: [
		'visual_studio',
		'visual_studio_code',
		'wireshark',
		'photoshop',
		'blender',
		'davinci_resolve',
		'obs_studio',
	],
};

export function Toolbox() {
	return html`
		<div class="row">
			<div class="col-12">
				<h2 class="title title-h3">
					<img
						class="title-icon"
						src="assets/icons/toolbox.svg"
						alt="" />
					Toolbox
				</h2>
				<p>Core technology stack and familiar tools.</p>
				<div class="box box-border">
					${Object.entries(toolboxBadges).map(
						([category, badges], idx) => html`
							<div key=${category}>
								<h4 class="title title-h4">${category}</h4>
								<div>
									${badges.map(
										(badge) => html`
											<img
												class="toolbox-badge"
												src="https://adcimon.github.io/badges/${badge}.svg"
												key=${badge} />${' '}
										`,
									)}
								</div>
								${idx < Object.keys(toolboxBadges).length - 1 ? html`<br />` : null}
							</div>
						`,
					)}
				</div>
			</div>
		</div>
	`;
}
