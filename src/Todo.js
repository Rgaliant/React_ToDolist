import React from 'react'

const Todo = ({ id, name, complete, handleClick}) => (
<li 
style={ complete ? { ...styles.complete } : { ...styles.todo } }
onClick={ () => handleClick(id)}
>
{name}
</li>
)

const styles = {
  todo: { cursor: 'pointer', },
  complete: { color: 'grey', textDecoration: 'line-through', },
}

export default Todo