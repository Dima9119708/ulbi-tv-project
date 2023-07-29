import { createRoot } from 'react-dom/client';
import 'app/styles/index.css';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import 'shared/config/i18n/i18n';
import { themeStore } from 'app/theme/lib/useTheme';

themeStore.actions.init();

const container = document.getElementById('root');

const root = createRoot(container as HTMLElement);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </BrowserRouter>,
);
