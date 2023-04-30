import search from '../../dictionary-web-app/starter-code/assets/images/icon-search.svg'
import Image from 'next/image'

type SearchBarProps = {
  handleChange: any,
  handleKeyDown: any,
  textInput: string,
  setWord: any,
  theme: string,
  word:string
}

const SearchBar = ({handleChange, handleKeyDown, textInput, setWord, theme, word}:SearchBarProps) => {
  return (
    <div className={`${theme === 'dark' ? 'bg-grayscale-600' : 'bg-grayscale-200'} w-full rounded-2xl h-12 md:h-14 mt-4 md:mt-8 cursor-pointer font-bold flex justify-between ${textInput === "" && word === "" ? 'border-[1px] border-reddish hover:border-reddish focus:border-reddish' : 'hover:border-purplish focus-within:border-purplish focus-within:border-[1px] hover:border-[1px] focus:border-[1px]'}`}>
        <input type='text' value={textInput} onChange={handleChange} onKeyDown={handleKeyDown} className={`w-full outline-none rounded-2xl px-6 ${theme === 'dark' ? 'bg-grayscale-600' : 'bg-grayscale-200'} cursor-pointer caret-purplish md:text-lg`} />
        <button type='button' onClick={()=>setWord(textInput)} className='px-6'>
          <Image src={search} alt='search' className='h-6 w-6'/>
        </button>
      </div>
  )
}

export default SearchBar