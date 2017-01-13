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
    for (let i = 0; i < 25; i++)
    {
      this.state.items.push({name: (i+1), id: i})
    }
  }
  componentDidMount()
  {
    
  }
  render()
  {
    return(
      <main className=''>
        <div className='card-panel grey darken-3'>
          <div className='row valign-wrapper'>
            <div className='col s12 valign center'>
              <img src='./app/images/2.jpg' className='circle responsive-img'/>
            </div>
          </div>
          <div className='row'>
            <div className='divider'></div>
            <div className='section'>
              <h5>Player</h5>
              <span>Player: </span>Alex<span></span><br/>
              <span>Playtime: </span><span>24 yrs</span>
            </div>
            <div className='divider'></div>
            <div className='section'>
              <h5>Archives</h5>
              <p>Written: 4</p>
            </div>
            <div className='divider'></div>
            <div className='section'>
              <h5>Recipes</h5>
              <p>Learned: 11</p>
            </div>
            <div className='divider'></div>
            <div className='section'>
              <h5>Recipes</h5>
              <p>Learned: 11</p>
            </div>
            <div className='divider'></div>
            <div className='section'>
              <h5>Recipes</h5>
              <p>Learned: 11</p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

module.exports = MainMenu
