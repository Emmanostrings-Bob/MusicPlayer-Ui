import React from 'react'
import Feature from './Feature'


const Experience = () => {
  return (
    <div className="experience flex flex-col items-center justify-start p-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
          <img src={require("../img/Path 318.png")} alt="" className='w-[5rem]'/>

          <div className="heading mt-7 flex flex-col items-center text-[2rem]">
            <span>An Awesome App That Is Capable Of Changing Your Daily Life</span>
            <span>
                <b>Music experience</b>
            </span>
          </div>

         
          <div className="features flex items-center justify-around mt-[6rem] w-[100%]">
            <Feature icon='Group 2' title = 'For Live Music'/>
            <Feature icon='music icon' title = 'For Daily Music'/>
            <Feature icon='Group 4' title = 'For Artists'/>
          </div>
    </div>
  )
}

export default Experience
