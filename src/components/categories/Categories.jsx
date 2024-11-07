import React from 'react'

export default function Categories({allCats, handelCategories, activeCats}) {

  return (
    <div className='grid gap-2 py-6'>
        {
          allCats.map((item, idx) => <button onClick={() => {
            handelCategories(item);
          }} key={idx} className={`btn rounded-full ${activeCats === item ? 'text-white bg-commonColor': ' '}`}>{item}</button>)
        }
    </div>
  )
}
