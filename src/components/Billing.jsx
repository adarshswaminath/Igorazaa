import { apple, bill, google} from "../assets";
import website from "../assets/visitsie.png"
import styles, { layout } from "../style";

const Billing = () => (
  <section id="consultancy" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      IGORAZA Consultancy
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We help businesses propel into the digital service economy with our innovative solutions and advisory services. 
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="https://igoraza.com"><img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" /></a>
        <a href="https://igoraza.com"><img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /></a>
        <a href="https://igoraza.com"><img src={website} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /></a>

      </div>
    </div>
  </section>
);

export default Billing;
