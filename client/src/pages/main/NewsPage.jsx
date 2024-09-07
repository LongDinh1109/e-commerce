import React from 'react';

// Dummy data with Vietnamese content
const newsData = [
  {
    id: 1,
    title: "Ra Mắt Nước Xả Vải Thân Thiện Với Môi Trường Mới",
    date: "5 tháng 9, 2024",
    content: "Một loại nước xả vải mới thân thiện với môi trường vừa được ra mắt, hứa hẹn mang đến sự mềm mại hơn cho quần áo và bảo vệ môi trường. Được làm từ các thành phần phân hủy sinh học, nước xả vải này nhằm giảm thiểu dấu chân carbon trong khi vẫn giữ cho quần áo của bạn mềm mại và tươi mới.",
    imageUrl: "/static/illustrations/product1.jpg"
  },
  {
    id: 2,
    title: "Xu Hướng Thị Trường Nước Xả Vải Năm 2024",
    date: "3 tháng 9, 2024",
    content: "Thị trường nước xả vải đang chứng kiến sự chuyển mình về các sản phẩm tự nhiên và hữu cơ. Với sự gia tăng nhận thức của người tiêu dùng về tính bền vững, các thương hiệu đang điều chỉnh công thức và bao bì của mình để đáp ứng nhu cầu về sản phẩm thân thiện với môi trường.",
    imageUrl: "/static/illustrations/product2.jpg"
  },
  {
    id: 3,
    title: "Công Thức Nước Xả Vải Tự Làm Tại Nhà Bạn Có Thể Thử",
    date: "30 tháng 8, 2024",
    content: "Muốn tiết kiệm tiền và kiểm soát thành phần trong nước xả vải của bạn? Hãy thử các công thức DIY dễ dàng này sử dụng các nguyên liệu có sẵn trong gia đình. Từ các giải pháp dựa trên giấm đến các hỗn hợp tinh dầu, những công thức này sẽ giữ cho quần áo của bạn mềm mại mà không cần hóa chất độc hại.",
    imageUrl: "/static/illustrations/product3.jpg"
  }
];

const NewsPage = () => (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Tin Tức Về Nước Xả Vải</h1>
      {newsData.map((article) => (
        <div key={article.id} style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', padding: '20px' }}>
          <h2>{article.title}</h2>
          <p style={{ fontStyle: 'italic', color: '#555' }}>{article.date}</p>
          <img src={article.imageUrl} alt={article.title} style={{ width: '200px', height: '200px', borderRadius: '8px' }} />
          <p style={{ marginTop: '10px' }}>{article.content}</p>
        </div>
      ))}
    </div>
  );

export default NewsPage;
