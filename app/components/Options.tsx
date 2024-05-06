'use client'
import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Search from './search';
const Options = () => {
    const [showList, setShowLsit] = useState(false)
    const [list, setList] = useState([])
    
    useEffect(() => {
        const list = document.getElementById('list')
        const select = document.getElementById('select')
        const arrow = document.querySelector('.arrow')
        // console.log(showList)
        if (showList) {
            list?.classList.remove('none')
            arrow?.classList.add('rotate')
        } else {
            list?.classList.add('none')
            arrow?.classList.remove('rotate')
        }
        select?.addEventListener('click', () => {setShowLsit(!showList)})
    })
    

    return (
    <div className='options'>
        <Search/>
        <div className='select' id='select'>
            <div className='filter'>
                <span className='title'>Filter by Region</span>
                <span className='arrow'><KeyboardArrowDownIcon /></span>
            </div>
                <ul className='list none' id='list'>
                <li id='All'>All</li>
                <li id='Africa'>Africa</li>
                <li id='Europe'>Europe</li>
                <li id='Asia'>Asia</li>
                <li id='Oceania'>Oceania</li>
                <li id='Americas'>Americas</li>
            </ul>
        </div>
    </div>
  )
}

export default Options

function onSearch(input: string) {
    throw new Error('Function not implemented.');
}
