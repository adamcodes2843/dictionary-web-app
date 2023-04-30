import Link from 'next/link'

const HomePage = ({theme}:any) => {
  return (
    <div className='md:mt-12 mt-6 text-center mb-auto relative h-72 w-96 md:h-72 flex flex-col justify-between'>
        <h1 className={`text-3xl text-white font-bold`}>Dictionary App</h1>
        <h2 className="md:mt-2">Learn something</h2>
        <div className={`absolute clip-logo text-white h-40 w-44 mt-20 left-[6.5rem] flex flex-col justify-center p-5 ${theme === 'dark' ? 'bg-purplish' : 'bg-purplish' }`}>
            <div className={`absolute clip-inner-logo ${theme === 'dark' ? 'bg-grayscale-800 text-purplish' : 'bg-grayscale-100 text-purplish'} text-[10rem] w-36 h-32 right-4 flex justify-center items-center pb-4 font-sans`}>A</div>
        </div>
        <Link href="https://dictionaryapi.dev/" className="opacity-80 underline mt-auto">Free Dictionary API</Link>
    </div>
  )
}

export default HomePage