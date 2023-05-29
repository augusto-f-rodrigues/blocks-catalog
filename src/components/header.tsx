"use client"
import Image from 'next/image'
import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header className='flex items-center justify-center h-20'>
        <Image alt='logo-blocks' src={'/logo.png'} width={146} height={54}/>
      </header>
    )
  }
}

export default Header