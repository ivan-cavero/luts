'use client'
import { useEffect, useState } from 'react'

export default function Statistics () {
  const [liveMatches, setLiveMatches] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMatches((prevLiveMatches) => prevLiveMatches + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const liveContainerStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#333',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    lineHeight: '1',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '10px',
    fontWeight: 'bold',
    marginRight: '12px'
  }

  const blinkingCircleStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'white',
    marginRight: '4px',
    animation: 'blinker 2s linear infinite'
  }

  const numberStyle = {
    fontVariantNumeric: 'tabular-nums',
    fontFamily: 'Roboto, monospace'
  }

  return (
    <div className="relative w-full flex items-center justify-center py-2 shadow-xl bg-backgroundDarkerGray text-white">
      <div className="flex items-center justify-center w-full max-w-3xl px-12">
        <div style={liveContainerStyle}>
          <div style={blinkingCircleStyle} />
          <span>LIVE</span>
        </div>
        <div style={numberStyle}>
          {liveMatches} matches
        </div>
      </div>
    </div>
  )
}
