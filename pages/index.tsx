import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useEffect,useState} from 'react'
import Nav from './Nav'


const inter = Inter({ subsets: ['latin'] })

export default function Home({}) {

  const [word, setWord] = useState<string>('keyboard')
  const [data, setData] = useState<any>({})
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [font, setFont] = useState<string>('sans')

  console.log(data)

useEffect(() => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then(response => response.json())
  .then(data => setData(data[0]))
}, [word])
  
  return (
    <main className={`flex flex-col items-center justify-between font-${font}`}>
      <Nav setWord={setWord} setDarkMode={setDarkMode} setFont={setFont} font={font} darkMode={darkMode} />
      {data.word}
    </main>
  )
}
