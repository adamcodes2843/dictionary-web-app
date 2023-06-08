import face from '../../dictionary-web-app/starter-code/assets/images/icon-face.svg'
import Image from 'next/image'

const NoDefinition = () => {
  return (
    <div className="w-full  flex flex-col items-center mt-28 mb-auto">
        <Image src={face} alt="confused emoji" className="mb-6 h-16 w-16" />
        <h2 className="font-bold mb-6">No Definitions Found</h2>
        <p className='text-center text-grayscale-400'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at a later time or head to the web instead.</p>
    </div>
  )
}

export default NoDefinition