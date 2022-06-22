import { ThemeProvider } from 'styled-components';
import MockAppWithRouter from '@testUtils/MockAppWithRouter';
import MockAppWithGraphQlProvider from '@testUtils/MockAppWithGqlProvider';
import '@css/index.css';
import '@css/noscript.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{ main: 'default' }}>
      <MockAppWithGraphQlProvider>
        <MockAppWithRouter>
          <Story />
        </MockAppWithRouter>
      </MockAppWithGraphQlProvider>
    </ThemeProvider>
  ),
];
