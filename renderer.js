// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import ReactDOM from 'react-dom'
import Collection from './app/components/Materialize/Collection'
import CollectionItem from './app/components/Materialize/CollectionItem'
import Button from './app/components/Materialize/Button'


class App extends React.Component
{
  constructor(props) {

    super(props);
    //BIND 'THIS' TO THE METHODS
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSaveRecipe = this.handleSaveRecipe.bind(this)

    //
    this.state =
    {
      items: [],
      ingredient: ''
    }
  }
  render ()
  {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input  onChange={this.handleChange} value={this.state.ingredient}/>
        </form>
        <button className='btn' onClick={this.handleSaveRecipe}>Save Recipe</button>
        <Collection header='Recipes' items={this.state.items}/>
      </div>
    )
  }
  handleChange(event)
  {
    //Extract what the using is typing and store it on state.ingredient
    this.setState({ingredient: event.target.value});
  }
  handleSubmit(event)
  {
    console.log('Submit');
    event.preventDefault();
    var newIngredient = {
      name: this.state.ingredient,
      id: Date.now()
    }
    this.setState((prevState) => ({
      items: prevState.items.concat(newIngredient),
      ingredient: ''
    }));
    console.log('~ End Handle Submit ~');
  }
  handleSaveRecipe(event)
  {
    var recipes = JSON.stringify(this.state.items);
    fs.writeFile('./app/data/recipes.json',recipes,'utf8', function (error)
    {
      if(error)throw error;
      console.log('Recipes saved!');
    })
  }
  componentWillMount()
  {

  }

}

ReactDOM.render(<App/>,document.getElementById('app'))
