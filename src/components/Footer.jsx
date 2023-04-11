import styles from "../style";
import { logo } from "../assets";
import bg from "../assets/bg.png"
import { footerLinks, socialMedia } from "../constants";
import {CgMail} from "react-icons/cg"

const Footer = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-center mr-10">
        <img
          src={bg}
          alt="IGORAZA"
          className="w-[272px] h-[77px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 text-center`}>
        Start with something simple and small, then expand over time
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
            {/* <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>
                Careers</li> */}
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
          <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Contacts
            </h4>
            <ul className="list-none mt-4">
                <li
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>
                  <a href="tel:+917726886026" target="_blank">+917726886026</a>
                </li>
                <li
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>
                  <a href="mailto:teamigoraza@gmail.com" target="_blank">teamigoraza@gmail.com</a>
                </li>
            </ul>
          </div>
          
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
      ⒸCopyright & All Rights Reserved 2023 @IGORAZA. Designed By <a href="https://www.igoraza.com" target="_blank" className="text-red-500">IGORAZA</a>
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
