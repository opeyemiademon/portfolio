import React from 'react'

const Content = ({children}:any) => {
  return (
    <div className='flex-1 flex flex-col gap-5'>{children}</div>
  )
}

export default Content