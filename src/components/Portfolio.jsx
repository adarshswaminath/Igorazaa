import styles from "../style";
import Button from "./Button";
import image1 from "../assets/card-1.jpg";
import image2 from "../assets/card-2.jpg";
import image3 from "../assets/card-3.jpg";


const Portfolio = () => (
  <section
    id="sparkslabs"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-inherit rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold  leading-[66.8px] w-full text-left text-xl text-white">
        Portfolio{" "}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* card -1 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={image1} alt="" />
                </a>
                <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Artem-Digital Marketing campaign</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
            </div>
        </div>
        {/* card -1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={image2} alt="" />
                </a>
                <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mayhem-Search Engine Optimization</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
               
            </div>
        </div>
        {/* card -1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={image3} alt="" />
                </a>
                <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Basic-Pay per click (PPC)</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
