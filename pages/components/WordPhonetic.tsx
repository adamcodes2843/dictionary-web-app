import play from '../../dictionary-web-app/starter-code/assets/images/icon-play.svg'
import Image from 'next/image'

const WordPhonetic = ({data}) => {

const audioList = data.phonetics.filter((x: any)=>{
  if (x.audio !== ''){
    return x.audio
  }
})

  const start = () => {
      if (audioList.length > 0){
        let audio = new Audio(audioList[0].audio)
      audio.play()
      } 
  }
  
  return (
    <div className='w-full flex justify-between items-center my-4 mt-2 md:my-6'>
      <div className="flex flex-col ">
        <h1 className="font-bold text-[2.2rem] md:text-[3.5rem] md:py-6">{data.word}</h1>
        <h2 className="text-purplish text-xl md:text-2xl">{data.phonetic}</h2>
      </div>
        <button type="button" onClick={start}>
        <Image src={play} alt="pronunciation" className="w-12 h-12 md:w-16 md:h-16 rounded-full hover:fill-grayscale-100"/>
        </button>
    </div>
  )
}

export default WordPhonetic