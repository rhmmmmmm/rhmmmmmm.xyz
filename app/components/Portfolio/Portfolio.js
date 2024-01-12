import React from 'react'
import '../../globals.css'
import Image from 'next/legacy/image'
import web1 from '../../assets/objkt.png'
import web2 from '../../assets/foundation.png'
import web3 from '../../assets/layerr.png'
import web4 from '../../assets/sound.png'
import web5 from '../../assets/exchange.jpeg'

const Portfolio = () => {
  return (
    <div className='pb-20'>
        <div className='text-center'>
            <h3 className='text-3xl font-bold md:text-5xl'>Port<span>folio</span></h3>
            <p className='text-md pt-5 leading-8 md:text-lg max-w-3xl mx-auto'>
                Explore my creative journey across platforms – witness my work come to life on various mediums and channels.
            </p>
        </div>
        <div className='lg:flex gap-10 justify-center items-center'>
            <div className=' rounded-xl my-5 '>
                <div className='flex justify-center items-center'>
                    <Image src={web1} className='rounded-lg' width={200} height={200}/>
                </div>
                <h3 className='text-lg pt-2 hover:scale-125'><a href='https://objkt.com/profile/rhmmmmmm/created'>objkt.com</a></h3>
            </div>
            <div className=' p-2 rounded-xl my-5'>
                <div className='flex justify-center items-center'>
                    <Image src={web2} className='rounded-lg' width={200} height={200}/>
                </div>
                <h3 className='text-lg pt-2 hover:scale-125'><a href='https://foundation.app/@rhmmmmmm?tab=created'>foundation.app</a></h3>
            </div>
            <div className=' p-2 rounded-xl m-5'>
                <div className='flex justify-center items-center'>
                    <Image src={web4} className='rounded-lg' width={200} height={200}/>
                </div>
                <h3 className='text-lg pt-2 hover:scale-125'><a href='https://www.sound.xyz/rhmmmmmm'>sound.xyz</a></h3>
            </div>
        </div>
        <div className='lg:flex gap-10 justify-center items-center'>
            <div className=' p-2 rounded-xl my-5'>
                <div className='flex justify-center items-center'>
                    <Image src={web3} className='rounded-lg' width={200} height={200}/>
                </div>
                <h3 className='text-lg pt-2 hover:scale-125'><a href='https://gallery.layerr.art/c/rhmmmmmm-s-inn-1'>layerr.xyz</a></h3>
            </div>
            <div className=' p-2 rounded-xl my-5'>
                <div className='flex justify-center items-center'>
                    <Image src={web5} className='rounded-lg' width={200} height={200}/>
                </div>
                <h3 className='text-lg pt-2 hover:scale-125'><a href='https://exchange.art/rhmmmmmm/nfts'>Exchange.art</a></h3>
            </div>
        </div>
    </div>
  )
}

export default Portfolio