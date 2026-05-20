import footerBg from '../assets/footer/footer-bg.svg'

import homeIcon from '../assets/footer/home.svg'
import programIcon from '../assets/footer/program.svg'
import artistsIcon from '../assets/footer/artists.svg'
import menuIcon from '../assets/footer/menu.svg'

function Footer() {
  return (
    <footer className="fixed bottom-0 left-1/2 z-50 w-full max-w-[430px] -translate-x-1/2">

      <img
        src={footerBg}
        alt=""
        className="w-full"
      />

      <nav className="absolute bottom-4 left-0 flex w-full justify-around">

        <button className="flex flex-col items-center gap-1">
          <img src={homeIcon} alt="" className="h-6" />
          <p className="text-[12px] text-[#3747A8]">
            Start
          </p>
        </button>

        <button className="flex flex-col items-center gap-1">
          <img src={programIcon} alt="" className="h-6" />
          <p className="text-[12px] text-[#3747A8]">
            Program
          </p>
        </button>

        <button className="flex flex-col items-center gap-1">
          <img src={artistsIcon} alt="" className="h-6" />
          <p className="text-[12px] text-[#3747A8]">
            Artister
          </p>
        </button>

        <button className="flex flex-col items-center gap-1">
          <img src={menuIcon} alt="" className="h-6" />
          <p className="text-[12px] text-[#3747A8]">
            Menu
          </p>
        </button>

      </nav>
    </footer>
  )
}

export default Footer