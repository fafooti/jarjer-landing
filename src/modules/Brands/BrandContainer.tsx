import Image from 'next/image'
import React from 'react'
import binanceIcon from "public/icons/binance.svg"
import bitcoinIcon from "public/icons/bitcoin.svg"
import bitmexIcon from "public/icons/bitmex.svg"
import coinbaseIcon from "public/icons/coinbase.svg"
import tetherIcon from "public/icons/tether.svg"
function BrandContainer() {
  return (
    <div className='lg:my-20 my-16 flex items-center justify-around lg:justify-center lg:gap-28'>
      <div className='lg:h-8 lg:w-40 w-[69px] h-3'>
        <Image alt='brand' src={binanceIcon}/>
      </div>
      <div className='lg:h-8 lg:w-40 w-[69px] h-3'>
        <Image alt='brand' src={coinbaseIcon}/>
      </div>
      <div className='lg:h-8 lg:w-40 w-[69px] h-3'>
        <Image alt='brand' src={bitcoinIcon}/>
      </div>
      <div className='lg:h-9 lg:w-40 w-[69px] h-3'>
        <Image alt='brand' src={tetherIcon}/>
      </div>
      <div className='lg:h-8 lg:w-40 w-[69px] h-3'>
        <Image alt='brand' src={bitmexIcon}/>
      </div>
    </div>
  )
}

export default BrandContainer
