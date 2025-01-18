import Image from 'next/image'
import React from 'react'

function header() {
  return (
    <div>
        <Image src ={'/globe.svg'} width={100} height={100}/>  </div>
  )
}

export default header