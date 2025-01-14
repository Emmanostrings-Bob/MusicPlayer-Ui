import React, { useState } from 'react'
import MusicPlayer from './MusicPlayer'
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
const Search = () => {
    const [elementIsVisible, setElementIsVisible] = useState(false);
    const bg = {
      true: {
        left: "-44rem",
      },
      false: {
        left: "-50rem",
      },
    };
    const redimg = {
      true: {
        left: "18rem",
      },
      false: {
        left: "16rem",
      },
    };
    const musicimg = {
      true: {
        left: "2rem",
      },
      false: {
        left: "6rem",
      },
    };
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">

        <div className="left flex-1">
            <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{
                duration: 1,
                type: "ease-out",
            }}
            src={require('../img/backgraphics.png')} 
            alt="" className='absolute top-[22rem] left-[-47rem]'/>
            <motion.img 
            src={require('../img/d1.png')} alt="" className='absolute w-[16rem] top-[26rem]'/>{" "}
            <motion.img src={require('../img/d2.png')} alt="" className='w-[9rem] absolute top-[32.7rem] left-[7rem]'/>{' '}
            <motion.img
            variants={redimg}
            animate={`${elementIsVisible}`}
            transition={{
                duration: 1.2,
                type: "ease-out",
            }}
            src={require('../img/d3.png')} alt="" className='w-[9rem] top-[33rem] left-[17rem] absolute'/>
            <motion.img
            variants={musicimg}
            animate={`${elementIsVisible}`}
            transition={{
                duration: 1,
                type: "ease-out",
            }}
            src={require('../img/d4.png')} alt="" className='absolute w-[17rem] top-[50rem] left-[2rem]'/>

        </div>

        <div className="right flex flex-col items-start justify-start flex-1 h-[100%] p-[9rem]">    
            <div className="searchBar flex items-start w-[100%]">
                <input type="text" 
                placeholder='Enter the keyword or URL'
                className='flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]'/>
                <div className="seachIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
                    <img src={require('../img/search.png')} alt="" className='w-[1.5rem]'/>
                </div>
            </div>

            {/* tild icon */}
            <div className="tild flex justify-start mt-7 items-center w-[100%]">
                <img src={require("../img/Path 318.png")} alt="" className='w-[5rem]'/>
            </div>

            <div className="detail flex flex-col mt-5 text-4xl">
                <span>Search Music by</span>
                <span>
                    <b>Name or URL</b>
                </span>
                <span className='text-sm mt-3 text-[#4D586A]'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Dolorum culpa <br /> ipsam id quam.</span>
            </div>
            {/* Music player */}
            <VisibilitySensor
            onChange={(isVisible) => setElementIsVisible(isVisible)}
            >
                <MusicPlayer />
            </VisibilitySensor>
        </div>
    </div>
  )
}

export default Search
