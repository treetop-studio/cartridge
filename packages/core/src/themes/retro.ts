import { Theme } from '@treetop-studio/cartridge/types/theme';

export const retroTheme: Theme = {
  name: 'retro',
  colors: {
    primary: '280 100% 70%',
    secondary: '320 100% 20%',
    accent: '60 100% 50%',
    neutral: '0 0% 70%',
    surface: '220 13% 18%',
    'surface-variant': '220 13% 25%',
    border: '280 100% 50%',
    input: '220 13% 15%',
    ring: '280 100% 70%',
    foreground: '60 100% 90%',
    'foreground-muted': '0 0% 70%',
    destructive: '0 100% 60%',
    'destructive-foreground': '0 0% 5%',
    warning: '45 100% 50%',
    'warning-foreground': '0 0% 5%',
    success: '120 100% 40%',
    'success-foreground': '0 0% 5%'
  },
  typography: {
    fontFamily: {
      sans: "'Courier New', ui-monospace, SFMono-Regular, monospace",
      mono: "'Courier New', ui-monospace, SFMono-Regular, monospace"
    },
    fontSize: {
      xs: '0.7rem',
      sm: '0.8rem',
      base: '0.9rem',
      lg: '1rem',
      xl: '1.1rem',
      '2xl': '1.3rem'
    },
    lineHeight: {
      xs: '0.9rem',
      sm: '1rem',
      base: '1.2rem',
      lg: '1.3rem',
      xl: '1.4rem',
      '2xl': '1.6rem'
    }
  },
  spacing: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem'
  },
  borderRadius: {
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0'
  },
  shadows: {
    sm: '2px 2px 0 hsl(280 100% 50%)',
    md: '4px 4px 0 hsl(280 100% 50%)',
    lg: '6px 6px 0 hsl(280 100% 50%)',
    xl: '8px 8px 0 hsl(280 100% 50%)'
  },
  cssVariables: {
    '--color-primary': '280 100% 70%',
    '--color-secondary': '320 100% 20%',
    '--color-accent': '60 100% 50%',
    '--color-neutral': '0 0% 70%',
    '--color-surface': '220 13% 18%',
    '--color-surface-variant': '220 13% 25%',
    '--color-border': '280 100% 50%',
    '--color-input': '220 13% 15%',
    '--color-ring': '280 100% 70%',
    '--color-foreground': '60 100% 90%',
    '--color-foreground-muted': '0 0% 70%',
    '--color-destructive': '0 100% 60%',
    '--color-destructive-foreground': '0 0% 5%',
    '--color-warning': '45 100% 50%',
    '--color-warning-foreground': '0 0% 5%',
    '--color-success': '120 100% 40%',
    '--color-success-foreground': '0 0% 5%',
    '--font-family-sans': "'Courier New', ui-monospace, SFMono-Regular, monospace",
    '--font-family-mono': "'Courier New', ui-monospace, SFMono-Regular, monospace",
    '--radius': '0'
  }
};