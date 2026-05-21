import backdrop from '../assets/menu/backdrop-profile.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import chameleon from '../assets/menu/camaleon-profile.png'
import arrow from '../assets/menu/arrow.svg'
import menu from '../assets/menu/menu.png'
import button from '../assets/menu/button.png'

import share from '../assets/menu/share.svg'
import shareOverlay from '../assets/menu/sharescreen.svg'

export default function Menu() {

	const [showShare, setShowShare] = useState(false)

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

	return (
		<>
			<main className="relative mx-auto w-full h-screen overflow-hidden">

				{/* background */}

				<div
					className="absolute inset-0 bg-center bg-cover bg-no-repeat"
					style={{
						backgroundImage: `url(${backdrop})`
					}}
				/>

				{/* share */}

				<button
					onClick={() => setShowShare(true)}
					className="absolute right-6 top-[30px] z-30"
				>

					<img
						src={share}
						alt="Share"
						className="w-10"
					/>

				</button>

				{/* content */}

				<div className="absolute top-12 z-10 flex flex-col gap-3">

					<img
						src={chameleon}
						alt=""
						className="h-full w-full translate-x-4"
					/>

					<div className="flex flex-col items-center">

						<Link to="/personality">

							<button className="border-0 bg-transparent p-0">

								<img
									src={button}
									alt=""
									className="h-auto w-32 -translate-y-12 translate-x-18"
								/>

							</button>

						</Link>

					</div>

					<Link to="/lineup">

						<section className="w-full max-w-2xl border-20 border-[#E8F0F3] bg-[#E8F0F3] py-60">

							<div
								className="flex items-center justify-between text-[15px] uppercase text-[#009BD6]"
								style={{
									fontFamily: "'Bowlby One', sans-serif"
								}}
							>

								PERSONAL LINE UP

								<img
									src={arrow}
									alt=""
									className="inline-block h-8 w-8"
								/>

							</div>

							<p className="mt-3 w-[255px] text-[15px] leading-[1.5]">

								view your suggested schedule
								for the festival based on your
								test results

							</p>

						</section>

					</Link>

					<section className="w-full max-w-2xl border-20 border-[#E8F0F3] bg-[#E8F0F3] py-60">

						<div
							className="flex items-center justify-between text-[15px] uppercase text-[#009BD6]"
							style={{
								fontFamily: "'Bowlby One', sans-serif"
							}}
						>

							COMMUNITY CHAT

							<img
								src={arrow}
								alt=""
								className="inline-block h-8 w-8"
							/>

						</div>

						<p className="mt-3 w-[255px] text-[15px] leading-[1.5]">

							join the community chat to meet up
							with people and exchange info

						</p>

					</section>

					<Link to="/solspot">

						<section className="w-full max-w-2xl border-20 border-[#E8F0F3] bg-[#E8F0F3] py-60">

							<div
								className="flex items-center justify-between text-[15px] uppercase text-[#009BD6]"
								style={{
									fontFamily: "'Bowlby One', sans-serif"
								}}
							>

								THE “SOL-SPOT”

								<img
									src={arrow}
									alt=""
									className="inline-block h-8 w-8"
								/>

							</div>

							<p className="mt-3 w-[255px] text-[15px] leading-[1.5]">

								find your groups designated
								meet up spot

							</p>

						</section>

					</Link>

				</div>

				{/* footer */}

				<section className="absolute bottom-[-260px] left-0 z-0 w-full">

					<img
						src={menu}
						alt=""
						className="pointer-events-none w-full object-cover"
					/>

				</section>

				{/* overlay */}

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
							className="
								h-full
								w-full
								object-cover
							"
						/>

						<button
							onClick={() => setShowShare(false)}
							className="
								absolute
								right-7
								top-0
								z-[10000]
								text-[42px]
								leading-none
								text-[#2F4195]
							"
						>
							×
						</button>

					</div>

				)}

			</main>
		</>
	)
}