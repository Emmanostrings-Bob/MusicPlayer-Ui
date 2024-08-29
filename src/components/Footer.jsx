import React from 'react'
import CenterMenu from './CenterMenu'
import { Facebook, X, LinkedIn, YouTube } from '@mui/icons-material'


const Footer = () => {
    const SocialStyles = 'rounded-full border-2 border-white p-2 mr-[5rem]'
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
        <CenterMenu />

        <div className="flex w-[100%] justify-center mt-14">
            <div className={SocialStyles}>
                <Facebook />
            </div> {" "}
            <div className={SocialStyles}>
                <X />
            </div>{" "}
            <div className={SocialStyles}>
                <YouTube />
            </div>{" "}
            <div className={SocialStyles}>
                <LinkedIn />
            </div>
        </div>

         <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit sequi ipsam veritatis impedit.
        </span>
        
    </div>
  )
}

export default Footer
