import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from 'src/App';
import { Global, lightTheme } from 'src/assets';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);
