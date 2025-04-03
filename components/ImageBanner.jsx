'use client'

import { useState, useRef, useEffect } from "react"

export default function ImageBanner() {

  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef()

  //if the image is completely loaded (nextJS chaces images)
  useEffect(()=>{
    if (imgRef.current.complete){
      setIsLoaded(true)
    }
  },[])

  return (
    <div className="banner-images">
      <img className="low-res-img" src="low_res/banner.jpeg" alt="banner-low-res"/>
      <img ref={imgRef} className="high-res-img" src="med_res/banner.png" alt="banner-high-res" style={{opacity: isLoaded ? 1 : 0}} 
      onLoad={()=>{
        //when the high res image is completely loaded, this callback will be executed 
        //and the intention is to make this initially invisible image, visible
        setIsLoaded(true)
      }}/>
      <div className="cta-btns-container">
        <div>
          <div>
            <h3>Welcome to</h3>
            <h1>Fundog</h1>
          </div>
          <div>
            <button>Shop stickers</button>
            <button>Shop planner</button>
          </div>
        </div>
      </div>
    </div>
  )
}
