'use client'

import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

interface Props {
  animationData: any
  height?: number
  width?: number
}

const LottieClient = ({ animationData, height = 200, width = 400 }: Props) => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    })

    return () => anim.destroy()
  }, [animationData])

  return <div ref={container} style={{ width, height }} />
}

export default LottieClient
