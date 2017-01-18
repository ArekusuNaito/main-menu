import React from 'react'
import ReactDOM from 'react-dom'

function CollectionItem(props)
{

    return (
      <li className='collection-item' key={props.id}>{props.name}{props.children}</li>
    )

}

module.exports = CollectionItem
