import { Theme } from '@treetop-studio/cartridge/types/theme';

export const defaultTheme: Theme = {
  name: 'default',
  colors: {
    primary: '220 100% 50%',
    secondary: '210 40% 90%',
    accent: '280 100% 70%',
    neutral: '210 20% 50%',
    surface: '0 0% 100%',
    'surface-variant': '210 40% 98%',
    border: '210 40% 90%',
    input: '210 40% 95%',
    ring: '220 100% 50%',
    foreground: '210 40% 5%',
    'foreground-muted': '210 20% 40%',
    destructive: '0 84% 60%',
    'destructive-foreground': '0 0% 98%',
    warning: '38 92% 50%',
    'warning-foreground': '48 96% 10%',
    success: '142 76% 36%',
    'success-foreground': '0 0% 98%'
  },
  typography: {
    fontFamily: {
      sans: "'Inter', ui-sans-serif, system-ui, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem'
    },
    lineHeight: {
      xs: '1rem',
      sm: '1.25rem',
      base: '1.5rem',
      lg: '1.75rem',
      xl: '1.75rem',
      '2xl': '2rem'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem'
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
  },
  cssVariables: {
    '--color-primary': '220 100% 50%',
    '--color-secondary': '210 40% 90%',
    '--color-accent': '280 100% 70%',
    '--color-neutral': '210 20% 50%',
    '--color-surface': '0 0% 100%',
    '--color-surface-variant': '210 40% 98%',
    '--color-border': '210 40% 90%',
    '--color-input': '210 40% 95%',
    '--color-ring': '220 100% 50%',
    '--color-foreground': '210 40% 5%',
    '--color-foreground-muted': '210 20% 40%',
    '--color-destructive': '0 84% 60%',
    '--color-destructive-foreground': '0 0% 98%',
    '--color-warning': '38 92% 50%',
    '--color-warning-foreground': '48 96% 10%',
    '--color-success': '142 76% 36%',
    '--color-success-foreground': '0 0% 98%',
    '--font-family-sans': "'Inter', ui-sans-serif, system-ui, sans-serif",
    '--font-family-mono': "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
    '--radius': '0.5rem'
  }
};