
import axios from "axios";

const catchData= async() =>{
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




export default catchData;