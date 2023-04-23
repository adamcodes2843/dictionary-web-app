const Meanings = ({data}) => {

    let meaningsArr = data.meanings
    console.log(meaningsArr)
  return (
    <div className="w-full flex flex-col">
        {meaningsArr.map((x:any, i:any) => {
             return (
                <div key={i}>
                    <div className="flex items-center w-full">
                    <h3 className='font-bold text-xl italic pr-4'>{x.partOfSpeech}</h3>
                    <div className='border-t-[1px] h-[1px] w-full border-grayscale-300' />
                    </div>
                    <h4 className="my-4 text-grayscale-400">Meaning</h4>
                    <ul className="list-disc marker:text-purplish ml-3">
                        {x.definitions.map((y:any, i:any) => {
                            return (
                                <li key={i} className='mb-3 pl-3'>{y.definition}</li>
                            )
                        })}
                    </ul>
                </div>
             )
            })}
    </div>
  )
}

export default Meanings

//