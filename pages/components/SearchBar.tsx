import search from '../../dictionary-web-app/starter-code/assets/images/icon-search.svg'
import Image from 'next/image'

const SearchBar = ({handleChange, handleKeyDown, textInput, setWord, theme, word}) => {
  return (
    <div className={`${theme === 'dark' ? 'bg-grayscale-500' : 'bg-grayscale-200'} w-full rounded-2xl h-12 mt-4 cursor-pointer hover:border-purplish focus-within:border-purplish focus-within:border-[1px] hover:border-[1px] focus:border-[1px] font-bold flex justify-between`}>
        <input type='text' value={textInput} onChange={handleChange} onKeyDown={handleKeyDown} className={`w-full outline-none rounded-2xl px-6 ${theme === 'dark' ? 'bg-grayscale-500' : 'bg-grayscale-200'} cursor-pointer caret-purplish`} />
        <button type='button' onClick={()=>setWord(textInput)} className='px-6'>
          <Image src={search} alt='search' className='h-6 w-6'/>
        </button>
      </div>
  )
}

export default SearchBar