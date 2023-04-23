import play from '../../dictionary-web-app/starter-code/assets/images/icon-play.svg'
import Image from 'next/image'

const WordPhonetic = ({data}) => {
  
  return (
    <div className='w-full flex justify-between items-center my-2'>
      <div className="flex flex-col ">
        <h1 className="font-bold text-3xl pb-2">{data.word}</h1>
        <h2 className="text-purplish text-lg font-semibold">{data.phonetic}</h2>
      </div>
      <button type="button" >
      <Image src={play} alt="pronunciation" className="w-12 h-12" />
      </button>
    </div>
  )
}

export default WordPhonetic