import logo from '../assets/header/logoandservicebar.svg'
import backButton from '../assets/backbutton.svg'

import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header() {
	const location = useLocation()
	const navigate = useNavigate()

	const showBack =
		location.pathname === '/solspot' ||
		location.pathname === '/lineup'

	return (
		<header className="relative flex w-full justify-center pt-6 bg-[#E8F0F3]">

			{showBack && (
				<button
					onClick={() => navigate(-1)}
					className="
						absolute
						left-[16px]
						top-20
						-translate-y-1/2
						z-20
						h-[80px]
						w-[80px]
						flex
						items-center
						justify-center
					"
				>
					<img
						src={backButton}
						alt=""
						className="w-[52px]"
					/>
				</button>
			)}

			<Link to="/tutorial">
				<img
					src={logo}
					alt="Blasol logo"
					className="h-25"
				/>
			</Link>

		</header>
	)
}

export default Header