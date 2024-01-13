
import Image from 'next/image'
import { useEffect, useState } from 'react';

function page2() {
  
  const a:string = "(ᯣᴗᯣ)";
  

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-slate-200'>
      <section className='font-bold text-4xl m-4'>
      {a}  
     
      </section>

      <section className="h-96 w-80 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
      
      </section>
      <footer>
        <a href="/">戻れあほち</a>
      </footer>
      
    </main>
  )
}

export default page2;