import React from 'react'


export default function Modal({ show, onClose, title, children, onContinue }) {
 if (!show) return null


 const clip =
   'polygon(3% 6%, 18% 1%, 38% 4%, 65% 8%, 80% 4%, 95% 10%, 97% 67%, 96% 95%, 75% 100%, 32% 92%, 22% 96%, 12% 98%, 3% 96%, 1% 50%, 4% 25%)'


 return (
   <div className="fixed inset-0 z-50 flex items-start justify-center pt-12">
     <div className="absolute inset-0 bg-black/60" onClick={onClose} />


     <div
       className="relative w-[410px] sm:w-[420px] md:w-[520px] text-white shadow-2xl"
       style={{ backgroundColor: 'transparent', clipPath: clip }}
     >
       <button
         onClick={onClose}
         aria-label="Close"
         className="absolute left-4 top-4 h-9 w-9 flex items-center justify-center rounded-full bg-white/0 text-white border border-white text-lg"
       >
         ✕
       </button>


       <div className="px-6 pt-8 pb-6 sm:px-8 sm:pt-10">
         <div className="mb-4">
           <div className="inline-block bg-[#07B1E0] px-3 py-1 transform -skew-x-6">
             <h1 className="text-[1.15rem] sm:text-2xl font-extrabold uppercase tracking-wide text-white">
               {title || 'GET TO KNOW'}
             </h1>
           </div>
         </div>


         <h2 className="mb-3 text-center text-lg sm:text-2xl font-extrabold uppercase">
           {children ? null : 'GET TO KNOW YOU, WHILE KNOWING US!'}
         </h2>


         <div className="mb-6 text-center text-sm sm:text-base px-2">
           {children ? (
             children
           ) : (
             <p>
               Try our music quiz now and determine <strong>what's your vibe</strong> & who is your crowd!
             </p>
           )}
         </div>


         <div className="flex justify-center">
           <button
             onClick={() => {
               if (onContinue) onContinue()
               else onClose()
             }}
             className="bg-[#07B1E0] px-6 py-2 rounded-md text-white font-bold uppercase shadow-md"
           >
             Continue
           </button>
         </div>
       </div>
     </div>
   </div>
 )
}


