const Meanings = ({data, setWord, setTextInput}) => {

    
    let meaningsArr = data.meanings
    
  return (
    <div className="w-full flex flex-col mb-auto">
        {meaningsArr.map((x:any, i:any) => {
             return (
                <div>
                    <div className="flex items-center w-full">
                    <h3 className='font-bold text-xl italic pr-4'>{x.partOfSpeech}</h3>
                    <div className='border-t-[1px] h-[1px] w-full border-grayscale-300' />
                    </div>
                    <h4 className="my-4 mt-8 md:mt-10 text-grayscale-400">Meaning</h4>
                    <ul className="list-disc marker:text-purplish ml-3 md:ml-9">
                        {x.definitions.map((y:any, i:number) => {
                            return (
                                <>
                                    <li key={`def ${i}`} className='mb-3 pl-3'>{y.definition}</li>
                                    {y.example && <p className="text-grayscale-400 pl-3 mb-3">"{y.example}"</p>}
                                </>
                            )
                        })}
                    </ul>
                    { x.synonyms.length > 0 ? 
                        <div className="flex w-full my-6 md:my-10">
                            <h4 className="text-grayscale-400 mr-6">Synonyms</h4>
                            <div>
                            {x.synonyms.map((z:any, i:any) => {
                                const newWord = () => {
                                    setWord(z)
                                    setTextInput('')
                                }
                                return (
                                    <button onClick={()=> setWord(()=>newWord())}className="text-purplish font-bold hover:underline mx-2">
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