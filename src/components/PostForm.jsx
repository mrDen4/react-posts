import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

export default function PostForm({create}) {
    const [post, setPost] = useState({title: '', text: ''})

    function addNewPost(e) {
        e.preventDefault()
        const newPost ={
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', text: ''})
        }
    return (
        <form className='form form--create' onSubmit={addNewPost}>
            <MyInput 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Title"
                styles='form__inp'
            />
            <MyInput 
                value={post.text}
                onChange={e => setPost({...post, text: e.target.value})}
                type="text" 
                placeholder="About"
                styles='form__inp'
            />
            <MyButton>Add post</MyButton>
        </form>
    )
}
