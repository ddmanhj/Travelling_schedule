import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>Về chúng tôi TravelSchedule.</h2>
          <p>
            TravelSchedule là một công ty cung cấp dịch vụ du lịch tại Việt Nam.
            Công ty này được thành lập từ năm 2000 và hoạt động trong lĩnh vực
            du lịch tại Việt Nam. TravelSchedule cung cấp các tour du lịch trong
            nước và quốc tế, cũng như sở hữu các dịch vụ du lịch khác như khách
            sạn và hướng dẫn viên du lịch. Công ty này đã nhận được nhiều giải
            thưởng và được công nhận là một trong những đơn vị uy tín trong
            ngành du lịch tại Việt Nam.
          </p>
          <p>
            Ngoài ra, TravelSchedule cũng có thể cung cấp các dịch vụ như tư vấn
            du lịch, đặt phòng khách sạn, và tổ chức các sự kiện du lịch đặc
            biệt. Công ty này có mục tiêu trở thành một trong những đơn vị hàng
            đầu trong lĩnh vực du lịch tại Việt Nam.
          </p>
        </div>
      </section>
    </main>
  );
}
