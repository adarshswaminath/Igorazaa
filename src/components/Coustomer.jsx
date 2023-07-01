import styles from "../style";
import Button from "./Button";
import image from "../assets/featured.png"

const Customer = () => (
  <section id="sparkslabs" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-inherit rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold  leading-[66.8px] w-full text-left text-white">Featured </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="p-4 bg-black-gradient rounded-lg">
        <img src={image} alt=""  className="h-26 w-26 lg:h-36 lg:w-36"/>
      </div>
      <div className="p-4 bg-black-gradient rounded-lg">
        <img src={image} alt=""  className="h-26 w-26 lg:h-36 lg:w-36"/>
      </div>
      <div className="p-4 bg-black-gradient rounded-lg">
        <img src={image} alt=""  className="h-26 w-26 lg:h-36 lg:w-36"/>
      </div>
      <div className="p-4 bg-black-gradient rounded-lg">
        <img src={image} alt=""  className="h-26 w-26 lg:h-36 lg:w-36"/>
      </div>
      </div>
    </div>
  </section>
);

export default Customer;
