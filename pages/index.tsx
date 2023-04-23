import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useEffect,useState} from 'react'
import Nav from './components/Nav'
import WordPhonetic from './components/WordPhonetic'
import SearchBar from './components/SearchBar'
import Meanings from './components/Meanings'


const inter = Inter({ subsets: ['latin'] })

export default function Home({}) {

  const [word, setWord] = useState<string>('keyboard')
  const [data, setData] = useState<any | null>(null)
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [font, setFont] = useState<string>('sans')
  const [textInput, setTextInput] = useState<string>('')

  console.log(data)

useEffect(() => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then(response => response.json())
  .then(data => setData(data[0]))
}, [word])

const handleChange = (e: any) => {
  setTextInput(e.target.value)
}

const handleKeyDown = (e: any) => {
  if(e.key === 'Enter') {
    setWord(textInput)
  }
}
  
  return (
    <main className={`flex flex-col items-center justify-between gap-3 font-${font}`}>
        <Nav setWord={setWord} setDarkMode={setDarkMode} setFont={setFont} font={font} darkMode={darkMode} />
        <SearchBar handleChange={handleChange} handleKeyDown={handleKeyDown} textInput={textInput} setWord={setWord}/>
        {data && <WordPhonetic data={data} />}
        {data && <Meanings data={data} />}
    </main>
  )
}
