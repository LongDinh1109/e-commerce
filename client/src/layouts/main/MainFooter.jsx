import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import phoneFill from '@iconify/icons-eva/phone-fill';


import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, IconButton, Stack } from '@material-ui/core';
//
import Logo from '../../components/Logo';
import useLocales from '../../hooks/useLocales';

// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: facebookFill, url: '#' },
  { name: 'Google', icon: googleFill, url: 'https://www.google.com/' },
  { name: 'Linkedin', icon: linkedinFill, url: 'https://www.linkedin.com/' },
  { name: 'Twitter', icon: twitterFill, url: 'https://www.twitter.com/' }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

const MainFooter = () => {
  const t = useLocales();

  const LINKS = [
    {
      headline: 'Chính sách',
      children: [
        { name: 'Chính sách bán hàng', href: '#' },
        { name: 'Chính sách đổi trả', href: '#' },
        { name: 'Chính sách bảo mật', href: '#' },
        { name: 'Chính sách kiểm hàng', href: '#' },
        { name: 'Chính sách vận chuyển', href: '#' },
        { name: 'Chính sách thanh toán', href: '#' },
        { name: 'Chính sách bảo hành', href: '#' }
      ]
    }
  ];

  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          {/* <Grid item xs={12} sx={{ mb: 3 }}>
            
          </Grid> */}
          <Grid item xs={8} md={4}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            </ScrollLink>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              <ul className='f-company-info'>
                <li>
                  <span className='f-company-info-heading'>Mã số thuế: </span>
                  <span>0315..... – </span>  
                  <span className='f-company-info-heading'>Ngày cấp: </span>
                  <span>01/08/2024 – </span>
                  <span className='f-company-info-heading'>Nơi Cấp: </span>
                  <span>Sở kế hoạch và đầu tư Thành Phố Hồ Chí Minh – Phòng đăng ký kinh doanh .</span>
                </li>
                <li>
                  <span className='f-company-info-heading'>Trụ Sở: </span>
                  <span>38/65/17 đường số 2, kp 13, Binh Hưng Hòa B, Bình Tân, HCM, VN.</span>
                </li>
                <li>
                  <span className='f-company-info-heading'>Hotline: </span>
                  <span>0907 779 338</span>
                </li>
                <li>
                  <span className='f-company-info-heading'>Email: </span>
                  <span>cskh@abc.vn</span>
                </li>
                <li>
                  <span className='f-company-info-heading'>Phản ánh về chất lượng sản phẩm: </span>
                  <span>0907 779 338</span>
                </li>
              </ul>
            </Typography>

            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <IconButton key={social.name} color="primary" sx={{ p: 1 }} href={social.url} target="_blank">
                  <Icon icon={social.icon} width={16} height={16} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'column' }} justifyContent="space-between" className='footer-mid-content'>
              <div className='f-company-info'>
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography component="p" variant="overline" className='f-company-info-heading'>
                      {headline}
                    </Typography>
                    <Grid container
                  justifyContent={{ xs: 'center', md: 'space-between' }}
                  sx={{ textAlign: { xs: 'center', md: 'left' } }} spacing={2}>
                    {children.map((link) =>
                      (
                        <Grid item xs={12} md={6}>
                        <div className='f-link'><Icon icon={checkmarkFill} width={20} height={20} color='rgb(83, 90, 70)'/>
                        <Link
                          to={link.href}
                          key={link.name}
                          color="inherit"
                          variant="body2"
                          component={RouterLink}
                          sx={{ display: 'block' }}
                        >
                          {link.name}
                        </Link>
                        </div>
                        </Grid>
                      )
                    )}
                    </Grid>
                  </Stack>
                );
              })}
              </div>
            </Stack>
            <div className='logo-sale'>
              <img src="/static/illustrations/logoSaleNoti.png" alt='logo-sale'/>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
              <div className='f-contact'>
                <div className='f-contact-phone'>
                  <div className='contact-phone-icon'>
                    <Icon icon={phoneFill} width={50} height={50}/>    
                  </div>       
                  <div className='contact-phone-txt'>
                    <p>Liên hệ 24/7</p>
                    <p>0907.779.338</p>
                  </div>    
                </div>
                <div className='f-location'>
                  <iframe title="mylocation" width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.118429727245!2d106.59265717497018!3d10.802240589348136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b8f6cd56159%3A0x5efd1862ec2ac03f!2zMzgvNjUvMjQsIDM4LzY1LzE1IMSQxrDhu51uZyBT4buRIDIsIGtodSBwaOG7kSA1LCBCw6xuaCBUw6JuLCBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1728290184708!5m2!1svi!2s"><a href="https://www.gps.ie/">gps trackers</a>
                  </iframe>
                </div>
              </div>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          &copy; 2024 Nature's Scent. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
};

export default MainFooter;