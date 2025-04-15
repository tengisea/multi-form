import Image from 'next/legacy/image'

export const Header = () => {
  return (
    <div>
        <Image
           src="/pine-logo.png"
           width={60}
           height={60}
           alt="Picture of the author"/>
        <div className="flex font-bold text-3xl ">Join Us! 😎</div>
        <div className="flex text-[#8E8E8E] text-lg ">Please provide all current information accurately.</div>
    </div>
  )
}
