import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import phoneFill from '@iconify/icons-eva/phone-fill';
import newsFill from '@iconify/icons-eva/book-open-fill';
import productFill from '@iconify/icons-eva/cube-fill';
import aboutFill from '@iconify/icons-eva/award-fill';
import gridFill from '@iconify/icons-eva/grid-fill';
import plusFill from '@iconify/icons-eva/plus-fill';


// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Link, Grid, List, Stack, Popover, ListItem, ListSubheader, CardActionArea } from '@material-ui/core';
import { useClickOutside } from '../../hooks/useClickOutside';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none'
  }
}));

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(['subheader', 'item'])
};

function IconBullet({ type = 'item' }) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component="span"
        sx={{
          ml: '2px',
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && { ml: 0, width: 8, height: 2, borderRadius: 2 })
        }}
      />
    </Box>
  );
}

MenuDesktopItem.propTypes = {
  item: PropTypes.object,
  pathname: PropTypes.string,
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

function MenuDesktopItem({ item, pathname, isHome, isOffset}) {
  const { title, path, image, icon } = item;
  const isActive = pathname === path;


  return (
    <LinkStyle
      key={title}
      to={path}
      component={RouterLink}
      sx={{
        height: '80%',
        gap: '5px',
        ...(isHome && { color: 'common.white' }),
        ...(isOffset && { color: 'text.primary' }),
        ...(isActive && { color: 'common.white' })
      }}
    >
      {image && (
        <Box
          component="span"
          sx={{
            width: 24,
            height: 24,
            marginRight: 1,
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      {icon && <Box component={Icon} icon={icon} sx={{ ml: 0.5, width: 15, height: 15 }} />}
      <div className="">{title}</div>
    </LinkStyle>
  );
}

function MenuDropdownItem({ item, isOpen, isOffset, onToggle,onClickOutSide}) {
  const ref = useRef(null)
  
  useClickOutside(ref, onClickOutSide)
  if (item && item.length > 0) {
    return (
      <div ref={ref}>
        <button className="nav-all-prod-list" onClick={onToggle}>
          <Icon icon={gridFill} width={20} height={20} />
          <LinkStyle
            sx={{
              ...(isOffset && { color: 'text.primary' }),
              ...(isOpen && { opacity: 0.48 })
            }}
          >
            <span className="nav-all-prod-txt">Danh sách sản phẩm</span>
            <Box
              component={Icon}
              icon={isOpen ? arrowIosUpwardFill : arrowIosDownwardFill}
              sx={{ ml: 0.5, width: 20, height: 20 }}
            />
          </LinkStyle>
          {isOpen && <div className='prod-category-popup'>
          <>
            {item.map((list) => {
              const { path, title, _id } = list;

              return (
                <div className='popup-item'>
                  <Icon icon={plusFill} width={15} height={15}/>
                  <LinkStyle
                    component={RouterLink}
                    key={_id}
                    to={path}
                  >
                    {title}
                  </LinkStyle>
                </div>
              );
            })}
          </>
        </div>}
        </button>
      </div>
    );
  }
  return <></>;
}
MenuDesktop.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array
};

export default function MenuDesktop({ isOffset, navConfig }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const MenuItems = [
    {
      title: 'Giới Thiệu',
      path: '/About-us',
      icon: aboutFill
    },
    {
      title: 'Sản Phẩm',
      path: '/q',
      icon: productFill
    },
    {
      title: 'Tin Tức',
      path: '/News',
      icon: newsFill
    },
    {
      title: 'Liên Hệ',
      path: '/Contact',
      icon: phoneFill
    }
  ];

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(()=>{

  },[open])
  const handleToggle= () => {
    setOpen(!open);
  };

  return (
    <Stack direction="row" sx={{ height: '100%', alignItems: 'center' }}>
      {navConfig.length > 0 && (
        <MenuDropdownItem
          item={navConfig}
          pathname={pathname}
          isOpen={open}
          onToggle={handleToggle}
          isOffset={isOffset}
          isHome={false}
          onClickOutSide={()=>setOpen(false)}
        />
      )}
      {MenuItems.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          pathname={pathname}
          isOpen={open}
          isOffset={isOffset}
          isHome={false}
        />
      ))}
    </Stack>
  );
}
