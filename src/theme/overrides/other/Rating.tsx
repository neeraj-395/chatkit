import type { Theme } from '@mui/material';
import ThemeIcon from '../ThemeIcon';

const ICON_SMALL = { width: 20, height: 20 };
const ICON_LARGE = { width: 28, height: 28 };

export default function Rating(theme: Theme) {
  return {
    MuiRating: {
      defaultProps: {
        emptyIcon: <ThemeIcon name={'star'} />,
        icon: <ThemeIcon name={'star'} />,
      },

      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            opacity: 0.48,
          },
        },
        iconEmpty: { color: theme.palette.grey[500_48] },
        sizeSmall: { '& svg': { ...ICON_SMALL } },
        sizeLarge: { '& svg': { ...ICON_LARGE } },
      },
    },
  };
}
