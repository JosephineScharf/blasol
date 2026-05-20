
import { useEffect, useState } from 'react'
import banner1 from '../assets/tutorial/banner1.png'
import banner2 from '../assets/tutorial/2banner.png'
import banner3 from '../assets/tutorial/banner3.png'
import HomeImages from '../assets/tutorial/artists.png'
import Modal from './Slides'


const TARGET_DATE = new Date(2026, 5, 6, 0, 0, 0)


const slides = [
 {
   src: banner1,
   alt: 'Blå Sol banner 1',
 },
 {
   src: banner2,
   alt: 'Blå Sol banner 2',
 },
 {
   src: banner3,
   alt: 'Blå Sol banner 3',
 },
]


function getCountdown() {
 const difference = TARGET_DATE.getTime() - Date.now()


 if (difference <= 0) {
   return { days: 0, hours: 0, minutes: 0, seconds: 0 }
 }


 const totalSeconds = Math.floor(difference / 1000)


 return {
   days: Math.floor(totalSeconds / 86400),
   hours: Math.floor((totalSeconds % 86400) / 3600),
   minutes: Math.floor((totalSeconds % 3600) / 60),
   seconds: totalSeconds % 60,
 }
}
// Countdown Values
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


function Tutorial() {
 const [activeSlide, setActiveSlide] = useState(0)
 const [countdown, setCountdown] = useState(getCountdown)
 const [showModal, setShowModal] = useState(false)
 const [modalSlide, setModalSlide] = useState(null)
 const [modalStage, setModalStage] = useState(1)


 useEffect(() => {
   // carousel advances every 3s
   const carouselTimer = window.setInterval(() => {
     setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length)
   }, 3000)


   // countdown updates every 1s
   const countdownTimer = window.setInterval(() => {
     setCountdown(getCountdown())
   }, 1000)


   // initialize immediately
   setCountdown(getCountdown())


   return () => {
     window.clearInterval(carouselTimer)
     window.clearInterval(countdownTimer)
   }
 }, [])


 return ( // Main content area with countdown and carousel --->
   <main className="flex flex-1 items-start justify-center px-4 pt-3 pb-10 sm:pt-4 sm:pb-12">
     <section className="flex w-full max-w-[410px] flex-col items-center">
       <br></br>
       <div
         className="mb-10 bg-[#C7E4F1] px-4 pb-6 pt-[50px] shadow-[0_12px_28px_rgba(13,46,134,0.08)]"
         style={{
           clipPath:
             'polygon(3% 6%, 18% 1%, 38% 4%, 65% 8%, 80% 4%, 95% 10%, 97% 67%, 96% 95%, 75% 100%, 32% 92%, 22% 96%, 12% 98%, 3% 96%, 1% 50%, 4% 25%)',
         }}
       >
       <br></br>
         <h1
           className="mb-5 text-center text-[1.45rem] font-black uppercase tracking-[0.06em] text-[#1F4BA6] sm:text-[3rem]"
           style={{ fontFamily: '"Bowlby One", sans-serif' }}
         >
           Blå Sol 2026
         </h1>


         <div className="grid grid-cols-6 gap-x-10 gap-y-4 sm:gap-x-4">
           <br></br>
           <CountdownValue value={countdown.days} label="Days" />
           <CountdownValue value={countdown.hours} label="Hours" />
           <CountdownValue value={countdown.minutes} label="Minutes" />
           <CountdownValue value={countdown.seconds} label="Seconds" />
           <br></br>
         </div>
         <br></br>
       </div>
        
       <div className="relative w-full max-w-[410px] pt-[50px]">
         <br></br>
         <div className="relative aspect-[16/10] w-full overflow-hidden bg-transparent">
           {slides.map((slide, slideIndex) => (
             <img
               key={slide.src}
               src={slide.src}
               alt={slide.alt}
               onClick={() => {
                 setModalSlide(slide)
                 setModalStage(1)
                 setShowModal(true)
               }}
               className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out cursor-pointer ${
                 slideIndex === activeSlide ? 'opacity-100' : 'opacity-0'
               }`}
             />
           ))}
         </div>
         <div className="mt-4 flex items-center justify-center gap-2">
           {slides.map((slide, slideIndex) => (
             <button
               key={slide.src}
               type="button"
               onClick={() => setActiveSlide(slideIndex)}
               aria-label={`Show slide ${slideIndex + 1}`}
               className={`h-2.5 rounded-full transition-all duration-300 ${
                 slideIndex === activeSlide ? 'w-8 bg-[#1F4BA6]' : 'w-2.5 bg-[#9cb9e8]'
               }`}
             />
           ))}
         </div>
         <br></br>
       </div>


       <div className="mt-10 w-full flex justify-center pt-[50px]">
         <img
           src={HomeImages}
           alt="Artists lineup"
           className="w-full max-w-[430px] object-contain"
         />
       </div>
     </section>
     <Modal
       show={showModal}
       onClose={() => setShowModal(false)}
       title={modalSlide?.alt}
     >
       {modalSlide &&
          (modalStage === 1 ? (
            <div className="w-full">
              <div className="flex flex-col items-center text-center px-2">
                <div className="inline-block transform -skew-x-6 bg-[#07B1E0] px-4 py-2 -mt-2">
                  <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-white" style={{fontFamily: '"Bowlby One", sans-serif'}}>
                    GET TO KNOW
                  </h1>
                </div>

                <div className="inline-block transform -skew-x-6 bg-[#07B1E0] px-4 py-2 mt-2">
                  <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-white" style={{fontFamily: '"Bowlby One", sans-serif'}}>
                    YOURSELF!
                  </h1>
                </div>

                <h2 className="mt-6 mb-3 text-center text-lg sm:text-2xl font-extrabold uppercase text-white">
                  GET TO KNOW YOU, WHILE KNOWING US!
                </h2>

                <p className="max-w-[320px] text-white/90 mb-6">
                  Try our music quiz now and determine <strong>what's your vibe</strong> & who is your crowd!
                </p>

                <button
                  onClick={() => setModalStage(2)}
                  className="bg-[#07B1E0] text-white px-6 py-3 rounded shadow-md font-extrabold uppercase"
                >
                  CONTINUE
                </button>
              </div>
              <div className="mt-6">
                {/* decorative bottom area: show a cropped version of the slide image for visual continuity */}
                <img src={modalSlide.src} alt="decor" className="w-full h-28 object-cover mt-4 rounded-b-md" />
              </div>
            </div>
          ) : (
            <div className="w-full text-center">
              <p className="mb-4 text-white/90">More about: {modalSlide.alt}</p>
              <img src={modalSlide.src} alt={modalSlide.alt} className="w-full h-auto object-contain mb-4" />
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setModalStage(1)}
                  className="bg-white text-[#2F4195] px-4 py-2 rounded"
                >
                  Back
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-[#07B1E0] text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          ))}
     </Modal>
   </main>
  
 )
}


export default Tutorial
