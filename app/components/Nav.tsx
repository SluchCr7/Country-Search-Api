'use client'
import React, { useEffect, useState } from 'react'
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Link from 'next/link';
const Nav = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') { 
      document.documentElement.classList.add('dark_mode')
    } else {
      document.documentElement.classList.remove('dark_mode')
    }
    // localStorage.setItem('theme', theme)
    // }, [theme])
    document.getElementById('theme_toggle')?.addEventListener('click', () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    })
  })
  return (
    <nav>
        <div className="logo">
            <Link href='/'>Where in the world?</Link>
        </div>
        <div className='right'>
          <div className='theme' id='theme_toggle'>
            <span className="icon"><NightlightIcon /></span>
            <span  className='text'>Dark Mode</span>
          </div>
        </div>
    </nav>
  )
}

export default Nav