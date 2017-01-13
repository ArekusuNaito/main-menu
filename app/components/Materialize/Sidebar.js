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
            <a href="#!user"><img className="circle" src='./app/images/b.jpg'/></a>
            <a href="#!name"><span className="white-text name">John Doe</span></a>
            <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
          </div></li>
          <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
      </div>
    )

}

module.exports = Sidebar