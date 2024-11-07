import React from 'react'
import Card from '../card/Card'

export default function Cards({filteredCats, booleanValue}) {
  return (
    <>
        {
          booleanValue ?
            filteredCats.map((items) => <Card key={items.product_id} items={items}></Card>)
            :
            <>
            <h1 className='text-red-600 font-bold text-5xl border text-center'>No Data Found!</h1>
            </>
        }
    </>
  )
}
