import "./global.css"
import styles from "./App.module.css"

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/GabrielGCJ.png",
      name: "Gabriel Jorge",
      role: "Desenvolvedor full-stack"
    },
    content: [
      { type:"paragraph", content:"Fala galeraa 👋"},
      { type:"paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type:"link", content:"jane.design/doctorcare"}
    ],
    publishedAt: new Date("2022-05-03 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/Thaysaadj.png",
      name: "Thayna Jorge",
      role: "Desenvolvedora front-end"
    },
    content: [
      { type:"paragraph", content:"Fala galeraa 👋"},
      { type:"paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type:"link", content:"jane.design/doctorcare"}
    ],
    publishedAt: new Date("2022-05-10 20:00:00")
  },
];

const App = () => {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>        
          <Sidebar/>        
        <main>
          {posts.map(post => {
            return (
            <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
            )
          })}          
        </main>
      </div>
    </div>
  )
}

export default App
