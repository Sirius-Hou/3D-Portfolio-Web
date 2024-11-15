import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Introduction */}
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#53C1DE]' />
          {/* Original purple gradient line */}
          {/* <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
          <div className='w-1 sm:h-80 h-40' style={{ background: 'linear-gradient(180deg, rgba(83, 193, 222, 1) 0%, rgba(83, 193, 222, 0) 100%)' }} />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm<span className='sm:hidden \n'><br /></span> <span className='text-[#53C1DE]'>Sirius Hou</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className='block sm:hidden'>
              4th-Year @University of Waterloo
            </span>
            <span className='hidden sm:block'>
              4th-Year Undergrad @ University of Waterloo
            </span>
            <span className='block sm:hidden'>
              CS | AI specialization
            </span>
            <span className='hidden sm:block'>
              Computer Science | AI specialization
            </span>
            
            Web & App Developer
          </p>

        </div>
      </div>

      {/* 3D Computer Model */}
      <ComputersCanvas />

      {/* The animated arrow that scrolls to the next section */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;