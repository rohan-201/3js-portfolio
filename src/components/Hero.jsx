import {motion} from 'framer-motion';
import { styles } from '../styles';

import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx auto'>
      <div className={'absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5'}>
        <div className='flex flex-col justify-center items-center mt-5'>
           <div className='w-5 h-5 rounded-full bg-[hsl(284,100%,41%)]' />
           <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[hsl(284,100%,41%)]'> Drac</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full-stack web3 developer<br className='sm:block hidden' />
            I mostly work on solana.
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero