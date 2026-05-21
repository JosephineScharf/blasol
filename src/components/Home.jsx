import { Link } from 'react-router-dom'

const links = [
	{ to: '/tutorial', label: 'Tutorial' },
	{ to: '/lineup', label: 'Lineup' },
	{ to: '/solspot', label: 'Solspot' },
	{ to: '/quiz', label: 'Quiz' },
	{ to: '/personality', label: 'Personality' },
	{ to: '/menu', label: 'Menu' },
]

export default function Home() {
	return (
		<main className="flex justify-center px-4 py-8">
			<section className="w-full bg-#E8F0F3 px-5 py-8">
				<h1 className="text-center text-3xl font-black uppercase tracking-[0.08em] text-[#2F4195]">
					Blå Sol
				</h1>
				<p className="mt-3 text-center text-sm text-[#4c62b8]">
					Choose a screen to open.
				</p>

				<div className="mt-6 grid grid-cols-2 gap-3">
					{links.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className="rounded-2xl bg-[#2F4195] px-4 py-4 text-center text-sm font-bold uppercase tracking-[0.06em] text-white shadow-md transition hover:bg-[#22306f]"
						>
							{link.label}
						</Link>
					))}
				</div>
			</section>
		</main>
	)
}
