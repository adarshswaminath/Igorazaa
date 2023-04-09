import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import Box from "./Box";

const CardDeal = () => (
  <div id="industarials">
    <section className={layout.section} >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          IGORAZA Industries
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Igoraza Industrials is a dynamic and innovative startup that offers a range of workshops and programs to help young professionals and entrepreneurs reach their full potential. Our programs are designed to provide participants with the skills, knowledge, and experience they need to succeed in their careers and achieve their goals
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] mt-12">
      <h2 className={styles.heading2}>
      Our leads says about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className="flex flex-wrap sm:justify-start justify-center items-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
    <div className="mt-16">
    <h2 className="font-poppins text-center font-semibold xs:text-[48px] text-[40px] text-white w-full">
                Our Programs
            </h2>
    <div className="w-full flex justify-between items-center md:flex-row flex-col relative z-[1] text-center">
        </div>
        <div className="mx-auto flex flex-wrap sm:justify-start justify-center items-center w-full feedback-container relative z-[1]">
      <Box/>
    </div>
    </div>
  </div>
);

export default CardDeal;
