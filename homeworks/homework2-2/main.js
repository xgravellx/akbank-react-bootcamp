import App from './components/App.js';
import './handler.js';

export const render = () => {
    const root = document.getElementById('root');
    root.innerHTML = App();
}

render();