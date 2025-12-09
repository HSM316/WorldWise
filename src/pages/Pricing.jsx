import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <main className={styles.pricing}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>

          <p>
            Enjoy full access to all WorldWise features for one simple monthly
            price. No hidden fees—just powerful tools to help you track your
            journeys and make sense of every place you explore.
          </p>
        </div>

        <img src="../public/img-2.jpg" />
      </section>
    </main>
  );
}

export default Pricing;
