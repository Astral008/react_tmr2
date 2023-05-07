import React from 'react'
import './TodoList.css'

function TodoList(props) {
  return (
    <section className='Contenedor'>
        <ul className='losul'>
            {props.children}
        </ul>
    </section>
  )
}

export {TodoList};