'use client'
import React, { useEffect, useRef } from 'react'

const cardData = [
  {
    title: 'Strategy Optimization',
    description: 'Analyze game strategies and improve your ranking.',
    image: 'https://cruip-tutorials.vercel.app/spotlight-effect/card-01.png'
  },
  {
    title: 'Real-Time Connection',
    description: 'Get live stats of matches and players.',
    image: 'https://cruip-tutorials.vercel.app/spotlight-effect/card-02.png'
  },
  {
    title: 'Boost Your Performance by Learning',
    description: 'Enhance your skills and gameplay with insightful learning tools.',
    image: 'https://cruip-tutorials.vercel.app/spotlight-effect/card-03.png'
  }
]

const FeatureCard = ({ title, description, image }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      const rect = cardRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      cardRef.current.style.setProperty('--mouse-x', `${x}px`)
      cardRef.current.style.setProperty('--mouse-y', `${y}px`)
    }

    const card = cardRef.current
    card.addEventListener('mousemove', handleMouseMove)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div ref={cardRef} className="relative h-full bg-backgroundDarkerGray rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-backgroundMediumGray before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-backgroundLightGray after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
      <div className="relative h-full bg-backgroundDarkerGray p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
          <div className="absolute inset-0 translate-z-0 bg-backgroundDarkerGray rounded-full blur-[80px]"></div>
        </div>
        <div className="flex flex-col h-full items-center text-center">
          <div className="relative inline-flex mb-5">
            <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-backgroundLightGray" aria-hidden="true"></div>
            <img className="inline-flex" src={image} width="200" height="200" alt={title} />
          </div>
          <h2 className="text-xl text-slate-200 font-bold mb-1">{title}</h2>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  )
}

const FeatureCards = () => {
  return (
      <main className="relative flex flex-col justify-center bg-backgroundDark2">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group" data-spotlight>
            {cardData.map((card, index) => (
              <FeatureCard key={index} title={card.title} description={card.description} image={card.image} />
            ))}
          </div>
        </div>
      </main>
  )
}

export default FeatureCards
