import React ,{Component} from 'react';
import Intro from './Intro'
import Personal from './Personal'
import Show from './Show'
import Final from './Final'


class Main extends Component {

state = {
    page: 1,
    firstname: '',
    lastname: '',
    email:'',
    occupation:'',
    city:'',
    bio:'',
}

nextpage = () => {
    const {page} = this.state
    this.setState({ page: page+1 })
}

prevpage = () => {
    const {page} = this.state
    this.setState({ page: page-1 })
}

handlechange = (e) => (input) => {
    this.setState({[input]: e.target.value})
}

    render(){
    const {page} = this.state

    const {firstname, lastname, email, occupation, 
           city, bio} = this.state

    const values = {firstname, lastname, email, occupation, 
           city, bio}

    switch (page) {
        case 1: 
          return ( 
            <Intro
            values = {values}
            nextpage = {this.nextpage}
            prevpage = {this.prevpage}
            handlechange = {this.handlechange}
            />
        )
        case 2: 
            return (
            <Personal
            values = {values}
            nextpage = {this.nextpage}
            prevpage = {this.prevpage}
            handlechange = {this.handlechange}
            />
        )
        case 3: 
        return (
            <Show
            values = {values}
            nextpage = {this.nextpage}
            prevpage = {this.prevpage}
            handlechange = {this.handlechange}
            />
        )
        case 4: 
        return (
            <Final
            values = {values}
            nextpage = {this.nextpage}
            prevpage = {this.prevpage}
            handlechange = {this.handlechange}
            />
        )
            
    }
  }
}

export default Main ;