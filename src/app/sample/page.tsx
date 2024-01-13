
import Image from 'next/image'
import { useEffect, useState } from 'react';

function page2() {
  const blogTitle: string = "タイトル"
  const blogText: string = "今日はいい天気だったぞ〜でも、このページを見た貴様ら全員雨だったことになりましたああああああああああああ"

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-slate-200'>
      <section className='font-bold text-4xl m-4'>
        {blogTitle}
     
      </section>
       
      <section className="h-96 max-w-600 p-5 mx-20 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
      
      {blogText}
      </section>
      
      <footer>
      <a href="/">戻れあほち</a>
      </footer>
    </main>
  )
}

export default page2;