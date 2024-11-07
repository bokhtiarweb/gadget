import React, { useEffect, useState } from 'react'
import Cards from '../components/cards/Cards';
import Categories from '../components/categories/Categories';
import Banner from '../components/Banner';
import DynamiTitle from '../components/TItle';

export default function Home() {
const [gadgets, setGadgets] = useState([]);
const [cats, setCats] = useState('');
const [activeCats, setActiveCats] = useState('All');
const [booleanValue, setBooleanValue] = useState(true);

DynamiTitle('Home | Gadgets Heaven');

const newCats = [...new Set(gadgets.map(items => items.category))];

const allCats = ['All', ...newCats, 'Phones'];
  
  useEffect(() => {
    fetch(`/gadgets.json`).
    then(res => res.json()).
    then(data => {
      setGadgets(data)
    });
    
  }, []);


  const handelCategories = (cat) => {

    (cat == 'All' ? (setBooleanValue(false), setCats('')) : setCats(cat)) || (cat == 'Phones' ? setBooleanValue(false) : setBooleanValue(true));

setActiveCats(cat)

  }

  const filteredCats = cats ? gadgets.filter(item => item.category === activeCats) : gadgets;

  return (
    <>
      <Banner></Banner>
      <div className='mt-52 lg:mt-72 w-[90%] mx-auto'>
        <h1 className='text-center font-bold text-5xl text-commonColor'>Explore Cutting-Edge Gadgets
        </h1>
        
        <div className='grid grid-cols-4 mt-16 gap-6'>

        <div className='sm:p-0 p-6 h-fit text-center shadow-lg rounded-xl'>
          <Categories allCats={allCats} handelCategories={handelCategories} activeCats={activeCats}></Categories>
        </div>

          <div className={`col-span-3 ${booleanValue ? 'grid' : ' '} md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6`}>
            <Cards filteredCats={filteredCats} booleanValue={booleanValue}></Cards>
          </div>
        </div>
      </div>
    </>
  )
}
