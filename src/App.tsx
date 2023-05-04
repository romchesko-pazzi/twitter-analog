import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Global } from 'src/assets';
import { AppRoutes } from 'src/components';
import { lightTheme } from 'src/theme';

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Global />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
