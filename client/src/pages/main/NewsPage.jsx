import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const NewsPage = () => {
  const images = [
    {
      original: '/static/illustrations/stall-1.jpg',
      thumbnail: '/static/illustrations/stall-1.jpg'
    },
    {
      original: '/static/illustrations/stall-2.jpg',
      thumbnail: '/static/illustrations/stall-2.jpg'
    },
    {
      original: '/static/illustrations/stall-3.jpg',
      thumbnail: '/static/illustrations/stall-3.jpg'
    },
    {
      original: '/static/illustrations/stall-4.jpg',
      thumbnail: '/static/illustrations/stall-4.jpg'
    },
    {
      original: '/static/illustrations/stall-11.jpg',
      thumbnail: '/static/illustrations/stall-11.jpg'
    },
    {
      original: '/static/illustrations/stall-6.jpg',
      thumbnail: '/static/illustrations/stall-6.jpg'
    },
    {
      original: '/static/illustrations/stall-7.jpg',
      thumbnail: '/static/illustrations/stall-7.jpg'
    },
    {
      original: '/static/illustrations/stall-8.jpg',
      thumbnail: '/static/illustrations/stall-8.jpg'
    },
    {
      original: '/static/illustrations/stall-9.jpg',
      thumbnail: '/static/illustrations/stall-9.jpg'
    },
    {
      original: '/static/illustrations/stall-12.jpg',
      thumbnail: '/static/illustrations/stall-12.jpg'
    },{
      original: '/static/illustrations/stall-13.jpg',
      thumbnail: '/static/illustrations/stall-13.jpg'
    },{
      original: '/static/illustrations/stall-14.jpg',
      thumbnail: '/static/illustrations/stall-14.jpg'
    },{
      original: '/static/illustrations/stall-15.jpg',
      thumbnail: '/static/illustrations/stall-15.jpg'
    }
  ];
  return (
    <>
      <div style={{ margin: '25px' }}>
        <ImageGallery items={images} autoPlay/>
      </div>
    </>
  );
};

export default NewsPage;
