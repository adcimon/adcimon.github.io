import { html } from './html.js';
import { App } from './components/App.js';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(html`<${App} />`);
