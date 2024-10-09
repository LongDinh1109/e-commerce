import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import gridFill from '@iconify/icons-eva/grid-fill';
import plusFill from '@iconify/icons-eva/plus-fill';

// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, List, Drawer, Link, Collapse, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
// components
import Logo from '../../components/Logo';
import NavSection from '../../components/NavSection';
import Scrollbar from '../../components/Scrollbar';
import { MIconButton } from '../../components/@material-extend';
//
import menuConfig from './MenuConfig';

// ----------------------------------------------------------------------

const ICON_SIZE = 22;
const ITEM_SIZE = 48;
const PADDING = 2.5;

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body2,
  height: ITEM_SIZE,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(PADDING),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary
}));

// ----------------------------------------------------------------------

MenuMobileItem.propTypes = {
  item: PropTypes.object,
  isOpen: PropTypes.bool,
  isActive: PropTypes.bool,
  onOpen: PropTypes.func
};

function MenuMobileItem({ item, isOpen, isActive, onOpen }) {
  const { title, path, icon, children } = item;

  if (children) {
    return (
      <div key={title}>
        <ListItemStyle button onClick={onOpen}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          <Box
            component={Icon}
            icon={isOpen ? arrowIosDownwardFill : arrowIosForwardFill}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ display: 'flex', flexDirection: 'column-reverse', marginLeft:"10px" }}>
            {children.map((item) => (
              <ListItemStyle
                button
                key={item.title}
                to={item.path}
                component={RouterLink}
                sx={{
                  ...(isActive && {
                    color: 'primary.main',
                    fontWeight: 'fontWeightMedium',
                    bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
                  })
                }}
              >
                <ListItemIcon>
                  <Icon icon={plusFill} width={15} height={15}/>
                </ListItemIcon>
                <ListItemText disableTypography primary={item.title} />
              </ListItemStyle>
            ))}
          </Box>
        </Collapse>
      </div>
    );
  }

  return (
    <ListItemStyle
      button
      key={title}
      to={path}
      component={RouterLink}
      sx={{
        ...(isActive && {
          color: 'primary.main',
          fontWeight: 'fontWeightMedium',
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        })
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
    </ListItemStyle>
  );
}

MenuMobile.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool
};

export default function MenuMobile({ isOffset, isHome, navConfig }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItemConfig = {
    item: {
      title: 'Danh mục',
      path: '/contact',
      icon: <Icon icon={gridFill} width={22} height={22} />,
      children: navConfig
    }
  };
  useEffect(() => {
    if (mobileOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <MIconButton
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: 'text.primary' })
        }}
      >
        <Icon icon={menu2Fill} />
      </MIconButton>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <Link component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
            <Logo sx={{ mx: PADDING, my: 3 }} />
          </Link>

          <List disablePadding>
            <MenuMobileItem
              key={menuItemConfig.title}
              item={menuItemConfig.item}
              isOpen={open}
              onOpen={handleOpen}
              isActive={pathname === menuItemConfig.path}
            />
            {menuConfig.map((link) => (
              <MenuMobileItem
                key={link.title}
                item={link}
                isOpen={open}
                onOpen={handleOpen}
                isActive={pathname === link.path}
              />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
