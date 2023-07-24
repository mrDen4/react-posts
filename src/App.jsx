import React, { useMemo, useState } from "react";
import './styles/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Title', text: 'some text'},
    {id: 2, title: 'Max', text: 'awesome text 1'},
    {id: 3, title: 'Alex', text: 'text 2'}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
        return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }

    return posts;
  }, [filter.sort, posts])
    
  const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <div className="manage">
        <PostFilter filter={filter} setFilter={setFilter}/>
        <MyButton onClick={() => setModal(true)}>Создать пользователя</MyButton>
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostList posts={sortedAndSearchedPosts} remove={removePost}/>
    </div>
  );
}

export default App;
