import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ children, header, position }) => {
  const [isVisible, setIsVisible] = useState(false)

  const showTooltip = () => setIsVisible(true)
  const hideTooltip = () => setIsVisible(false)

  const tooltipPosition = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2'
  }[position]

  const trianglePosition = {
    top: 'bottom-0 mb-[-6px]',
    bottom: 'top-0 mt-[-6px]',
    left: 'right-0 mr-[-6px]',
    right: 'left-0 ml-[-6px]'
  }[position]

  return (
    <div className="relative flex flex-col items-center">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="cursor-pointer"
        tabIndex={0}
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={`absolute z-10 w-64 p-4 rounded shadow-lg bg-white text-gray-800 ${tooltipPosition} transition duration-150 ease-in-out`}
          role="tooltip"
        >
          <svg
            className={`absolute w-2 h-2 fill-current text-white ${trianglePosition}`}
            viewBox="0 0 20 10"
          >
            <polygon points={position === 'top' || position === 'bottom' ? '0,10 10,0 20,10' : '0,10 10,20 0,0'} />
          </svg>
          {header && <p className="text-sm font-bold pb-1">{header}</p>}
          <div className="text-xs">{children}</div>
        </div>
      )}
    </div>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
}

Tooltip.defaultProps = {
  position: 'top'
}

export default Tooltip
