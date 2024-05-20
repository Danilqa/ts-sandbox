import ReactDOM from 'react-dom/client';
import App from './app';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Missing root element. Please add #root div');
}

ReactDOM.createRoot(rootElement).render(<App />);
