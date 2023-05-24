import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Global } from 'src/assets';
import { AppRoutes } from 'src/components';
import { AuthProvider } from 'src/context';
import { ErrorFallback } from 'src/pages';
import { lightTheme } from 'src/theme';

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={lightTheme}>
        <AuthProvider>
          <BrowserRouter>
            <Global />
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
