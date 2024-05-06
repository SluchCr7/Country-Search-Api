import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';




const Search = () => {
    const [input, setInput] = useState('')

    useEffect(() => {
        const inputData = fetch(`https://restcountries.com/v3.1/${input}`)
        const data = inputData.then(res => res.json())
        // data.then(data => console.log(data))
    },[])
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (input) {
            window.location.href = `${input}`
            // setInput('')
        }
    }

    return (
    <form className='input' onSubmit={handleSubmit}>
        <span className='search'><SearchIcon /></span>
        <input
            type="text"
                placeholder='Search for a country...'
                id='search'
        />
    </form>
  )
}

export default Search