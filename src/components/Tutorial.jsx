import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  {
    image: slide1,
    continueButtonClass: 'translate-y-[-140px]',
    showContinue: true,
    showArrow: false,
  },
  {
    image: slide2,
    continueButtonClass: 'translate-y-[-140px]',
    showContinue: false,
    showArrow: true,
  },
  {
    image: slide3,
    continueButtonClass: 'translate-y-[-140px]',
    showContinue: false,
    showArrow: true,
  },
  {
    image: slide4,
    continueButtonClass: 'translate-y-[-140px]',
    showContinue: true,
    showArrow: false,
  },
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
  const total = tutorialSlides.length
  const navigate = useNavigate()

  useEffect(() => {
    if (show) setStep(0)
  }, [show])

  if (!show) return null

  const slide = tutorialSlides[step]
    const isFirst = step === 0
    const isLast = step === total - 1
    const showArrow = slide.showArrow ?? true
    const showContinue = slide.showContinue ?? false
  const continueButtonClass = slide.continueButtonClass ?? ''

  return (
    <div className="fixed inset-0 z-50 bg-black/45" onClick={onClose}>
      <div className="relative flex h-full w-full flex-col" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close tutorial"
          className="absolute left-6 top-60 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-3xl font-light text-white"
        >
          ✕
        </button>

        <div className="flex flex-1 items-center justify-center px-4 pt-16 pb-32 sm:px-8 sm:pt-20 sm:pb-36">
          <img
            src={slide.image}
            alt={slide.title || `Tutorial slide ${step + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="absolute bottom-50 left-0 right-0 z-10 bg-[transparent] px-5 pb-6 pt-10 sm:px-8 sm:pb-8">
          <div className="justify-center gap-0">
            {tutorialSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === step ? 'bg-[transparent]' : 'w-2 bg-transparent'
                }`}
              />
            ))}
          </div>

            <div className={`mt-[-140px] w-full ${continueButtonClass}`}>
              <div className="grid grid-cols-3 items-center px-4">
                <div className="flex justify-start">
                  {!isFirst ? (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="absolute translate-y-[80px] translate-x-[50px] h-12 justify-center rounded-lg px-4 text-sm font-bold uppercase text-white"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                </div>

                <div className="flex justify-end items-center">
                  {/* Right column: either image continue + arrow, or only arrow when showContinue is false */}
                  {showContinue ? (
                    <div className="flex items-center justify-end gap-0">
                      {isLast ? (
                        <button
                          onClick={() => {
                            onClose()
                            navigate('/quiz')
                          }}
                          aria-label="Go to quiz"
                        >
                          <img src={continueButton} alt="Go to quiz" className="h-12 w-auto select-none" />
                        </button>
                      ) : (
                        <button
                          onClick={() => setStep((s) => s + 1)}
                          aria-label="Continue"
                          className="transition hover:opacity-90"
                        >
                          <img src={continueButton} alt="Continue" className="h-12 w-auto select-none" />
                        </button>
                      )}

                      {showArrow && (isLast ? (
                        <button
                          onClick={() => {
                            onClose()
                            navigate('/quiz')
                          }}
                          aria-label="Go to quiz (arrow)"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:opacity-90"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-7 w-7"
                          >
                            <path d="M8 5l7 7-7 7" />
                          </svg>
                        </button>
                      ) : (
                        <button
                          onClick={() => setStep((s) => s + 1)}
                          aria-label="Continue (arrow)"
                            className="absolute translate-y-[100px] translate-x-[100px] h-12 w-12 items-center justify-center rounded-full bg-white/0 text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-7 w-7"
                          >
                            <path d="M8 5l7 7-7 7" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  ) : (
                    showArrow ? (
                      <div className="flex items-center justify-end">
                        {isLast ? (
                          <button
                            onClick={() => {
                              onClose()
                              navigate('/quiz')
                            }}  
                            aria-label="Go to quiz (arrow)"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:opacity-90"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-7 w-7"
                            >
                              <path d="M8 5l7 7-7 7" />
                            </svg>
                          </button>
                        ) : (
                          <button
                            onClick={() => setStep((s) => s + 1)}
                            aria-label="Continue (arrow)"
                            className="absolute translate-y-[105px] translate-x-[100px] h-12 w-12 items-center justify-center rounded-full bg-white/0 text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-7 w-7"
                            >
                              <path d="M8 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </div>
                    ) : (
                      <div />
                    )
                  )}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

function Tutorial() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [countdown, setCountdown] = useState(getCountdown)
  const [showTutorial, setShowTutorial] = useState(false)

  useEffect(() => {
    const carouselTimer = window.setInterval(() => {
      setActiveSlide((s) => (s + 1) % carouselSlides.length)
    }, 3000)

    const countdownTimer = window.setInterval(() => {
      setCountdown(getCountdown())
    }, 1000)

    setCountdown(getCountdown())

    return () => {
      window.clearInterval(carouselTimer)
      window.clearInterval(countdownTimer)
    }
  }, [])

  return (
    <main className="flex flex-1 items-start justify-center px-4 pt-3 pb-10 sm:pt-4 sm:pb-12 bg-[#E8F0F3] min-h-screen">
      <section className="flex w-full max-w-[410px] flex-col items-center">
        <br></br>
        <br />

        <div
          className="mb-10 bg-[#C7E4F1] px-4 pb-6 pt-[50px] shadow-[0_12px_28px_rgba(13,46,134,0.08)]"
          style={{
            clipPath:
              'polygon(3% 6%, 18% 1%, 38% 4%, 65% 8%, 80% 4%, 95% 10%, 97% 67%, 96% 95%, 75% 100%, 32% 92%, 22% 96%, 12% 98%, 3% 96%, 1% 50%, 4% 25%)',
          }}
        >
          <br />
          <h1
            className="mb-5 text-center text-[1.45rem] font-black uppercase tracking-[0.06em] text-[#1F4BA6] sm:text-[3rem]"
            style={{ fontFamily: '"Bowlby One", sans-serif' }}
          >
            Blå Sol 2026
          </h1>

          <div className="grid grid-cols-6 gap-x-10 gap-y-4 sm:gap-x-4">
            <br />
            <CountdownValue value={countdown.days} label="Days" />
            <CountdownValue value={countdown.hours} label="Hours" />
            <CountdownValue value={countdown.minutes} label="Minutes" />
            <CountdownValue value={countdown.seconds} label="Seconds" />
            <br />
          </div>
          <br />
        </div>

        <div className="relative w-full max-w-[410px] pt-[50px]">
          <br />
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-transparent">
            {carouselSlides.map((slide, i) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                onClick={() => setShowTutorial(true)}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out cursor-pointer ${
                  i === activeSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {carouselSlides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveSlide(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeSlide ? 'w-8 bg-[#1F4BA6]' : 'w-2.5 bg-[#9cb9e8]'
                }`}
              />
            ))}
          </div>
          <br />
        </div>

        <div className="mt-10 w-full flex justify-center pt-[50px]">
          <img
            src={HomeImages}
            alt="Artists lineup"
            className="w-full max-w-[430px] object-contain"
          />
        </div>
      </section>

      <TutorialModal show={showTutorial} onClose={() => setShowTutorial(false)} />
    </main>
  )
}

export default Tutorial