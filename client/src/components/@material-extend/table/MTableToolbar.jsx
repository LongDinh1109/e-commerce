import editFill from '@iconify/icons-eva/edit-fill';
import eyeFill from '@iconify/icons-eva/eye-fill';
import searchFill from '@iconify/icons-eva/search-fill';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
import { Icon } from '@iconify/react';
import { Box, IconButton, InputAdornment, OutlinedInput, Toolbar, Tooltip, Typography } from '@material-ui/core';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 64,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 1)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

// ----------------------------------------------------------------------

MTableToolbar.propTypes = {
  searchPlaceHolder: PropTypes.string.isRequired,
  numSelected: PropTypes.number.isRequired,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func
};

export default function MTableToolbar({ searchPlaceHolder, numSelected, filterName, onFilterName }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: isLight ? 'primary.main' : 'text.primary',
          bgcolor: isLight ? 'primary.lighter' : 'primary.dark'
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          value={filterName}
          onChange={onFilterName}
          placeholder={searchPlaceHolder}
          size="small"
          startAdornment={
            <InputAdornment position="start">
              <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          {numSelected === 1 && (
            <>
              <Tooltip title="Edit">
                <IconButton>
                  <Icon icon={editFill} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Hide / show">
                <IconButton>
                  <Icon icon={eyeFill} />
                </IconButton>
              </Tooltip>
            </>
          )}
          <Tooltip title="Delete">
            <IconButton>
              <Icon icon={trash2Fill} />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Icon icon={roundFilterList} />
          </IconButton>
        </Tooltip>
      )}
    </RootStyle>
  );
}
