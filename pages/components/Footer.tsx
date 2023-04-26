import Image from 'next/image'
import newWindow from '../../dictionary-web-app/starter-code/assets/images/icon-new-window.svg'
const Footer = ({data}) => {
    let source = data.sourceUrls[0]
  return (
    <footer className="flex flex-col md:flex-row border-t-[1px] border-grayscale-300 w-full py-4 mb-10 md:mb-16 md:text-base">
        <a href={source} target="_blank" className="text-grayscale-400 md:pr-8">Source</a>
        <a href={source} target="_blank" className="flex"><u className="mr-2">{source}</u><Image src={newWindow} alt="open new window" className="w-4 h-4"/></a>
    </footer>
  )
}

export default Footer