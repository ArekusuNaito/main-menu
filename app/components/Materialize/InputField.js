import React from 'react'
import ReactDOM from 'react-dom'

function InputField(props)
{
    //Props:
    //cols: s2 m4 l6
    //placeholder: Dude McDude
    //id: element's id
    //type: text,email,password
    //name: name of this field. Eg. First Name, Email, Password

    return (
      <div className={"input-field col "+props.cols}>
          <input onChange={props.onChange}placeholder={props.placeholder} id={props.id} type={props.type} className="validate"/>
          <label htmlFor={props.id}>{props.name}</label>
      </div>
    )

}

module.exports = InputField
