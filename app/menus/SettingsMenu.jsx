import * as React from 'react'
import InputField from "~/components/materialize/InputField.jsx"
import {saveProfileData} from "~/actions/userActions.jsx"
import {connect} from 'react-redux'

class SettingsMenu extends React.Component
{
  constructor(props)
  {
    super()
    this.state =
    {
      profilePic:props.profilePic
    }
  }
  render()
  {
    return(
      <div className="container">
        <div className="section"/>
        <div className="row valign-wrapper">
          <div className="col push-s1">
            <div className="file-field input-field ">
              <div className="btn">
                <span>Set Profile Photo</span>
                <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleProfilePicUpload.bind(this)}/>
              </div>
            </div>
          </div>
          <div className="col s4">
              <img className="circle responsive-img" src={this.state.profilePic}/>
          </div>
        </div>
          <div className="row">
          <InputField name ="username" onChange={this.handleInputChange.bind(this)} icon="account_circle" placeholder="Username" type="text" cols="s12 m12 l12"/>
          <InputField name="email" onChange={this.handleInputChange.bind(this)} icon ="email" placeholder="Email" type="email" cols="s12 m12 l12"/>
        </div>
        <button onClick={this.handleGetUserData.bind(this)} className="btn">Save</button>
      </div>
    )
  }

  handleGetUserData()
  {
    this.props.dispatch(saveProfileData(this.state.username,this.state.email,this.state.profilePic))
  }
  handleInputChange(event)
  {
    const name = event.target.name
    const value = event.target.value;
    this.setState({[name]:value})
  }


  handleProfilePicUpload(event)
  {

    let reader = new FileReader();
    reader.onload = function(readerEvent)
    {
      //reader.result = base64 pic
      this.setState(
        {
          profilePic: reader.result
        }
      )
    }.bind(this)
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.refs);
  }

  componentDidMount()
  {

    console.log('SettingsMenu did mount');
  }
}

const mapStateToProps = (store)=>
{
  // console.log(store);
  return {profilePic: store.user.profilePic}
}

export default connect(mapStateToProps)(SettingsMenu)
