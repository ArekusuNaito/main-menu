import React from 'react'
import ReactDOM from 'react-dom'

//Containers
import Modal from './Modal'
//Components
import Collection from '../../components/Materialize/Collection'
import InputField from '../../components/Materialize/InputField'
import FixedActionButton from '../../components/Materialize/FixedActionButton'

class RecipesMenu extends React.Component
{
  constructor(props)
  {
    super(props);
    //BIND 'THIS' TO THE METHODS
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSaveRecipe = this.handleSaveRecipe.bind(this)
    //New Recipe Modal
    this.handleNewRecipeModalOkButton = this.handleNewRecipeModalOkButton.bind(this)

    //New Ingredient Modal
    this.handleNewIngredientModalOkButton = this.handleNewIngredientModalOkButton.bind(this)

    //
    this.state =
    {
      ingredients: [],
      recipeName: '',
      ingredient: {},
      modalToOpen: 'newRecipeModal' //newIngredientModal - newRecipeModal
    }
  }
  render ()
  {
    return (
      <div>
        <Modal header='New Recipe' id='newRecipeModal' onOkButtonClick={this.handleNewRecipeModalOkButton}>
          <div className='container'>
            <div className='row'>
              <form onSubmit={this.handleNewRecipeModalOkButton}>
                <InputField  name='Name' cols='s12' id='inputFieldNewRecipeName' type='text' placeholder='Choco Cake'/>
              </form>
            </div>
          </div>
        </Modal>
        <Modal header='New Ingredient' id='newIngredientModal' onOkButtonClick={this.handleNewIngredientModalOkButton}>
          <div className='container'>
            <div className='row'>
              <form onSubmit={this.handleNewIngredientModalOkButton}>
                <InputField  name='Quantity' cols='s2' id='inputFieldIngredientQuantity' type='number' placeholder='1'/>
                <InputField  name='Type' cols='s4' id='inputFieldIngredientType' type='text' placeholder='Spoon'/>
                <InputField  name='Name' cols='s6' id='inputFieldIngredientName' type='text' placeholder='Sugar'/>
              </form>
            </div>
          </div>
        </Modal>
        <FixedActionButton opens={this.state.modalToOpen}/>
        <button className='btn' onClick={this.handleSaveRecipe}>Save Recipe</button>
        {/*  */}
        <Collection  header={this.state.recipeName} items={this.state.ingredients}>
          <li className="collection-item avatar">
          <i className="material-icons circle green">add</i>
            <h1 className="title">New Ingredient</h1>
          </li>
        </Collection>
      </div>
    )
  }
  handleNewRecipeModalOkButton(event)
  {
    event.preventDefault()
    this.setState(
      {
        modalToOpen: "newIngredientModal",
        recipeName: $("#inputFieldNewRecipeName").val()  //Extracted with jQuery
      });
    $('#newRecipeModal').modal('close');
  }
  handleNewIngredientModalOkButton(event)
  {
    event.preventDefault()
    //Create the new ingredient
    var newIngredient =
    {
      name: $('#inputFieldIngredientName').val(),
      type: $('#inputFieldIngredientType').val(),
      quantity: $('#inputFieldIngredientQuantity').val(),
      id: Date.now()
    }
    // var item = Object.assign({}, newIngredient);  //Elegant Clone
    var newItem =
    {

    }
    //
    this.setState((prevState) => ({
      ingredients: prevState.ingredients.concat(newIngredient), //concat is immutable
    }));

    //Clean the inputfields
    $('#inputFieldIngredientName').val('')
    $('#inputFieldIngredientType').val('')
    $('#inputFieldIngredientQuantity').val('')
    $('#newIngredientModal').modal('close');
  }

  //End Modal's Functions

  //Menu's Functions
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
  handleSaveRecipe()
  {
    var recipe =
    {
      name: this.state.recipeName,
      ingredients: this.state.ingredients
    }
    saveFile.recipes.push(recipe)  //We use push as this is a mutable method
    savePlayerData();
  }
  componentDidMount()
  {

  }
}

module.exports = RecipesMenu
