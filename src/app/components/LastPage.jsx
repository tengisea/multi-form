import Image from 'next/legacy/image'


export const LastPage = () => {
  return (
    <div className="p-8 rounded-lg bg-white">
            <Image
               src="/pine-logo.png"
               width={60}
               height={60}
               alt="Picture of the author"/>
            <div className="flex font-bold text-2xl ">You're All Set 🔥</div>
            <div className="flex text-[#8E8E8E] text-lg ">We have received your submission. Thank you!</div>
        </div>
  );
};
