import React from 'react'
import Navbar from './navbar/Navbar'


export default function Layout({setIsDarkTheme , children}) {
  return (
    <div>
        <Navbar setIsDarkTheme={setIsDarkTheme}/>
        {children}
    </div>
  )
}
