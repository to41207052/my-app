"user client"
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const a:string = "ŧ‹”ŧ‹”( ‘ч’ )ŧ‹”ŧ‹”";
  const b:string = "ෆ⸒⸒⸜( ˶'ᵕ'˶)⸝";

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-slate-200'>
      <section className='font-bold text-4xl m-4'>
        {b}
     
      </section>

      <section className="h-96 w-80 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
      <a href="">{a}</a>
      </section>
      
      
    </main>
  )
}

