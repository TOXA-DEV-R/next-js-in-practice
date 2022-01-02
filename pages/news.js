import Link from 'next/link'
import React from 'react'

const News = (props) => {
    console.log(props)
    return (
        <div>
            <Link href={{pathname:`/about/${['new']}`,query: { slug: 'new' },}}>
                new
           </Link>
        </div>
    )
}

export default News
