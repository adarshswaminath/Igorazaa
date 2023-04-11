import styles from "../style";
import Button from "./Button";

const LeadBox = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center text-[#ff2268]">SparkLabs </h2>
      <p className={`${styles.paragraph} mt-5 text-center`}>
      Igoraza is committed to help out clients 24×7. Feel free to reach out to us for any queries and help
      </p>
    </div>

    {/* <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <a href="https://wa.me/+917736886026?text=Hey+igoraza">
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Contact Now
  </button>
  </a>
    </div> */}
  </section>
);

export default LeadBox;
