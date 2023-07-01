import styles from "./style";
import {
  Pop,
  Customer,
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Hero,
  Features,
} from "./components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App = () => (
  <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route exact path="/pop" element={<Pop />}></Route>
      </Routes>

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
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
