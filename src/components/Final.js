import React ,{Component} from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'


class Final extends Component {

     back = (e) => {
         e.preventDefault()
         this.props.prevpage()
      
      }

    render(){
       return (
           <MuiThemeProvider>
            <div>
               <AppBar title="Thank You"/>
               <h1>Thank You For Filling The Form</h1>
               <br/>
               <h3>A email will be received by you after the 
                   evaluation soon. stay tuned</h3>
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

export default Final

 