import { useState, useRef, useEffect } from 'react'
import { BallCanvas } from './canvas'
import { sectionwrapper } from '../hoc'
import { technologies } from '../constants'

const LazyBall = ({ icon, name }) => {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className='w-28 h-28' key={name}>
      {visible ? (
        <BallCanvas icon={icon} />
      ) : (
        <div className='w-full h-full rounded-full bg-tertiary' />
      )}
    </div>
  )
}

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <LazyBall
          key={technology.name}
          icon={technology.icon}
          name={technology.name}
        />
      ))}
    </div>
  )
}

export default sectionwrapper(Tech, "")