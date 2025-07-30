import { Theme } from '@treetop-studio/cartridge/types/theme';

export const glassmorphismTheme: Theme = {
  name: 'glassmorphism',
  colors: {
    primary: '200 100% 60%',
    secondary: '220 30% 85%',
    accent: '280 60% 70%',
    neutral: '240 10% 50%',
    surface: '240 20% 95% / 0.1',
    'surface-variant': '240 20% 90% / 0.15',
    border: '240 20% 80% / 0.2',
    input: '240 20% 90% / 0.1',
    ring: '200 100% 60%',
    foreground: '240 20% 10%',
    'foreground-muted': '240 10% 40%',
    destructive: '0 70% 60%',
    'destructive-foreground': '0 0% 98%',
    warning: '35 90% 55%',
    'warning-foreground': '35 90% 10%',
    success: '140 70% 45%',
    'success-foreground': '0 0% 98%'
  },
  typography: {
    fontFamily: {
      sans: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'SF Mono', ui-monospace, SFMono-Regular, monospace"
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
    xs: '0.375rem',
    sm: '0.75rem',
    md: '1.25rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem'
  },
  borderRadius: {
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  shadows: {
    sm: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.02)',
    md: '0 8px 25px -5px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
    lg: '0 20px 40px -12px rgb(0 0 0 / 0.15), 0 8px 16px -8px rgb(0 0 0 / 0.1)',
    xl: '0 32px 64px -12px rgb(0 0 0 / 0.2), 0 16px 32px -16px rgb(0 0 0 / 0.15)'
  },
  cssVariables: {
    '--color-primary': '200 100% 60%',
    '--color-secondary': '220 30% 85%',
    '--color-accent': '280 60% 70%',
    '--color-neutral': '240 10% 50%',
    '--color-surface': '240 20% 95% / 0.1',
    '--color-surface-variant': '240 20% 90% / 0.15',
    '--color-border': '240 20% 80% / 0.2',
    '--color-input': '240 20% 90% / 0.1',
    '--color-ring': '200 100% 60%',
    '--color-foreground': '240 20% 10%',
    '--color-foreground-muted': '240 10% 40%',
    '--color-destructive': '0 70% 60%',
    '--color-destructive-foreground': '0 0% 98%',
    '--color-warning': '35 90% 55%',
    '--color-warning-foreground': '35 90% 10%',
    '--color-success': '140 70% 45%',
    '--color-success-foreground': '0 0% 98%',
    '--font-family-sans': "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    '--font-family-mono': "'SF Mono', ui-monospace, SFMono-Regular, monospace",
    '--radius': '1rem'
  }
};