import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='notFound'>
        <h1>404</h1>
        <div className='notFound_details'>
            <h2>Page Not Found</h2>
            <p>Sorry, we couldn&#39;t find what you were looking for.</p>
            <Link href='/'>Back to Home</Link>
        </div>
    </div>
  )
}

export default NotFoundPage