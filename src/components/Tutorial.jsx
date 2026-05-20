import { useEffect, useState } from 'react'
import banner1 from '../assets/tutorial/banner1.png'
import banner2 from '../assets/tutorial/2banner.png'
import banner3 from '../assets/tutorial/banner3.png'
import HomeImages from '../assets/tutorial/artists.png'
import slide1 from '../assets/tutorial/slide1.png'
import slide2 from '../assets/tutorial/slide2.png'
import slide3 from '../assets/tutorial/slide3.png'
import slide4 from '../assets/tutorial/slide4.png'
import continueButton from '../assets/tutorial/continue.png'

const TARGET_DATE = new Date(2026, 5, 6, 0, 0, 0)

const carouselSlides = [
  { src: banner1, alt: 'Blå Sol banner 1' },
  { src: banner2, alt: 'Blå Sol banner 2' },
  { src: banner3, alt: 'Blå Sol banner 3' },
]

const tutorialSlides = [
  { image: slide1 },
  { image: slide2 },
  { image: slide3 },
  { image: slide4 },
]

function getCountdown() {
  const difference = TARGET_DATE.getTime() - Date.now()
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  const totalSeconds = Math.floor(difference / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

function CountdownValue({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="min-w-[50px] text-[2.35rem] font-black leading-none tracking-[0.06em] text-[#0795D9] sm:text-[3rem]"
        style={{ fontFamily: '"Bowlby One", sans-serif' }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div className="mt-3 text-[0.8rem] font-black uppercase tracking-[0.02em] text-[#3157D9] sm:text-[0.9rem]">
        {label}
      </div>
    </div>
  )
}

function TutorialModal({ show, onClose }) {
  const [step, setStep] = useState(0)
}