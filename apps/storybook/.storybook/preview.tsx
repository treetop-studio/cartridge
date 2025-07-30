import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@treetop-studio/cartridge';
import '../../../packages/core/src/styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'default';
      
      return (
        <ThemeProvider defaultTheme={theme}>
          <div className="p-4 min-h-screen bg-surface text-foreground">
            <Story />
          </div>
        </ThemeProvider>
      );
    }
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default' },
          { value: 'retro', title: 'Retro' },
          { value: 'glassmorphism', title: 'Glassmorphism' }
        ],
        dynamicTitle: true
      }
    }
  }
};

export default preview;