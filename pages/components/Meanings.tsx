type MeaningProps = {
    data: any,
    setWord: any,
    setTextInput: any
}

const Meanings = ({data, setWord, setTextInput}:MeaningProps) => {
    
    let meaningsArr = data.meanings
    
  return (
    <div className="w-full flex flex-col mb-auto">
        {meaningsArr.map((x:any, i:any) => {
             return (
                <div key={Math.random()} className="mb-6">
                    <div className="flex items-center w-full">
                    <h3 className='font-bold text-xl md:text-2xl italic pr-4'>{x.partOfSpeech}</h3>
                    <div className='border-t-[1px] h-[1px] w-full border-grayscale-300' />
                    </div>
                    <h4 className="my-4 mt-8 md:mt-10 text-grayscale-400">Meaning</h4>
                    <ul className="list-disc marker:text-purplish ml-3 md:ml-9">
                        {x.definitions.map((y:any, i:number) => {
                            return (
                                <li key={Math.random()}>
                                    <p className='mb-3 pl-3'>{y.definition}</p>
                                    {y.example && <p key={Math.random()} className="text-grayscale-400 pl-3 mb-3">"{y.example}"</p>}
                                </li>
                            )
                        })}
                    </ul>
                    { x.synonyms.length > 0 ? 
                        <div key={Math.random()} className="flex w-full mt-6 md:my-10">
                            <h4 className="text-grayscale-400 mr-6">Synonyms</h4>
                            <div>
                            {x.synonyms.map((z:any, i:any) => {
                                const newWord = () => {
                                    setWord(z)
                                    setTextInput('')
                                }
                                return (
                                    <button key={'syn' + i} onClick={()=> setWord(()=>newWord())}className="text-purplish font-bold hover:underline mx-2">
                                        {z}
                                    </button>
                                )
                            })}
                            </div>
                        </div> 
                    : ''
                    }
                </div>
             )
            })}
    </div>
  )
}

export default Meanings

//