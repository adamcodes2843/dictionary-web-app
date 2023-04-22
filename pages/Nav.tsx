import logo from '../dictionary-web-app/starter-code/assets/images/logo.svg'
import downArrow from '../dictionary-web-app/starter-code/assets/images/icon-arrow-down.svg'
import moon from '../dictionary-web-app/starter-code/assets/images/icon-moon.svg'
import Image from 'next/image'
const Nav = ({setWord, setDarkMode, setFont, font, darkMode}) => {

  return (
    <nav className='w-full flex justify-between border-2'>
        <Image src={logo} alt="logo" />
        <div className="flex items-center justify-between">
            <button type="button" className="flex items-center justify-around border-r-[1px] border-grayscale-300 pr-4">
            {font = 'sans' ? 'Sans Serif' : font = 'serif' ? 'Serif' : 'Mono'}
            <Image src={downArrow} alt="font-select" className="ml-4" />
            </button>
            <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-grayscale-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-grayscale-700 dark:text-gray-300"><Image src={moon} alt="dark mode toggle" /></span>
            </label>
        </div>

    </nav>
  )
}

export default Nav