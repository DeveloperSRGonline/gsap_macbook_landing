import { useEffect, useRef } from "react"

const Hero = () => {
  const videoRef = useRef()

  useEffect(()=> {
    if(videoRef.current) videoRef.current.playbackRate = 2;
  },[])
  return (
    <section id='hero'>
        {/* for the main center text */}
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="title" />
        </div>

        {/* for the macbook opening video */}
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline ></video>

        {/* simple button */}
        <button>Buy</button>

        <p>From $1599 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero