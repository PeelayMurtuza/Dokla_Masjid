import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion";


const LandingPage = () => {
  const titles = ["WELCOME TO ", "DOKLA MASJID", "ٱلسَّلَامُ عَلَيْكُمْ"];
  const below_border = [
    "Open For All",
    "Providing Real Time Information Related to Dokla Masjid",
  ];
  return (  
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen  pt-1"
    >
      <div className="TextStructure mt-40 px-20  ">
        {titles.map((title, index) => (
          <div key={index} className="Masker  ">
            <div className="w-fit flex items-center overflow-hidden ">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.6, -0.05, 0.01, 0.99], duration: 3 }}
                  className="mr-[0.5vw] w-[9vw] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBjXAEJgQSzx37D6n3FGnr6mb4mdOAZmSwg&s"
                ></motion.div>
              )}
              <h1 className="uppercase text-[7vw] leading-[6vw] tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-bold py-4 px-7 ">
                {title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center tracking-tight leading-none py-5 px-20 ">
        {below_border.map((phrase, index) => (
          <p key={index} className="text-md  font-bold  ">
            {phrase}
          </p>
        ))}

        <div className="start flex gap-5 items-center">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full uppercase  text-md  text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400  text-sm  text-center me-2 mb-2 font-bold hover:scale-110 cursor-pointer">
           Donate 
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center ">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;