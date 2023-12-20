import React from 'react'

const SunComp = () => {
  return (
    <div className='-z-10 p-10'>{/* Sun SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32 "
      fill="none"
      stroke="#f8d347"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-36 h-36 mx-auto mt-4 rotate-sun glow"  
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg></div>
  )
}

export default SunComp