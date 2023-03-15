import Link from 'next/link'
import HeroImg from './HeroImg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Hero = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='hero'>
      <div className='container hero__container'>
        <div data-aos='fade-left' className='hero__descr'>
          <div className='hero__descr-title'>Smart business credit cards</div>
          <div className='hero__descr-text'>
            Untitled is a next-gen financial technology company in the process
            of reinventing banking.
          </div>
          <button>Sign Up</button>
        </div>
        <div data-aos='fade-right' className='hero__image'>
          <HeroImg></HeroImg>
        </div>
      </div>
    </div>
  )
}

export default Hero
