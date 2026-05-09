import { useEffect, useRef, useState } from 'react'

type Position = {
  left: string
  top: string
}

type Item = {
  id: number
  left: string
  top: string
  lifetime: number
  size: number
}

const getRandomPercent = (): Position => ({
  left: `${Math.floor(Math.random() * 80 + 10)}%`,
  top: `${Math.floor(Math.random() * 80 + 10)}%`,
})

const getRandomLifetime = (): number => Math.floor(Math.random() * 3200 + 800)

const getRandomSize = (): number => Math.floor(Math.random() * 50 + 20)

const RandomBox = () => {
  const [items, setItems] = useState<Item[]>([])
  const idCounter = useRef(1)
  const timeouts = useRef<Record<number, number>>({})

  useEffect(() => {
    const interval = window.setInterval(() => {
      const id = idCounter.current++
      const { left, top } = getRandomPercent()
      const lifetime = getRandomLifetime()
      const size = getRandomSize()

      setItems((prev) => [...prev, { id, left, top, lifetime, size }])

      const timeout = window.setTimeout(() => {
        setItems((prev) => prev.filter((item) => item.id !== id))
        delete timeouts.current[id]
      }, lifetime)

      timeouts.current[id] = timeout
    }, 600)

    return () => {
      window.clearInterval(interval)
      Object.values(timeouts.current).forEach((timeout) => window.clearTimeout(timeout))
      timeouts.current = {}
    }
  }, [])

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className='rectangulo1'
          style={{
            left: item.left,
            top: item.top,
            width: `${item.size}px`,
            height: `${item.size}px`,
            animation: `animate1 ${item.lifetime / 1000}s linear infinite`
          }}
        />
      ))}
    </>
  )
}

export default RandomBox
