import Footer from '../components/Footer'

import background from '../assets/line-up/backgroundlineup.svg'
import lineupHero from '../assets/line-up/headerlineup.svg'
import lineupGraphic from '../assets/line-up/lineupgraph.svg'

export default function Lineup() {
	return (
		<div className="relative min-h-screen overflow-x-hidden bg-[#E8F0F3] pb-[300px]">

			{/* background */}
			<img
				src={background}
				alt=""
				className="absolute top-[100px] left-0 w-full"
			/>

			<div className="relative z-10">

				{/* blue hero banner */}
				<section className="relative">

					<img
						src={lineupHero}
						alt=""
						className="w-full"
					/>

					<div className="absolute inset-7 flex flex-col items-center gap-2 pt-1 text-center">
						<p className=" font-['Bowlby_One'] text-[20px] leading-none text-white">
							YOUR
						</p>

						<div className=" font-['Bowlby_One'] text-[36px] leading-[0.9] text-white">
						PERSONAL LINEUP
						</div>
					</div>

				</section>

				{/* lineup */}
				<section className="relative overflow-hidden">

	<div className="flex justify-center">

		<img
			src={lineupGraphic}
			alt="Personal lineup"
			className="
				mt-[-8px]
				min-w-[700px]
				max-w-none
			"
		/>

	</div>

</section>
<div className="h-[100px]" />
			</div>

			<Footer />

		</div>
	)
}