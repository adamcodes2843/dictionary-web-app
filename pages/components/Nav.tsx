import logo from '../../dictionary-web-app/starter-code/assets/images/logo.svg'
import downArrow from '../../dictionary-web-app/starter-code/assets/images/icon-arrow-down.svg'
import moon from '../../dictionary-web-app/starter-code/assets/images/icon-moon.svg'
import moon2 from '../../dictionary-web-app/starter-code/assets/images/icon-moon-dark.svg'
import Image from 'next/image'

type NavProps = {
  homeButton: any,
  setFont: any,
  font: string,
  popUp: any,
  setPopUp: any,
  toggleTheme: any,
  theme: string
}

const Nav = ({homeButton, setFont, font, popUp, setPopUp, toggleTheme, theme}: NavProps) => {

  const popUpFunc = () => {
    return popUp === 'hidden' ? setPopUp('absolute') : setPopUp('hidden')
  }

  const sansButton = () => {
    setFont('sans')
    setPopUp('hidden')
  }
  const serifButton = () => {
    setFont('serif')
    setPopUp('hidden')
  }
  const monoButton = () => {
    setFont('mono')
    setPopUp('hidden')
  }

  return (
    <nav className='w-full flex justify-between'>
        <button type="button" onClick={()=>homeButton()} >
        <Image src={logo} alt="logo" />
        </button>
        <div className="flex items-center justify-between relative">
            <button type="button" onClick={() => popUpFunc()} className="group relative flex items-center justify-around border-r-[1px] border-grayscale-300 px-4 font-bold">
              {font === 'sans' ? 'Sans Serif' : font === 'serif' ? 'Serif' : 'Mono'}
              <Image src={downArrow} alt="font-select" className="ml-3" />
            </button>
            <div className={`${popUp} ${theme === 'dark' ? 'bg-grayscale-600 shadow-purplish' : 'shadow-grayscale-300'} shadow-[0_3px_18px] absolute top-10 mt-1 right-28 flex flex-col w-44 p-4 items-start gap-3 rounded-xl bg-grayscale-100`}>
              <button type="button" onClick={() => sansButton()}  className={`font-sans hover:text-purplish ${font === 'sans' ? 'font-bold' : ''}`}>Sans Serif</button>
              <button type="button" onClick={() => serifButton()} className={`font-serif hover:text-purplish ${font === 'serif' ? 'font-bold' : ''}`}>Serif</button>
              <button type="button" onClick={() => monoButton()} className={`font-mono hover:text-purplish ${font === 'mono' ? 'font-bold' : ''}`}>Mono</button>
            </div>
            <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    onChange={() => toggleTheme()}
                    checked={theme === 'dark' ? true : false}
                />
                <div className={`w-10 h-5 hover:bg-purplish peer-focus:outline-none text-grayscale-100 dark:peer-focus:ring-blue-800 rounded-full peer ${theme === 'dark' ? 'bg-purplish' : 'bg-grayscale-400'} peer-checked:after:translate-x-[18px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px]  after:rounded-full after:h-4 after:w-4 after:border after:transition-all dark:border-gray-600 after:bg-grayscale-100`}></div>
                <span className="ml-3 text-sm font-medium">
                  {theme === 'dark' ?  <Image src={moon2} alt="dark mode toggle" className="fill-grayscale-100" /> : <Image src={moon} alt="dark mode toggle" className="fill-grayscale-100" />}
                </span>
            </label>
        </div>

    </nav>
  )
}

export default Nav