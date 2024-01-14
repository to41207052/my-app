
import axios from "axios";


export default function Home() {
 
  const pageTitle:string = "我々のページへようこそ";
  const articleTitle: string = "user name";
  const articleImage: any = "画像はいめーじ";
  const articleText: string = "私がいちばんの天才"

  const a = getData();
  
 
  

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-slate-200'>
      <section className='font-bold text-4xl m-4'>
        {pageTitle}
      </section>

      <div className='md:flex md:flex-row md:bg-transparent sm:flex sm:flex-col'>

        <section className="m-2 flex flex-col items-center p-5 h-96 w-80 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg ">
        <div className=''><a href="/sample">here{a}</a></div>
        <div className='p-20 w-fell h-full items-center bg-gray-400 rounded-md'><a href="/sample">{articleImage}</a></div>
        <div ><a href="/sample">{articleText}</a></div>
        </section>

        <section className="m-2 flex flex-col items-center p-5 h-96 w-80 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg ">
        <div className=''><a href="/sample">{articleTitle}</a></div>
        <div className='p-20 w-fell h-full items-center bg-gray-400 rounded-md'><a href="/sample">{articleImage}</a></div>
        <div ><a href="/sample">{articleText}</a></div>
        </section>

        <section className="m-2 flex flex-col items-center p-5 h-96 w-80 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg ">
        <div className=''><a href="/sample">{articleTitle}</a></div>
        <div className='p-20 w-fell h-full items-center bg-gray-400 rounded-md'><a href="/sample">{articleImage}</a></div>
        <div ><a href="/sample">{articleText}</a></div>
        </section>

      </div>

      <footer>
        <small><a href="pages">私たちについて</a></small>
      </footer>
      
      
    </main>
  )
  }

const getData= async() =>{
  const staticPostList = await PostService.getList();
  console.log(staticPostList[0].date)
  return (staticPostList[0].date)
}
class PostService{
  static async getList(): Promise<nickname[]> {
    try {
        const res = await RepositoryFactory.post.getList();
        return res.data.data.posts.edges.map((data: any) => {
          
            return data.node

        }) // 扱いやすいようにデータを加工する
    } catch {
        return [] // エラーだった場合は空のpostListにする
    }
}
}

class PostRepository {
  static getList() {
    return Repository(`query PostListQuery {
      posts {
        edges {
          node {
            title
            id
            date
            content
          }
        }
      }
    }`).getWp() // graphQLのIDEのをコピペ
}
}

const RepositoryFactory = {post: PostRepository}

const repository = axios.create({
  baseURL: 'https://misaku-s.hungry.jp/port1/graphql',
    headers: {
        'Content-Type': 'application/json'
    }
    
})


const Repository = (query: string, { variables }: Record<string, any> = {}) => {
  const body = {
      query,
      variables
  }
  
  return {
      getWp() {
          return repository.post('/', body)
      }
  }
}

interface nickname {
  title: string,
  id: string,
  date: string,
  content: string
}


