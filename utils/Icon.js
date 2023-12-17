import React from 'react'
import dynamic from 'next/dynamic'

const IconComponent = React.memo(({ name, color = 'white', width = '24px', height = '24px', ...props }) => {
  if (!name) return null

  const DynamicIcon = dynamic(() => import(`../public/icons/${name}.svg`), {
    ssr: true
  })

  DynamicIcon.displayName = `${name}Icon`

  const style = { color, width, height, ...props.style }

  return <DynamicIcon style={style} {...props} />
})

IconComponent.displayName = 'IconComponent'

export default IconComponent
