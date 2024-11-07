import React from 'react'
import Header from '../components/Header'
import DynamiTitle from '../components/TItle';

export default function Statistics() {

  DynamiTitle('Statistics | Gadgets Heaven');

  return (
    <div className='bg-commonColor p-10'>
      <Header className='text-5xl font-bold text-center' title='Statistics page' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ipsum consectetur vel delectus in fuga recusandae cupiditate itaque modi perspiciatis accusamus hic dignissimos, fugit rem officiis quia maxime illum.'></Header>
    </div>
  )
}
