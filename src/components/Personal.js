import React ,{Component} from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'


class Personal extends Component {

   continues = (e) => {
        e.preventDefault()
        this.props.nextpage()
     
     }
     
     back = (e) => {
         e.preventDefault()
         this.props.prevpage()
      
      }

    render(){

      const {handlechange, values} = this.props;

       return (
           <MuiThemeProvider>
            <div>
               <AppBar title="Enter personal Information"/>
               <TextField 
                  hintText="enter your occupation"
                  floatingLabelText="occupation"
                  onChange={handlechange('occupation')}
                  defaultValue = {values.occupation}
               />
               <br/>
               <TextField 
                  hintText="enter your city"
                  floatingLabelText="city"
                  onChange={handlechange('city')}
                  defaultValue = {values.city}
               />
               <br/>
               <TextField 
                  hintText="enter your bio"
                  floatingLabelText="bio"
                  onChange={handlechange('bio')}
                  defaultValue = {values.bio}
               />
               <br/><br/>
               <RaisedButton 
                  label="continue"
                  primary={true}
                  onClick={this.continues}
               />

               <RaisedButton 
                  label="back"
                  primary={false}
                  onClick={this.back}
               />
            </div>
           </MuiThemeProvider>
       )        
    }
  }

export default Personal
 