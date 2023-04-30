import play from '../../dictionary-web-app/starter-code/assets/images/icon-play.svg'
import play2 from '../../dictionary-web-app/starter-code/assets/images/icon-play-hover.svg'
import Image from 'next/image'


const WordPhonetic = ({data}:any) => {

const audioList:any | undefined = data.phonetics.filter((x: any)=>{
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
        <button type="button" onClick={start} className='hover:bg-purplish fill-[#A445ED] rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" className="rounded-full w-14 h-14 md:w-20 md:h-20"><g fill="#A445ED" className="hover:fill-[#ffffff]" fillRule="evenodd"><circle className='bo' cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
        </button>
    </div>
  )
}

export default WordPhonetic