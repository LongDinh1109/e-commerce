import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import clockFill from '@iconify/icons-eva/clock-fill';
import roundVerified from '@iconify/icons-ic/round-verified';
import roundVerifiedUser from '@iconify/icons-ic/round-verified-user';
// material
import { alpha, experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Box, Tab, Card, Grid, Divider, Container, Typography } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../redux/slices/productSlice';
// hooks
import useLocales from '../../hooks/useLocales';
// components
import Page from '../../components/Page';
import LoadingScreen from '../../components/LoadingScreen';
import Markdown from '../../components/Markdown';
import {
  ProductDetailsCarousel,
  ProductDetailsReview,
  ProductDetailsSummary
} from '../../components/dashboard/product-details';

// ----------------------------------------------------------------------

const formatVideoYoutubeEmbed = (link) => {
  if (link.includes('://www.youtube.com/')) return link.replace('://www.youtube.com/', '://www.youtube.com/embed/');
  if (link.includes('://youtube.com/')) return link.replace('://youtube.com/', '://www.youtube.com/embed/');
  if (link.includes('://youtu.be/')) return link.replace('://youtu.be/', '://www.youtube.com/embed/');
  return link;
};

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  justifyContent: 'center',
  height: theme.spacing(8),
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  backgroundColor: `${alpha(theme.palette.primary.main, 0.08)}`
}));

// ----------------------------------------------------------------------

// const SkeletonLoad = (
//   <Grid container spacing={3}>
//     <Grid item xs={12} md={6} lg={7}>
//       <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '100%', borderRadius: 2 }} />
//     </Grid>
//     <Grid item xs={12} md={6} lg={5}>
//       <Skeleton variant="circular" width={80} height={80} />
//       <Skeleton variant="text" height={240} />
//       <Skeleton variant="text" height={40} />
//       <Skeleton variant="text" height={40} />
//       <Skeleton variant="text" height={40} />
//     </Grid>
//   </Grid>
// );

export default function ProductDetailPage() {
  const { t } = useLocales();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { slug: productSlug } = useParams();
  const { item: product, isLoading } = useSelector((state) => state.product);
  const [images, setImages] = useState([]);
  const [tab, setTab] = useState('1');
  const [indexVariant, setIndexVariant] = useState(0);

  useEffect(() => {
    dispatch(getProductById(productSlug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSlug]);

  useEffect(() => {
    setImages([]);
    handleGatherPicture();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, indexVariant]);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const handleGatherPicture = () => {
    if (product?.variants?.[indexVariant].pictures.length > 0) {
      const temp = [product?.variants[indexVariant].thumbnail, ...product?.variants[indexVariant].pictures];
      setImages(temp);
    } else {
      const temp = [product?.variants?.[indexVariant].thumbnail];
      setImages(temp);
    }
  };

  const handleChangeIndexVariant = (index) => {
    setIndexVariant(index);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  const productMoreInfos = [
    {
      title: '100% Chính hãng',
      description: 'Tất cả các sản phẩm tại HK Mobile đều là hàng chính hãng tại Việt Nam',
      icon: roundVerified
    },
    {
      title: '15 ngày đổi trả',
      description: 'Cam kết đổi trả trong vòng 15 ngày nếu xảy ra lỗi',
      icon: clockFill
    }
  ];

  if (product?.warrantyPeriod) {
    productMoreInfos.push({
      title: 'Bảo hành chính hãng',
      description: `Sản phẩm được bảo hành chính hãng ${product?.warrantyPeriod} tháng`,
      icon: roundVerifiedUser
    });
  }

  return (
    <Page title={(product?.name?.concat(' - ') || '') + t('home.page-title')}>
      <Container maxWidth="lg" sx={{ paddingY: 5 }}>
        <Card>
          <Grid container>
            <Grid item xs={12} md={6} lg={7} sx={{ marginBottom: theme.spacing(1) }}>
              <ProductDetailsCarousel images={images} />
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <ProductDetailsSummary
                isLoading={isLoading}
                product={product}
                indexVariant={indexVariant}
                handleChangeIndexVariant={handleChangeIndexVariant}
              />
            </Grid>
          </Grid>
        </Card>

        <Grid container sx={{ my: 8 }}>
          {productMoreInfos.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Box
                sx={{
                  my: 2,
                  mx: 'auto',
                  maxWidth: 280,
                  textAlign: 'center'
                }}
              >
                <IconWrapperStyle>
                  <Icon icon={item.icon} width={36} height={36} />
                </IconWrapperStyle>
                <Typography variant="subtitle1" gutterBottom>
                  {item.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Card>
          <TabContext value={tab}>
            <Box sx={{ px: 3, bgcolor: 'background.neutral' }}>
              <TabList onChange={handleChangeTab}>
                <Tab disableRipple value="1" label={t('home.product-desc')} />
                {product?.video && (
                  <Tab disableRipple value="2" label="Video" sx={{ '& .MuiTab-wrapper': { whiteSpace: 'nowrap' } }} />
                )}
                <Tab
                  disableRipple
                  value="3"
                  label={t('home.review')}
                  sx={{ '& .MuiTab-wrapper': { whiteSpace: 'nowrap' } }}
                />
              </TabList>
            </Box>
            <Divider />
            <TabPanel value="1">
              <Box sx={{ p: 3 }}>
                <Markdown children={product?.desc} />
              </Box>
            </TabPanel>
            {product?.video && (
              <TabPanel value="2">
                <iframe
                  width="1280"
                  height="720"
                  src={formatVideoYoutubeEmbed(product?.video)}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </TabPanel>
            )}
            <TabPanel value="3">
              <ProductDetailsReview product={product} />
            </TabPanel>
          </TabContext>
        </Card>
      </Container>
    </Page>
  );
}
