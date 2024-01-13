
import Image from 'next/image'
import { useEffect, useState } from 'react';

function page2() {
  const a:string = "(  ･᷄ᯅ･᷅ )";
  const b:string = "(ᯣᴗᯣ)";
  const c:string = "💪( ¨̮ 💪)";

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-slate-200'>
      <section className='font-bold text-4xl m-4'>
        {b}
     
      </section>

      <section className="h-96 w-80 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
      <a href="http://localhost:3000/">{a}</a>
      <p>{c}</p>
      </section>
      
      
    </main>
  )
}

export default page2;