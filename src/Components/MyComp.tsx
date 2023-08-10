import React from 'react'

type Props = {
  name: string
}

export const MyComp = (props: Props) => {
  return (
    <div>MyComp {props.name}</div>
  )
}