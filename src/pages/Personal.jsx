import React from 'react'
import qol from '../assets/qol.png'
import remont from '../assets/remont.png'
import dala from '../assets/dala.png'

function Personal() {
  return (
    <div>
        <div className='border-2 border-kok p-8'>
          <div className='flex justify-between items-start gap-4'>
            <img src={qol} alt="qol" />
            <div>
              <h2 className='text-2xl text-kok font-semibold mb-5'>Sit nisl nunc consequat magna consequat</h2>
              <p className='text-sm font-light' >A amet lectus lorem nisi aenean enim consequat adipiscing. Donec cursus scelerisque at aliquet iaculis mollis mi morbi enim. Sed et consectetur nec tempor nam auctor in at. Purus varius feugiat elit sed enim nisl sit a fermentum. Amet suscipit quam et adipiscing faucibus mollis non. Pellentesque dui in cursus quam diam eget. Odio nunc facilisis orci feugiat lorem. Orci malesuada et diam feugiat ornare neque nulla pellentesque venenatis.</p>
            </div>
          </div>
          <h2 className='text-2xl font-semibold text-center text-kok my-10'>Donec nisl non tortor semper. Fusce neque turpis nibh vestibulum eu morbi tristique curabitur. Laoreet volutpat sodales nibh tincidunt urna. Cras proin nibh.</h2>
          <div className='grid grid-cols-3'>
            <div className='flex flex-col items-center gap-5'>
              <div className=' flex justify-center items-center text-2xl text-kok font-bold w-[60px] h-[60px] border-2 border-kok'>1</div>
              <p className='text-sm font-light leading-6 text-center px-5'>Aliquam dolor facilisi tortor amet interdum tristique suspendisse magnis.</p>
            </div>
            <div className='flex flex-col items-center gap-5'>
              <div className=' flex justify-center items-center text-2xl text-kok font-bold w-[60px] h-[60px] border-2 border-kok'>2</div>
              <p className='text-sm font-light leading-6 text-center px-5'>Suspendisse ornare orci egestas faucibus sit tempor. Ipsum amet sed.</p>
            </div>
            <div className='flex flex-col items-center gap-5'>
              <div className=' flex justify-center items-center text-2xl text-kok font-bold w-[60px] h-[60px] border-2 border-kok'>3</div>
              <p className='text-sm font-light leading-6 text-center px-5'>Enim id dolor penatibus massa. Est diam risus mauris scelerisque. Id.</p>
            </div>
          </div>
          <div className='flex justify-evenly mt-8'>
            <div className='flex flex-col items-center gap-5 max-w-[295px]'>
              <div className=' flex justify-center items-center text-2xl text-kok font-bold w-[60px] h-[60px] border-2 border-kok'>4</div>
              <p className='text-sm font-light leading-6 text-center px-5'>Aliquam dolor facilisi tortor amet interdum tristique suspendisse magnis.</p>
            </div>
            <div className='flex flex-col items-center gap-5 max-w-[285px]'>
              <div className=' flex justify-center items-center text-2xl text-kok font-bold w-[60px] h-[60px] border-2 border-kok'>5</div>
              <p className='text-sm font-light leading-6 text-center px-5'>Suspendisse ornare orci egestas faucibus sit tempor. Ipsum amet sed.</p>
            </div>
            
          </div>
        </div>
        <div className='flex justify-between items-center gap-10 mt-16'>
          <div>
            <p className='text-sm font-light'>Hendrerit fringilla aliquet lacus urna faucibus cursus bibendum cras. Ultrices eu diam elementum tortor cursus. Ipsum rutrum id accumsan porttitor. Accumsan aliquet sed ut tortor pretium quis vitae dui. Scelerisque sit quam in viverra sit blandit nisi augue ut. Posuere at enim eget semper commodo.
           <br /> <br /> Aenean varius porttitor risus sed morbi. A nisl etiam tincidunt aliquam dui leo tellus ut. Sapien turpis accumsan ornare cursus diam nisl. Enim sapien non mauris ultricies. Netus proin a aliquet placerat et. Risus sapien in pharetra faucibus. Et nunc morbi eu sollicitudin facilisi.</p>
          </div>
          <img src={dala} alt="dala" />
        </div>
        <div className='flex justify-between items-center gap-10 mt-16'>
          <img src={remont} alt="dala" />
          <div>
            <p className='text-sm font-light'>
            Amet ac justo sem quisque non aliquam condimentum lectus. Malesuada viverra cras fames ornare quis. Commodo sapien amet nascetur porttitor dictum in sagittis cursus. Faucibus enim nec purus neque. Egestas donec semper duis lectus egestas blandit. Massa nisl ullamcorper platea ultrices auctor scelerisque sollicitudin nulla auctor. Quisque quis sed quisque enim velit nec praesent. Vitae nunc vulputate praesent risus scelerisque adipiscing faucibus. Nec pellentesque pulvinar urna ut rhoncus risus sit. Vulputate viverra ac lacus elit sed venenatis. Pellentesque odio in malesuada enim interdum arcu ut cursus tellus.
           <br /> <br /> Vitae pretium sit tempus quisque tincidunt diam in. Faucibus tortor nec felis malesuada in arcu. Sollicitudin odio turpis tincidunt cursus. Tortor tempor nisi orci at sed et condimentum nunc ut. Porta etiam nulla nibh pretium eu aliquam vel integer blandit. Eleifend nisl platea orci aliquam etiam sed. Facilisis tortor ultrices nisi congue malesuada a quis.
            </p>
            </div>
        </div>
    </div>
  )
}

export default Personal