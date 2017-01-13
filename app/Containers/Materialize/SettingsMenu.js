import React from 'react'
import ReactDOM from 'react-dom'
import Collection from '../../components/Materialize/Collection'

class SettingsMenu extends React.Component
{
  constructor(props)
  {
    super(props);
    //BIND 'THIS' TO THE METHODS
    this.handleOnChangePlayerName = this.handleOnChangePlayerName.bind(this)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleProfilePicUpload = this.handleProfilePicUpload.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)

    this.state =
    {
      playerName: settingsFile.playerName,
      profilePic: settingsFile.profilePic,
      email: settingsFile.email,
    }
  }
  render ()
  {
    return (
      <div className='row'>
        <form className='col s12' onSubmit={this.handleOnSubmit}>
          <div className='row'>
            <div className="input-field col s6">
              <input placeholder="Player 1" value={this.state.playerName}  type="text" className="validate" onChange={this.handleOnChangePlayerName}/>
              <label>Player</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="player@email.com" value={this.state.email}  type="text" className="validate" onChange={this.handleOnChangeEmail}/>
              <label >E-Mail</label>
            </div>
          </div>
          <div className='row'>
            <div className='col s4'>
              <img id='playerPic' src={this.state.profilePic} className='circle responsive-img'/>
            </div>
            <div className="file-field input-field col s7 offset-s1">
              <div className="btn">
                <span>Set Profile Photo</span>
                <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleProfilePicUpload}/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col s2'>
              <button className='btn'>Save</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
  handleOnChangePlayerName(event)
  {
    this.setState(
      {
        playerName: event.target.value
      }
    )
  }
  handleOnChangeEmail(event)
  {
    this.setState(
      {
        email: event.target.value
      }
    )
  }
  handleOnSubmit(event)
  {
    event.preventDefault();
    console.log(settingsFile);
    settingsFile.playerName = this.state.playerName;
    settingsFile.email = this.state.email;
    settingsFile.profilePic = this.state.profilePic;
    fs.writeFile(settingsFilePath,JSON.stringify(settingsFile), function (error,data)
    {
      if(error)throw error;
      console.log('Settings File Updated!');
    })
    //Submit should save this on a file on disk
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
  }
  componentWillMount()
  {

  }
}

module.exports = SettingsMenu
