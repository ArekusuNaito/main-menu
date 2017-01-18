import React from 'react'
import ReactDOM from 'react-dom'

function Sidebar(props)
{


    return (
      <div>
        <ul id="slide-out" className="side-nav">
          <li><div className="userView">
            <div className="background">
              <img src='./app/images/c.jpg'/>
            </div>
            <a href="#!user"><img className="circle" src={saveFile.profilePic}/></a>
            <a href="#!name"><span className="white-text name">{saveFile.playerName}</span></a>
            <a href="#!email"><span className="white-text email">{saveFile.email}</span></a>
          </div></li>
          <li><a href="#!" onClick={props.onMainMenuSelect}><i className="material-icons">account_circle</i>Status</a></li>
          <li><a href="#!"><i className="material-icons">announcement</i>Quests</a></li>
          <li><a href="#!" onClick={props.onRecipesMenuSelect}><i className="material-icons">restaurant</i>Recipes</a></li>
          <li><a href="#!"><i className="material-icons">shopping_basket</i>Groceries</a></li>
          <li><a href="#!" onClick={props.onSettingsMenuSelect}><i className="material-icons">settings</i>Settings</a></li>
          {/* //EXTRAS FOR DEVELOPMENT!!! */}
          {/* <li><a href="#!"><i className="material-icons">info</i>Extras</a></li>
          <li><a href="#!"><i className="material-icons">info</i>Extras</a></li>
          <li><a href="#!"><i className="material-icons">info</i>Extras</a></li>
          <li><a href="#!"><i className="material-icons">info</i>Extras</a></li>
          <li><a href="#!"><i className="material-icons">info</i>Extras</a></li>
          <li><a href="#!"><i className="material-icons">info</i>Extras</a></li>
          <li><a href="#!"><i className="material-icons">info</i>Extras</a></li>
          <li><a href="#!"><i className="material-icons">info</i>Extras</a></li>
          <li><a href="#!"><i className="material-icons">info</i>Extras</a></li>
          <li><a href="#!"><i className="material-icons">info</i>Extras</a></li> */}


          {/* <li><a href="#!">Second Link</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li> */}
        </ul>
      </div>
    )

}

module.exports = Sidebar
