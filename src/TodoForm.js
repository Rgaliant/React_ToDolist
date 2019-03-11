import React from 'react';

class TodoForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItemFunction(this.state.name);
    this.setState({ name: '' })
  }

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        value={name} 
        name="name" //must use name.. it's an html thing
        onChange={this.handleChange}
        required 
        placeholder="Add An Item" 
        />
        
      </form>
    )
  }
}

export default TodoForm;