import React from 'react'
import MyButton from './UI/button/MyButton'

export default function PostItem(props) {

  return (
    <div className='post'>
        <h2 className='post__title'>{props.post.title}</h2>
        <p className='post__id'>ID: {props.number}</p>
        <p className='post__text'>{props.post.text}</p>
        <MyButton 
          onClick={() => props.remove(props.post)}
        >
          Удалить
        </MyButton>
    </div>
  )
}
