import React, { useState } from 'react';

// Dummy data for the contact page in Vietnamese
const contactInfo = {
  email: "ho-tro@natures-scent.com",
  phone: "+84-123-456-789",
  address: "123 Đường Xanh, Thành phố Sinh Thái, TP 45678"
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
