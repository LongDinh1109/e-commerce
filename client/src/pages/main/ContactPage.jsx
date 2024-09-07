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
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Liên Hệ Với Chúng Tôi</h1>
      
      <section style={{ marginBottom: '30px' }}>
        <h2>Thông Tin Liên Hệ</h2>
        <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        <p><strong>Điện thoại:</strong> <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
        <p><strong>Địa chỉ:</strong> {contactInfo.address}</p>
      </section>

      <section>
        <h2>Gửi Tin Nhắn</h2>
        {submitted ? (
          <p style={{ color: 'green' }}>Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px' }}>
            <label htmlFor="name">
              Họ và tên:
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ margin: '10px 0', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ margin: '10px 0', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </label>
            <label htmlFor="message">
              Tin nhắn:
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{ margin: '10px 0', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </label>
            <button
              type="submit"
              style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}
            >
              Gửi Tin Nhắn
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default ContactPage;
