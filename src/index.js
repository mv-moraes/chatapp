import { createRoot } from 'react-dom/client';
import '../src/styles/global';
import App from './App';

const root = createRoot(document.querySelector("#root"));
root.render(<App />);