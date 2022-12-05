'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| People on the World"
        textStyles="text-center"
      />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-[5%] right-[20%] w-[220px] h-[170px] p-[8px] rounded-[32px] bg-[#5d6680]">
          <img
            src="place-01.png"
            alt="place"
            className="w-full h-full"
          />
          <div className="flex absolute bottom-[55px] left-[28px] items-center">
            <div className="flex mr-[8px]">
              <div className="w-[24px] h-[24px] rounded-full relative z-10">
                <img
                  src="people-04.png"
                  alt="people"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[24px] h-[24px] ml-[-12px] relative rounded-full z-[9]">
                <img
                  src="people-05.png"
                  alt="people"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[24px] h-[24px] ml-[-12px] relative rounded-full z-[8]">
                <img
                  src="people-06.png"
                  alt="people"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-[12px] leading-[15px] text-white">+ 264 has joined</h3>
          </div>
          <h2 className="absolute bottom-[24px] left-[28px] font-bold text-[18px] text-white">
            Hawkins Labs
          </h2>
        </div>
        <div className="absolute top-[40%] left-[20%] w-[220px] h-[170px] p-[8px] rounded-[32px] bg-[#5d6680]">
          <img
            src="place-02.png"
            alt="place"
            className="w-full h-full"
          />
          <div className="flex absolute bottom-[55px] left-[28px] items-center">
            <div className="flex mr-[8px]">
              <div className="w-[24px] h-[24px] rounded-full relative z-10">
                <img
                  src="people-04.png"
                  alt="people"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[24px] h-[24px] ml-[-12px] relative rounded-full z-[9]">
                <img
                  src="people-05.png"
                  alt="people"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[24px] h-[24px] ml-[-12px] relative rounded-full z-[8]">
                <img
                  src="people-06.png"
                  alt="people"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-[12px] leading-[15px] text-white">+ 264 has joined</h3>
          </div>
          <h2 className="absolute bottom-[24px] left-[28px] font-bold text-[18px] text-white">
            The Upside Down
          </h2>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
