import React from 'react'

export interface ReactComponentProps {
  message?: string
}

export const ReactComponent = (props: ReactComponentProps) => {
  const {
    message
  } = props
  
  return (
    <div>
      <h1>I'm a React component</h1>
      {
        message ?
        <h2>{message}</h2>
        :
        null
      }
    </div>
  )
}

export default ReactComponent
