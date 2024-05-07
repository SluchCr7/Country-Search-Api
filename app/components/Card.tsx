import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Card = (props: any) => {
    const {item} = props
    // let api = "https://restcountries.com/v3.1/all"
  return (
    <Link className='card' href={`/${item.name.common}`}>
        <img src={item.flags.png} className="card-img" alt="" />
        {/* <Image src={item.flags.png} className="card-img" alt="" /> */}
        <span className='name'>{item.name.common}</span>
        <div className='details'>
            <div className='Line'>
                <span>Population</span>
                  <span>{item.population.toLocaleString()}</span>
            </div>
            <div className='Line'>
                <span>Region</span>
                <span>{item.region}</span>
            </div>
            <div className='Line'>
                <span>Capital</span>
                <span>{item.capital}</span>
            </div>
        </div>
    </Link>
  )
}

export default Card