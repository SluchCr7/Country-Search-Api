'use client'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Sort } from '@mui/icons-material'
const CardsList = () => {
    const [card , setCard] = useState([])
    let api = "https://restcountries.com/v3.1/all"
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
  
    useEffect(() => {
      let africa = document.getElementById("africa")
      let asia = document.getElementById("asia")
      let listItems = document.querySelectorAll(".list li")
      listItems.forEach((ele) => {
        ele.addEventListener("click", () => {
          // ele.classList.toggle("active")
          console.log(ele.innerHTML)
          fetch(api)
            .then((res) => res.json())
            .then((data) => setCard(data.filter((item) => item.region === ele.textContent)))
          if (ele.textContent === "All") {
            fetch(api)
              .then((res) => res.json())
              .then((data) => setCard(data))
        }
      })
    })
  })
  
  useEffect(() => {
    let search = document.getElementById("search")
    search.addEventListener("input", (e) => {
      let value = e.target.value
      fetch(api)
        .then((res) => res.json())
        .then((data) => setCard(data.filter((item) => item.name.common.toLowerCase().includes(value.toLowerCase()))))
    })
  })
    
  return (
    <div className='cards grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {card.map((item) => (
        <Card key={item.name.common} item={item} />
      ))} 
    </div>
  )
}

export default CardsList