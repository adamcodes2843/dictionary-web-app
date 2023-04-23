import logo from '../../dictionary-web-app/starter-code/assets/images/logo.svg'
import downArrow from '../../dictionary-web-app/starter-code/assets/images/icon-arrow-down.svg'
import moon from '../../dictionary-web-app/starter-code/assets/images/icon-moon.svg'
import Image from 'next/image'

const Nav = ({setWord, setDarkMode, setFont, font, darkMode}) => {

  return (
    <nav className='w-full flex justify-between'>
        <Image src={logo} alt="logo" />
        <div className="flex items-center justify-between">
            <button type="button" className="flex items-center justify-around border-r-[1px] border-grayscale-300 pr-4 font-bold">
            {font = 'sans' ? 'Sans Serif' : font = 'serif' ? 'Serif' : 'Mono'}
            <Image src={downArrow} alt="font-select" className="ml-3" />
            </button>
            <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input 
                    type="checkbox" 
                    className="sr-only peer" 
                />
                <div className="w-10 h-5 bg-grayscale-400 hover:bg-purplish peer-focus:outline-none text-grayscale-100 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[18px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px]  after:rounded-full after:h-4 after:w-4 after:border after:transition-all dark:border-gray-600 after:bg-grayscale-100"></div>
                <span className="ml-3 text-sm font-medium text-grayscale-700 dark:text-gray-300"><Image src={moon} alt="dark mode toggle" /></span>
            </label>
        </div>

    </nav>
  )
}

export default Nav