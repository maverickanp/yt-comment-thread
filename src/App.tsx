import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";

import "./global.css";

import { IPostProps } from "./interfaces/IPostInterface";

// author: {avatar_url: "", name: "", role: ""}
// published_at: Date
// content: {text: "", url: ""}
const posts: IPostProps[] = [
  {
    id: "1",
    author: {
      avatar_url: "https://github.com/maverickanp.png",
      name: "Artur Pedrosa",
      role: "CTO@Maverick",
    },
    published_at: new Date("2023-08-11 15:25:00"),
    content: [
      {
        id: "1",
        type: "paragraph",
        content: "lore ipsum dolor sit amet",
      },
      {
        id: "2",
        type: "paragraph",
        content: "titulo ipsum dolor sit amet ipsum dolor sit amet",
      },
      {
        id: "3",
        type: "link",
        content: "artur.nunes/profile",
      },
      {
        id: "4",
        type: "link",
        content: "#Maverick #dev",
      },
    ],
  },
  {
    id: "2",
    author: {
      avatar_url: "https://github.com/jaarsi.png",
      name: "Jairo Silva",
      role: "CFO@Maverick",
    },
    published_at: new Date("2023-08-10 15:28:00"),
    content: [
      {
        id: "1",
        type: "paragraph",
        content: "lore ipsum dolor sit amet",
      },
      {
        id: "2",
        type: "paragraph",
        content: "titulo ipsum dolor sit amet ipsum dolor sit amet",
      },
      {
        id: "3",
        type: "link",
        content: "jairo.silva/profile",
      },
      {
        id: "4",
        type: "link",
        content: "#Maverick #dev",
      },
    ],
  },
  {
    id: "3",
    author: {
      avatar_url: "https://github.com/livibellyrds.png",
      name: "Danielle Rodrigues",
      role: "CEO@Maverick",
    },
    published_at: new Date("2023-08-16 15:35:00"),
    content: [
      {
        id: "1",
        type: "paragraph",
        content: "lore ipsum dolor sit amet",
      },
      {
        id: "2",
        type: "paragraph",
        content: "titulo ipsum dolor sit amet ipsum dolor sit amet",
      },
      {
        id: "3",
        type: "link",
        content: "danielle.rodrigues/profile",
      },
      {
        id: "4",
        type: "link",
        content: "#Maverick #dev",
      },
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </main>
      </div>
    </>
  );
}

export default App;
