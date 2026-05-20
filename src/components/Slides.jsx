import React from 'react'
import continueButton from '../assets/tutorial/continue.png'


export default function Modal({ show, onClose, title, children, onContinue }) {
 if (!show) return null


 const clip =
   'polygon(3% 6%, 18% 1%, 38% 4%, 65% 8%, 80% 4%, 95% 10%, 97% 67%, 96% 95%, 75% 100%, 32% 92%, 22% 96%, 12% 98%, 3% 96%, 1% 50%, 4% 25%)'


 return (
  <div className="fixed inset-0 z-50 flex items-start justify-center pt-6">
    <div className="absolute inset-0 bg-black/60" onClick={onClose} />


    <div
      className="relative w-full max-w-[430px] text-white shadow-2xl"
      style={{ backgroundColor: '#1F4BA6', clipPath: clip, margin: '12px' }}
    >
       <button
         onClick={onClose}
         aria-label="Close"
         className="absolute left-4 top-4 h-9 w-9 flex items-center justify-center rounded-full bg-white/0 text-white border border-white text-lg"
       >
         ✕
       </button>


      <div className="px-6 pt-6 pb-8 sm:px-8 sm:pt-8 h-[86vh] flex flex-col justify-between">
        <div>
          <div className="mb-4">
            <div className="inline-block bg-[#07B1E0] px-3 py-1 transform -skew-x-6">
              <h1 className="text-[1.5rem] sm:text-3xl font-extrabold uppercase tracking-wide text-white">
                {title || 'GET TO KNOW'}
              </h1>
            </div>
          </div>

          <h2 className="mb-3 text-center text-2xl sm:text-3xl font-extrabold uppercase">
            {children ? null : 'GET TO KNOW YOU, WHILE KNOWING US!'}
          </h2>

          <div className="mb-6 text-center text-sm sm:text-base px-2">
            {children ? (
              children
            ) : (
              <p className="max-w-[320px] mx-auto">
                Try our music quiz now and determine <strong>what's your vibe</strong> & who is your crowd!
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={() => {
              if (onContinue) onContinue()
              else onClose()
            }}
            className="transition hover:opacity-90"
          >
            <img src={continueButton} alt="Continue" className="h-12 w-auto select-none" />
          </button>
        </div>
      </div>
     </div>
   </div>
 )
}


