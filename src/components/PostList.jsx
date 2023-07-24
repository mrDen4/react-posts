import React from 'react'
import PostItem from "./PostItem";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

export default function PostList({posts, remove}) {
  if(!posts.length) {
    return (
      <h2>Посты не найдены</h2>
    )
  }
  return (
    <div>
      <TransitionGroup>
        {posts.map((post, index) => 
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        )}
      </TransitionGroup>
        
    </div>
  )
}
