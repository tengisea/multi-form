import React from 'react'

export const LastPage = ({prevStep}) => {
  return (
    <div><p>Congrats</p>
    <button onClick={prevStep}> back</button></div>
  )
}
