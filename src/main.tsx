import React from 'react'
import ReactDOM from 'react-dom/client'

import Routers from '@/routes'
import { HashRouter } from "react-router-dom";

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './app/index'

import ThemeProvider from './Theme';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';

import { version, name } from '../package.json'

import './assets/styles/index.css'
import './assets/styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* 状态管理 */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* 主题 */}
        <ThemeProvider>
          <StyledEngineProvider injectFirst>
            {/* 格式化样式 */}
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* 路由 */}
            <HashRouter>
              <Routers />
            </HashRouter>
          </StyledEngineProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)


const print = (key: string, value: string) =>
  console.log(
    `%c ${key} %c ${value} %c `,
    'background:#20232a ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#61dafb ;padding: 1px; border-radius: 0 3px 3px 0;  color: #20232a; font-weight: bold;',
    'background:transparent'
  )
print(name, version)
print('build time', `${import.meta.env.VITE_APP_BUILD_TIME}`)