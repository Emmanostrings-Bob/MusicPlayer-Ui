import React from 'react'

const Ads = () => {

    const imageStyles = 'border-[2px] border-[#232A4E] rounded-[13px]h-[3rem] w-[10rem]'

  return (
    <div className="download">
        <div className="download_images flex">
            <img src={require("../img/App Store.png")} alt="" className={imageStyles + ` mr-[2rem]`}/>
            <img src={require("../img/Google Play.png")} alt="" className={imageStyles} />
        </div>
    </div>
  )
}

export default Ads
