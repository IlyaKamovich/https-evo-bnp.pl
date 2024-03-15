import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import '@/assets/style/global.scss';

const container = document.querySelector('#root') as Element;
ReactDOM.createRoot(container).render(
  <Provider store={store}>
    <App />
  </Provider>
);
