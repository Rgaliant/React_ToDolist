import React from 'react'
import Todo from './Todo'

const List = ({ items, name, handleClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => <Todo key={item.id} {...item} handleClick={handleClick} />) }
    </ul>
  </div>
)

export default List;
