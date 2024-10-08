import React, { useState } from 'react';

// Dummy data for the contact page in Vietnamese
const contactInfo = {
  email: "Nguyenhieusaoviet@gmail.com",
  phone: "090 7779 338",
  address: "38/65/17 đường số 2, kp 13, Binh Hưng Hòa B, Bình Tân, HCM"
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending the data to a server
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '200px 250px' }}>
      <h1>Liên Hệ Với Chúng Tôi</h1>
      
      <section style={{ marginBottom: '30px' }}>
        <h2>Thông Tin Liên Hệ</h2>
        <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        <p><strong>Điện thoại:</strong> <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
        <p><strong>Địa chỉ:</strong> {contactInfo.address}</p>
      </section>
    </div>
  );
};

export default ContactPage;
