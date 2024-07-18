import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import queryConfig from './api/reactQuery/index.ts';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryConfig}>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#059e9b',
            colorInfo: '#059e9b',
            colorLink: '#059e9b',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
    {/*<ReactQueryDevtools initialIsOpen={false} />*/}
  </QueryClientProvider>,
);
