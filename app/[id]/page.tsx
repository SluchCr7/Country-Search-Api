import React, { useEffect, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import OptionCard from './OptionCard'
import Link from 'next/link';
import OptionCard from './../components/OptionCard'
type cardParams = {
  params : {
    id: string
  }
}
const Page = async ({ params }: cardParams) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const response = await fetch(`https://restcountries.com/v3.1/name/${params.id}`)
  const data : any = await response.json()
  return (
    <div className='card_id'>
        <Link className='back' href={'/'}>
            <span className='back-icon'><KeyboardArrowLeftIcon /></span>
            <span className='back-txt'>Back</span>
        </Link>
        <div className='card-full'>
        <img src={data[0].flags.png} className="card-img" alt="" />
        <div className='card-details'>
          <h1 className='name-region'>{data[0].name.common}</h1>
          <div className='options-full grid grid-cols-1 my-3 gap-10 lg:grid-cols-2'>
            <OptionCard data={data[0].name.official} title="Native Name :"/>
            <OptionCard data={data[0].tld[0]} title="Top Level Domain :"/>
            <OptionCard data={data[0].capital[0]} title="Capital :"/>
            <OptionCard data={data[0].region} title="region :"/>
            <OptionCard data={data[0].languages[Object.keys(data[0].languages)]} title="Languages :"/>
            <OptionCard data={data[0].currencies[Object.keys(data[0].currencies)[0]].name} title="Currencies :"/>
            <OptionCard data={data[0].population.toLocaleString()} title="population :"/>
            <OptionCard data={data[0].area.toLocaleString()} title="area :"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page