import logo from '../assets/header/logoandservicebar.svg'


function Header() {
  return (
    <header className="flex w-full justify-center pt-6 bg-[#E8F0F3]">
      <img
        src={logo}
        alt="Blasol logo"
        className="h-25"
      />
    </header>
  )
}

export default Header
