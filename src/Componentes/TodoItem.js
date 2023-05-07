import React from 'react'
import './TodoItem.css'
function TodoItem(props) {
  return (
    <li className='TodoItem'>
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>√</span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <p className="Icon Icon-delete">X</p>
    </li>
  )
}

export {TodoItem}; 