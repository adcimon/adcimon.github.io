import { html } from '../../html.js';
import { About } from './About.js';
import { WhatIDo } from './WhatIDo.js';
import { Education } from './Education.js';
import { Experience } from './Experience.js';
import { Certifications } from './Certifications.js';
import { Toolbox } from './Toolbox.js';

export function Resume({ show }) {
	if (!show) return null;

	return html`
		<div class="box box-content">
			<${About} />
			<${WhatIDo} />
			<${Education} />
			<${Experience} />
			<${Certifications} />
			<br />
			<${Toolbox} />
		</div>
	`;
}
