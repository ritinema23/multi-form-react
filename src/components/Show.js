import React ,{Component} from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List'


class Show extends Component {

   continues = (e) => {
        e.preventDefault()
        this.props.nextpage()
     
     }
     
     back = (e) => {
         e.preventDefault()
         this.props.prevpage()
      
      }

    render(){

       const{ values: {firstname, lastname, email,occupation,
                       city,bio}} = this.props ;

       return (
           <MuiThemeProvider>
            <div>
               <AppBar title="Your Entered Data Is..."/>
               <List>
                   <ListItem 
                   PrimaryText="firstname"
                   SecondaryText={firstname}
                   />
                   <ListItem 
                   PrimaryText="lastname"
                   SecondaryText={lastname}
                   />
                   <ListItem 
                   PrimaryText="email"
                   SecondaryText={email}
                   />
                   <ListItem 
                   PrimaryText="occupation"
                   SecondaryText={occupation}
                   />
                   <ListItem 
                   PrimaryText="city"
                   SecondaryText={city}
                   />
                   <ListItem 
                   PrimaryText="bio"
                   SecondaryText={bio}                
                   />
               </List>
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

export default Show

 