import { quotes } from "../assets";
import styles, { layout } from "../style";


const Box = () => (
    <section id="features" className={`${styles.flexCenter} flex-col relative `}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
        <div className="flex flex-wrap justify-center">
  <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 p-4">
    <div className=" rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Collab Workshops</h2>
      <p className="text-gray-600">Our collab workshops bring together like-minded individuals who are passionate about entrepreneurship, innovation, and collaboration. Participants will work on real-world projects, learn from industry experts, and develop the skills they need to succeed in today's competitive business environment.</p>
    </div>
  </div>
  <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 p-4">
    <div className=" rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Incubation Programme</h2>
      <p className="text-gray-600">Our incubation programmes offer aspiring business owners the assistance and tools they need to start their own companies. Mentorship, training, funding, and access to other resources will be provided to participants in order to assist them in transforming their ideas into profitable businesses.</p>
    </div>
  </div>
  <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 p-4">
    <div className=" rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Internship Programs</h2>
      <p className="text-gray-600">Our internship programs offer mentorship opportunities and networking events to help participants grow their professional network and gain insights into the industry. We believe in investing in the next generation of talent and providing them with the resources and support they need to reach their full potential</p>
    </div>
  </div>
</div>

    </section>
    // <main className="grid lg:flex">
    //     <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    //         <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
    //         Collab Workshops
    //         </h4>
    //         <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    //         Our collab workshops bring together like-minded individuals who are passionate about entrepreneurship, innovation, and collaboration. Participants will work on real-world projects, learn from industry experts, and develop the skills they need to succeed in today's competitive business environment.
    //         </p>
    //     </div>
    //     <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    //         <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
    //         Incubation Programme
    //         </h4>
    //         <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    //         Our incubation programmes offer aspiring business owners the assistance and tools they need to start their own companies. Mentorship, training, funding, and access to other resources will be provided to participants in order to assist them in transforming their ideas into profitable businesses.
    //         </p>
    //     </div>
    //     <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    //         <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
    //         Internship Programs
    //         </h4>
    //         <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    //         Our internship programs offer mentorship opportunities and networking events to help participants grow their professional network and gain insights into the industry. We believe in investing in the next generation of talent and providing them with the resources and support they need to reach their full potential
    //         </p>
    //     </div>
    // </main>
);


export default Box;
