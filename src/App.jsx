import React, { useEffect, useMemo, useState } from "react";
import './styles/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./components/utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [limit, page])

  console.log('start');

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  const changePage = (page) => {
    setPage(page)
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
      {postError && <h1>Произошла ошибка: ${postError}</h1>}
      {isPostsLoading
        ? <div className="loader"><Loader /></div> 
        : <PostList posts={sortedAndSearchedPosts} remove={removePost}/>}
      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages} />
    </div>
  );
}

export default App;
