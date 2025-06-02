import { type ReactNode, useMemo } from 'react';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import { useAppSelector } from '../app/hook';
import {
  createTheme,
  CssBaseline,
  type ThemeOptions,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const themeMode = useAppSelector(state => state.settings.themeMode);
  const themeDirection = useAppSelector(state => state.settings.themeDirection);

  const isLight = themeMode === 'light';

  const themeOptions: ThemeOptions = useMemo(() => ({
    palette: isLight ? palette.light : palette.dark,
    typography: typography,
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } },
    shape: { borderRadius: 8 },
    direction: themeDirection,
    shadows: isLight ? shadows.light : shadows.dark,
    customShadows: isLight ? customShadows.light : customShadows.dark,
  }), [themeMode, themeDirection]);

  const basetheme = createTheme(themeOptions);
  const finaltheme = createTheme({
    ...basetheme,
    components: componentsOverride(basetheme)
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={finaltheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeProvider;