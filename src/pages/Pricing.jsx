// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Định giá đơn giản.
            <br />
            Chỉ từ: 1.229.000 VNĐ/tháng.
          </h2>
          <p>
            Bạn sẽ được trải nghiệm những điều mới mẻ và hấp dẫn tại những địa
            điểm nổi tiếng
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
