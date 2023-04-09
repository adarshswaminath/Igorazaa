import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

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
    <div className="flex flex-wrap sm:justify-start justify-center items-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </div>
);

export default CardDeal;
