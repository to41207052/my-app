
import catchData from "../pages/api/catchData";


function page2() {
  const blogTitle: string = "タイトル"
  const blogText: string = "今日はいい天気だったぞ〜でも、このページを見た貴様ら全員雨だったことになりましたああああああああああああ"

  const allData = async() => {
    const a = (await catchData()).date
    return a
  }
  const Date = allData()

  const allTitle = async() => {
    const a = (await catchData()).title
    return a
  }
  const Title = allTitle()

  const allArticle = async() => {
    const a = (await catchData()).content
    return a
  }
  const Article = allArticle()



  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-slate-200'>
      <section className='m-4'>
        <p>{Date}</p>
        <h1 className="font-bold">{Title}</h1>
     
      </section>
       
      <section className="h-96 max-w-600 p-5 mx-20 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
      {Article}
      
      </section>
      
      <footer>
      <a href="/">戻れあほち</a>
      </footer>
    </main>
  )
}

export default page2;