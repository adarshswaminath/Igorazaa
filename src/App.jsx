import styles from "./style";
import {
  Customer,
  Billing,
  Business,
  CardDeal,
  Clients,
  Portfolio,
  CTA,
  Footer,
  Navbar,
  Stats,
  Hero,
  Features,
} from "./components";
const App = () => (

    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          {/* <Customer/> */}
          <CardDeal />
          {/* <Testimonials /> */}
          <Portfolio/>
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
);

export default App;
