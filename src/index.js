import { html } from './html.js';
import { App } from './components/App/App.js';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(html`<${App} />`);
