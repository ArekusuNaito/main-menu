import React from 'react'
import ReactDOM from 'react-dom'
import CollectionItem from './CollectionItem'
import Badge from './Badge'

function Collection(props)
{
    //Basically a for each
    //item.quantity is what we want on a badge
    if(props.type === 'avatar'.toUpperCase())
    {
      return(
        <ul className="collection">
          {props.children}
          {
            props.items.map(item =>(
              <li className="collection-item avatar" key={item.id}>
                {item.icon && <i className="material-icons circle">{item.icon}</i>}
                {item.title && <span className="title">{item.title}</span>}
              </li>
            ))
          }
        </ul>
      )
    }
    if(props.header)
    {
      return(
        <ul className="collection with-header">
          <li className="collection-header"><h4>{props.header}</h4></li>
          {props.children}
          {

            props.items.map(item =>(
              <CollectionItem key={item.id} id={item.id} name={item.name} >
                {item.quantity && <Badge key={"badge"+item.id} id={"badge"+item.id}>{item.quantity}</Badge>}
              </CollectionItem>
            ))
          }
        </ul>
      )
    }
    else
    {
      return(
        <ul className="collection">
          {props.children}
          {
            props.items.map(item =>(
              <CollectionItem key={item.id} id={item.id} name={item.name}>
                {props.children}
              </CollectionItem>
            ))
          }
        </ul>
      )
    }
}

module.exports = Collection
