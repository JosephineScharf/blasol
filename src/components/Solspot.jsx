import { useState } from 'react'

import Footer from '../components/Footer'

import title from '../assets/solspot/solspottitle.svg'
import map from '../assets/solspot/map.svg'

import bluePin from '../assets/solspot/partypin.svg'
import greenPin from '../assets/solspot/discopin.svg'

import partyOverlay from '../assets/solspot/party.png'
import thankyouOverlay from '../assets/solspot/thankyou.png'

import discoOverlay from '../assets/solspot/disco.png'
import joinedOverlay from '../assets/solspot/joined.png'

export default function Solspot() {

	const [openOverlay, setOpenOverlay] = useState(null)
	const [joinedParty, setJoinedParty] = useState(false)
	const [joinedDisco, setJoinedDisco] = useState(false)

	const closeOverlay = () => {
		setOpenOverlay(null)
		setJoinedParty(false)
		setJoinedDisco(false)
	}

	return (
		<div className="relative h-screen overflow-hidden bg-[#E8F0F3]">

			{/* title */}
			<div className="absolute left-[58%] top-[20px] z-20 w-[350px] -translate-x-1/2">

				<img
					src={title}
					alt=""
					className="w-full"
				/>

			</div>

			{/* map viewport */}
			<section className="absolute left-1/2 top-[100px] z-10 h-[490px] w-[440px] -translate-x-1/2 overflow-auto">

				<div className="relative h-[900px] w-[700px]">

					{/* map */}
					<img
						src={map}
						alt=""
						className="
							absolute
							left-0
							top-0
							w-[700px]
							max-w-none
						"
					/>

					{/* LEFT / blue pin */}
					<button
						onClick={() => setOpenOverlay('party')}
						className="absolute left-[100px] top-[100px] z-20"
					>

						<img
							src={bluePin}
							alt=""
							className="w-[150px]"
						/>

					</button>

					{/* RIGHT / green pin */}
					<button
						onClick={() => setOpenOverlay('disco')}
						className="absolute left-[270px] top-[300px] z-20"
					>

						<img
							src={greenPin}
							alt=""
							className="w-[150px]"
						/>

					</button>

				</div>

			</section>

			{/* overlays */}
			{openOverlay && (

				<div
					className="
						absolute
						left-1/2
						top-[140px]
						z-50
						flex
						w-[440px]
						-translate-x-1/2
						justify-center
					"
				>

					{/* BLUE PIN FLOW */}
					{openOverlay === 'party' && (

						<div className="relative">

							{/* close */}
							<button
								onClick={closeOverlay}
								className="
									absolute
									right-[45px]
									top-[22px]
									z-50
									flex
									h-[32px]
									w-[32px]
									items-center
									justify-center
									rounded-full
									text-[36px]
									leading-none
									text-white
								"
							>
								×
							</button>

							<img
								src={joinedParty ? thankyouOverlay : partyOverlay}
								alt=""
								className="w-[340px]"
							/>

							{/* join button */}
							{!joinedParty && (

								<button
									onClick={() => setJoinedParty(true)}
									className="
										absolute
										left-1/2
										top-[56%]
										h-[90px]
										w-[150px]
										-translate-x-1/2
									"
								/>

							)}

						</div>

					)}

					{/* GREEN PIN FLOW */}
					{openOverlay === 'disco' && (

						<div className="relative">

							{/* close */}
							<button
								onClick={closeOverlay}
								className="
									absolute
									right-[45px]
									top-[22px]
									z-50
									flex
									h-[32px]
									w-[32px]
									items-center
									justify-center
									rounded-full
									text-[36px]
									leading-none
									text-white
								"
							>
								×
							</button>

							<img
								src={joinedDisco ? joinedOverlay : discoOverlay}
								alt=""
								className="w-[340px]"
							/>

							{/* join button */}
							{!joinedDisco && (

								<button
									onClick={() => setJoinedDisco(true)}
									className="
										absolute
										left-1/2
										top-[68%]
										h-[140px]
										w-[200px]
										-translate-x-1/2
									"
								/>

							)}

						</div>

					)}

				</div>

			)}

			<div className="absolute bottom-[230px] left-1/2 z-20 w-[340px] -translate-x-1/2 text-center text-[14px] leading-[1.4] text-[#2F4195]">
	 	<span className="font-[900] text-[#00AE4B]">Click on the sol-spot</span> to meet up with people that have the same music taste as you! <br/><br/> You can also <span className="font-[900] "> join a communal sol-spot</span> to meet more groups!
			</div>

			<Footer />

		</div>
	)
}