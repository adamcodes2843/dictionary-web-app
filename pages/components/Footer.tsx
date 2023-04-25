import Image from 'next/image'
import newWindow from '../../dictionary-web-app/starter-code/assets/images/icon-new-window.svg'
const Footer = ({data}) => {
    let source = data.sourceUrls[0]
  return (
    <footer className="flex flex-col border-t-[1px] border-grayscale-300 w-full py-4 mb-10">
        <a href={source} target="_blank" className="underline text-grayscale-400">Source</a>
        <a href={source} target="_blank" className="flex"><u className="mr-2">{source}</u><Image src={newWindow} alt="open new window" className="w-4 h-4"/></a>
    </footer>
  )
}

export default Footer