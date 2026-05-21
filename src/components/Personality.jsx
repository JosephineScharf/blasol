import personalityText from '../assets/personality/personalityname.png'; 
import personalityback from '../assets/personality/backdrop.png';
import personalitychameleon from '../assets/personality/chameleon.png'; 
import share from '../assets/personality/share.png';
import profilebtn from '../assets/personality/profilebtn.png';
import attributes from '../assets/personality/attributes.png';
import { useEffect, useState } from 'react'
import shareOverlay from '../assets/menu/sharescreen.svg'
import { Link } from 'react-router-dom';

export default function Personality() {
const [showShare, setShowShare] = useState(false)
const [shared, setShared] = useState(false)

useEffect(() => {

	if (showShare) {
		document.body.style.overflow = 'hidden'
	}

	else {
		document.body.style.overflow = 'auto'
	}

	return () => {
		document.body.style.overflow = 'auto'
	}

}, [showShare])

const handleFakeShare = () => {

	setShared(true)

	setTimeout(() => {

		setShared(false)
		setShowShare(false)

	}, 1500)

}

    return (
      <main className="flex bg-[#E8F0F3] flex-col justify-center items-center mx-auto w-full max-w-[470px] text-center gap-8 pb-[400px]">


        <section className="flex justify-center">
             <div
            style={{ fontFamily: '"Bowlby One", sans-serif' }}
            className=" text-xl font-black uppercase tracking-[0.01em]">
            Your music taste
             </div>
             </section>
          <section className="w-11/12 max-w-[470px] relative mt-6 grid justify-center">
            <img
            src={personalityText}
            alt="Personality Hero"
            className="flex flex-col justify-center max-w-[280px] object-contain "
            />
          </section>

          <section className="flex flex-col w-11/12 max-w-[470px] relative mt-8 grid justify-center">
              <img
              src={personalityback}
              alt="Personality Background"
              className="w-full h-auto object-cover z-0"
              />
              <img
              src={personalitychameleon}
              alt="Chameleon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] object-contain z-10"
              />  
          </section>

            <div className="w-[85%] max-w-[320px] rounded-[24px] bg-[#E8F0F3] px-5 py-4">

	<p className="text-[13px] leading-[1.5] text-[#4c62b8]">

		You drift between euphoric festival highs and reflective late-night feelings.
		Fans of Saveus, Benjamin Hav, and Lars Lilholt Band often score high here.

	</p>

</div>

            <h1
              style={{ fontFamily: '"Bowlby One", sans-serif' }}
              className="mt-8 text-3xl font-black uppercase tracking-[0.08em] text-[#2F4195]">
              Attributes
            </h1>

          <section className=" relative mt-6 grid justify-center">
             <img
             src={attributes}
             alt="Attributes"
             className="w-full h-auto object-cover object-cover z-0"
             />
             
   
<div className="
                fixed
                bottom-[86px]
                left-1/2
                z-40
                flex
                h-[120px]
                w-full
                max-w-[470px]
                -translate-x-1/2
                items-center
                justify-center
                bg-[#E8F0F3]">

	<div className="flex justify-center gap-6">

		<button
	onClick={() => setShowShare(true)}
	className="relative"
>

			<img
				src={share}
				alt="Share Button"
				className="w-[150px] h-[48px] object-contain"
			/>

			<span
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15px] font-semibold uppercase text-white"
				style={{ fontFamily: '"Poppins", sans-serif' }}
			>
				Share
			</span>

		</button>

		<Link to="/menu">

			<div className="relative">

				<img
					src={profilebtn}
					alt="Profile Button"
					className="w-[150px] h-[48px] object-contain"
				/>

				<span
					className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15px] font-semibold uppercase text-white"
					style={{ fontFamily: '"Poppins", sans-serif' }}
				>
					Profile
				</span>

			</div>

		</Link>

	</div>

</div>






          </section>

<div className="h-[180px]" />

      {showShare && (

	<div
		className="
			fixed
			left-0
			right-0
			top-[110px]
			bottom-0
			z-[9999]
			bg-[#E8F0F3]
		"
	>

		<img
			src={shareOverlay}
			alt=""
			className="h-full w-full object-cover"
		/>

		<button
			onClick={handleFakeShare}
			className="absolute left-[55px] top-[390px] h-[70px] w-[70px]"
		/>

		<button
			onClick={handleFakeShare}
			className="absolute left-[145px] top-[390px] h-[70px] w-[70px]"
		/>

		<button
			onClick={handleFakeShare}
			className="absolute left-[235px] top-[390px] h-[70px] w-[70px]"
		/>

		<button
			onClick={handleFakeShare}
			className="absolute left-[325px] top-[390px] h-[70px] w-[70px]"
		/>

		{shared && (

			<div
				className="
					absolute
					left-1/2
					top-1/2
					-translate-x-1/2
					-translate-y-1/2
					rounded-full
					bg-[#009BD6]
					px-6
					py-3
					text-white
				"
			>

				✓ Successfully shared

			</div>

		)}

		<button
			onClick={() => setShowShare(false)}
			className="
				absolute
				right-7
				top-[-18px]
				text-[42px]
				text-[#2F4195]
			"
		>
			×
		</button>

	</div>

)}


      </main>
    )
}

