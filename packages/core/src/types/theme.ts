export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  surface: string;
  'surface-variant': string;
  border: string;
  input: string;
  ring: string;
  foreground: string;
  'foreground-muted': string;
  destructive: string;
  'destructive-foreground': string;
  warning: string;
  'warning-foreground': string;
  success: string;
  'success-foreground': string;
}

export interface TypographyScale {
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  lineHeight: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}

export interface SpacingScale {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface BorderRadiusScale {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ShadowScale {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Theme {
  name: string;
  colors: ColorPalette;
  typography: TypographyScale;
  spacing: SpacingScale;
  borderRadius: BorderRadiusScale;
  shadows: ShadowScale;
  cssVariables: Record<string, string>;
}

export type ThemeName = 'default' | 'retro' | 'glassmorphism' | 'minimal';

export interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: Record<ThemeName, Theme>;
}