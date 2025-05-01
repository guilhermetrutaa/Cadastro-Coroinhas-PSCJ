import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <div>
      <div className='bg-[#f9f9f9] w-full min-h-screen'>
        <div className='flex justify-center items-center pt-50'>
            <Image
                src="/verificado.svg"
                width={150}
                height={150}
                alt="Picture of the author"
            />
        </div>
        <div>
            <p className='text-[#000] text-[1rem] text-center max-w-[25rem] pt-5 font-light'>Parabéns! Seu cadastro foi enviado e já está em nosso sistema. Agradeçemos a Compreenção!</p>
        </div>
      </div>
    </div>
  )
}

export default page
