import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import '@/assets/style/global.scss';
import moment from 'moment';
import 'moment/locale/ru.js';
moment.locale('ru');

const container = document.querySelector('#root') as Element;
ReactDOM.createRoot(container).render(
  <Provider store={store}>
    <App />
  </Provider>
);
