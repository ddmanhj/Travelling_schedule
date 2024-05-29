import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          Bạn đi du lịch khắp thế giới.
          <br />
          TravelSchedule theo dõi cuộc phiêu lưu của bạn.
        </h1>
        <h2>
          Bản đồ thế giới theo dõi bước chân của bạn đến mọi thành phố mà bạn có
          thể nghĩ tới. Đừng bao giờ quên những trải nghiệm tuyệt vời của bạn và
          cho bạn bè thấy bạn đã lang thang khắp thế giới như thế nào.
        </h2>
        <Link to="/login" className="cta">
          Bắt đầu lên lịch trình
        </Link>
      </section>
    </main>
  );
}
