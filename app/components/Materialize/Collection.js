import React from 'react'
import ReactDOM from 'react-dom'
import CollectionItem from './CollectionItem'

function Collection(props)
{
    //Basically a for each
    return (
      <ul className="collection with-header">
        <li className="collection-header"><h4>{props.header}</h4></li>
        {
          props.items.map(item =>(
            <CollectionItem key={item.id} id={item.id} name={item.name}/>
          ))
        }
      </ul>
    )
}

module.exports = Collection
