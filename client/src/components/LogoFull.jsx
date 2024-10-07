import PropTypes from 'prop-types';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

LogoFull.propTypes = {
  sx: PropTypes.object
};

export default function LogoFull({ sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
      <>
      <div style={{"display":"contents"}}>
        {/* <Box sx={{ width: 250, height: 100, ...sx }}> */}
          <img src='/static/illustrations/lotus-logo.png' alt='lotus-logo'/>
        {/* </Box> */}
      </div>
      </>
  );
}
