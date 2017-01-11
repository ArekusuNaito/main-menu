import React from 'react'
import ReactDOM from 'react-dom'
//Components
import Collection from '../../components/Materialize/Collection'


class MainMenu extends React.Component
{
  constructor()
  {
    super()
    this.state =
    {
      items: []
    }
    for (let i = 0; i < 10; i++)
    {
      this.state.items.push({name: (i+1), id: i})
    }
  }
  componentDidMount()
  {
    $(".brand-logo").sideNav();
  }
  render()
  {
    return(
      <main className='container'>
        <Collection header='Items' items={this.state.items}/>
      </main>
    )
  }
}

module.exports = MainMenu
