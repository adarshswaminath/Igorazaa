import { feedback } from "../constants";
import styles from "../style";
// import FeedbackCard from "./FeedbackCard";
import { quotes } from "../assets";
import { GiBattleMech } from "react-icons/gi"

const Testimonials = () => (
    <section id="features" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] text-center">
            <h2 className={styles.heading2}>
                Features
            </h2>
        </div>
        <div className="flex flex-wrap justify-center">
  <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 p-4">
    <div className=" rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Innovation</h2>
      <p className="text-gray-600">We are always pushing the boundaries of what is possible and are committed to developing innovative products and services that are designed to meet the needs of our clients and customers</p>
    </div>
  </div>
  <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 p-4">
    <div className=" rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Flexibility</h2>
      <p className="text-gray-600">We understand that every client and customer has unique needs, which is why we offer flexible solutions that can be customized to meet their specific requirements</p>
    </div>
  </div>
  <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 p-4">
    <div className=" rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Customer Focus</h2>
      <p className="text-gray-600">We are committed to putting our customers first. We work closely with our clients to understand their needs and provide them with the support and resources they need to succeed</p>
    </div>
  </div>
  <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 p-4">
    <div className=" rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Quality</h2>
      <p className="text-gray-600">Our team of experts carefully design and develop our products or services using best practices and technologies. Rigorous testing procedures ensure early defect identification and maintenance of high quality.</p>
    </div>
  </div>
</div>

    </section>
);

export default Testimonials;
