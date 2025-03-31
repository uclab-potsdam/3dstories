import { useEffect, useState, useRef } from 'react'
import { useViewportStore } from '../components/ViewportManager'

const VideoBackground = ({ pathname }) => {
  const [pauseVideo, setPauseVideo] = useState(false)
  const videoRef = useRef(null) // Reference to the video element

  useEffect(() => {
    if (pathname === '/') {
      setPauseVideo(false)
      console.log('Play video', pauseVideo)
    } else {
      setPauseVideo(true)
      console.log('Pause video', pauseVideo)
    }
  }, [pathname])

  const setBackgroundVideoReady = useViewportStore(state => state.setBackgroundVideoReady)

  // Handle visibility change to restart the video when the tab becomes active
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && videoRef.current) {
        videoRef.current.play().catch(err => console.warn('Video play failed', err))
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  return (
    <div
      className={`background-video ${pauseVideo === false ? 'pointer-events-auto' : 'pointer-events-none'}`}
      style={{ opacity: pauseVideo === false ? 1 : 0 }}
    >
      <video
        ref={videoRef} // Attach ref to the video element
        src="video/intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => {
          console.debug('[Preloader] Video ready')
          setBackgroundVideoReady(true)
        }}
        onError={e => console.error('Video error:', e)}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      ></video>
    </div>
  )
}

export default VideoBackground
