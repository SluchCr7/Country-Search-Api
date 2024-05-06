import React from 'react'

const OptionCard = (prop : any) => {
  return (
    <div className='option'>
      <span className='title'>{ prop.title }</span>
        <span className='value'>{prop.data}</span>
    </div>
  )
}

export default OptionCard