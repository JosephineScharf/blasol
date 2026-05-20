import backdrop from '../assets/menu/backdrop-profile.png';
import { Link } from 'react-router-dom';
import chameleon from '../assets/menu/camaleon-profile.png';
import arrow from '../assets/menu/arrow.svg';
import menu from '../assets/menu/menu.png';
import button from '../assets/menu/button.png';


export default function Menu() {
	return (
		<>
			<main className="relative mx-auto w-full h-screen overflow-hidden">

				
				{/* Background */}
				<div
					className="absolute inset-0 bg-center bg-cover bg-no-repeat"
					style={{ backgroundImage: `url(${backdrop})` }}
				/>

				{/* Content */}
				<div className="absolute top-12 flex flex-col gap-8 z-10">
					<img src={chameleon} alt="Chameleon" className="w-full h-full translate-x-4" />

					<div className="flex flex-col items-center">
						<button className="p-0 bg-transparent border-0">
							<img src={button} alt="Edit Button" className="w-32 h-auto" />
						</button>
					</div>

					<section className="w-full max-w-2xl bg-[#E8F0F3] py-60 border-20 border-[#E8F0F3]">
						<h1
							className="text-2xl font-black uppercase text-[#009BD6] flex gap-24"
							style={{ fontFamily: "'Bowlby One', sans-serif" }}
						>
							PERSONAL LINE UP
							<img src={arrow} alt="Arrow" className="w-8 h-8 inline-block" />
						</h1>

						<p className="text-base font-black text-[#2F4195] mt-2">
							view your suggested schedule for the festival based on your test results
						</p>
					</section>

					<section className="w-full max-w-2xl bg-[#E8F0F3] py-60 border-20 border-[#E8F0F3]">
						<h1
							className="text-2xl font-black uppercase text-[#009BD6] flex gap-24"
							style={{ fontFamily: "'Bowlby One', sans-serif" }}
						>
							COMMUNITY CHAT
							<img src={arrow} alt="Arrow" className="w-8 h-8 inline-block" />
						</h1>

						<p className="text-base font-black text-[#2F4195] mt-2">
							join the community chat to meet up with people and exchange info before the festival starts
						</p>
					</section>

					<section className="w-full max-w-2xl bg-[#E8F0F3] py-60 border-20 border-[#E8F0F3]">
						<h1
							className="text-2xl font-black uppercase text-[#009BD6] flex gap-24"
							style={{ fontFamily: "'Bowlby One', sans-serif" }}
						>
							THE “SOL-SPOT” 
							<img src={arrow} alt="Arrow" className="w-8 h-8 inline-block" />
						</h1>

						<p className="text-base font-black text-[#2F4195] mt-2">
							find your groups designated meet up spot on the festival grounds
						</p>
					</section>
				</div>

				{/* Bottom menu image */}
				<section className="absolute bottom-[-260px] left-0 w-full z-0">
					<img src={menu} alt="Menu" className="w-full h-auto object-cover pointer-events-none" />
				</section>

			</main>
		</>
	)
}
