import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import ConfigureAppStore from './state/ConfigureStore';
import AppRoutes from './views/routes';
import './index.scss';

const store = ConfigureAppStore();

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>
)
