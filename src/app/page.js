'use client';

import Head from 'next/head';
import React from 'react'
import { useRouter } from 'next/navigation'


const Page = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <div className='w-full min-h-screen bg-[#f9f9f9]' style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <div className='flex justify-center items-center pt-20'>
            <h2 className='text-[#000] text-[2rem] text-center max-w-[20rem] font-semibold'>Bem vindo(a) ao cadastro de CoroinhasPSCJ</h2>
          </div>

          <div className='flex justify-center items-center pt-5 pb-5'>
            <p className='text-[#000] text-center max-w-[20rem]'>Veja o video abaixo para saber como realizar o seu cadastro</p>
          </div>

          <div className='flex justify-center items-center '>
            <video width="300" className='rounded-[10px]' controls>
              <source src="/videos/meu-video.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>

          <div className='flex justify-center items-center pt-5 pb-5'>

            <p className='text-center text-[#000] max-w-[15rem]'>Já sabe como funciona ? Realize seu cadastro agora!</p>

          </div>

          <div className='pb-10'>

            <div className='flex justify-center items-center pb-2'>
              <button className='px-[4rem] py-2 rounded-[10px] bg-[#000] text-[#fff] cursor-pointer' onClick={() => router.push('/cadastros/cadastroNovo')}>Sou novato</button>
            </div>
            
            <div className='flex justify-center items-center'>
              <button className='px-[3.6rem] py-2 rounded-[10px] bg-[#f9f9f9] border-2 border-[#000] text-[#000] cursor-pointer' onClick={() => router.push('/cadastros/cadastroVelho')}>Sou veterano</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Page
