import React from 'react';
import { Box } from '@material-ui/core';

const ContactPage = () => {
  const contactInfo = {
    email: 'Nguyenhieusaoviet@gmail.com',
    phone: '090 7779 338',
    address: '38/65/17 đường số 2, kp 13, Binh Hưng Hòa B, Bình Tân, HCM'
  };

  return (
    <Box m={{ xs: 1 , md: 6}} display='flex' justifyContent='center'>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <h1>Liên Hệ Với Chúng Tôi</h1>

        <section style={{ marginBottom: '30px' }}>
          <h2>Thông Tin Liên Hệ</h2>
          <p>
            <strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>
          <p>
            <strong>Điện thoại:</strong> <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          </p>
          <p>
            <strong>Địa chỉ:</strong> {contactInfo.address}
          </p>
        </section>
      </div>
    </Box>
  );
};

export default ContactPage;
