import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";

function Product() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <section>
        <img src="../public/img-1.jpg" />
        <div>
          <h2>About WorldWide.</h2>

          <p>
            WorldWise is built for curious explorers who want to understand the
            world more deeply. Whether you're discovering a new city or
            revisiting familiar landscapes, WorldWise makes every step memorable
            and insightful.
          </p>

          <p>
            Our mission is to bring clarity and connection to every adventure.
            With smart features, seamless syncing, and an intuitive design,
            WorldWise empowers you to organize your experiences effortlessly.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Product;
