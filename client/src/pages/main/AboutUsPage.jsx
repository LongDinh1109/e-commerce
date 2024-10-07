import React from 'react';

// Dummy data for the company information page in Vietnamese
const companyInfo = {
  name: "Hương Thiên Nhiên",
  description: "Hương Thiên Nhiên cam kết cung cấp các loại nước xả vải thân thiện với môi trường, kết hợp giữa thiên nhiên và khoa học để mang đến sự mềm mại và tươi mới cho quần áo của bạn. Sản phẩm của chúng tôi được chế tạo từ các thành phần phân hủy sinh học và được thiết kế với môi trường trong tâm trí.",
  mission: "Sứ mệnh của chúng tôi là cách mạng hóa ngành công nghiệp nước xả vải bằng cách tạo ra các sản phẩm vừa hiệu quả vừa có trách nhiệm với môi trường. Chúng tôi hướng đến việc thúc đẩy sự bền vững thông qua sản phẩm của mình đồng thời đảm bảo quần áo của bạn cảm thấy mềm mại và thơm ngát.",
  products: [
    {
      id: 1,
      name: "Hương Lavande",
      description: "Hương lavande dịu nhẹ giúp thư giãn giác quan và để lại mùi thơm tươi mới, dễ chịu trên quần áo của bạn.",
      imageUrl: "/static/illustrations/product1.jpg"
    },
    {
      id: 2,
      name: "Hương Cam",
      description: "Hương cam tươi mới mang đến sự năng động và làm mới, hoàn hảo cho mỗi lần giặt.",
      imageUrl: "/static/illustrations/product2.jpg"
    },
    {
      id: 3,
      name: "Hương Vải Sạch",
      description: "Hương vải sạch và trong trẻo mang lại sự tươi mới của gió nắng cho quần áo của bạn.",
      imageUrl: "/static/illustrations/product3.jpg"
    }
  ],
  contact: {
    email: "ho-tro@huongthiennhien.com",
    phone: "0907 779 338",
    address: "38/65/17 đường số 2, kp 13, Binh Hưng Hòa B, Bình Tân, HCM"
  }
};

const InfoPage = () => (
  <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px 200px' }}>
    <h1>{companyInfo.name}</h1>
    <section style={{ marginBottom: '30px' }}>
      <h2>Giới Thiệu</h2>
      <p>{companyInfo.description}</p>
      <p><strong>Sứ Mệnh:</strong> {companyInfo.mission}</p>
    </section>
    <section style={{ marginBottom: '30px' }}>
      <h2>Sản Phẩm Của Chúng Tôi</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {companyInfo.products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '300px' }}>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
    <section>
      <h2>Liên Hệ Với Chúng Tôi</h2>
      <p><strong>Email:</strong> <a href={`mailto:${companyInfo.contact.email}`}>{companyInfo.contact.email}</a></p>
      <p><strong>Điện Thoại:</strong> <a href={`tel:${companyInfo.contact.phone}`}>{companyInfo.contact.phone}</a></p>
      <p><strong>Địa Chỉ:</strong> {companyInfo.contact.address}</p>
    </section>
  </div>
);

export default InfoPage;
