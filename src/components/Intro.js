import React ,{Component} from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class Intro extends Component {

   continues = (e) => {
      e.preventDefault()
      this.props.nextpage()
   
   }

    render(){

      const {handlechange, values} = this.props;

       return (
           <MuiThemeProvider>
            <div>
               <AppBar title="Enter Your Information"/>
               <TextField 
                  hintText="enter your firstname"
                  floatingLabelText="firstname"
                  onChange={handlechange('firstname')}
                  defaultValue = {values.firstName}
               />
               <br/>
               <TextField 
                  hintText="enter your lastname"
                  floatingLabelText="lastname"
                  onChange={handlechange('lastname')}
                  defaultValue = {values.lastname}
               />
               <br/>
               <TextField 
                  hintText="enter your email"
                  floatingLabelText="email"
                  onChange={handlechange('email')}
                  defaultValue = {values.email}
               />
               <br/><br/>
               <RaisedButton 
                  label="continue"
                  primary={true}
                  onClick={this.continues}
               />
            </div>
           </MuiThemeProvider>
       )        
    }
  }

export default Intro ;