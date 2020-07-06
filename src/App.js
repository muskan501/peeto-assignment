import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/UserComponent';
import { USERS } from './shared/users';
import { Button} from 'react-bootstrap';

class App extends React.Component {
  
  
  constructor(props)
  {
    super(props);

    this.state={
      users : USERS,
      showMenu: false
    };
  }
  componentDidMount() {
    this.setState({});
  }
  visibleMenu=()=>
{
  console.log(" I AM HEre");
  this.setState({
    showMenu:true
  })
}
hideMenu=()=>
{
  console.log(" I AM HEre");
  this.setState({
    showMenu:false
  })
}
  
  render()
  {
    const {showMenu}= this.state;
    console.log("HERE", showMenu);
     
  return (
    <div className="App">
      <Navbar dark color="info style">
        <div className="container">
          <NavbarBrand >Welcome to food restraunt</NavbarBrand>
          
        </div>
      </Navbar>
     <Button style={{backgroundColor: "green", marginTop:90,marginLeft:540,marginBottom:40}} onClick={this.visibleMenu}>Show Menu</Button>
     &nbsp;
     &nbsp;
     <Button style={{backgroundColor: "green", marginTop:90,marginBottom:40}} onClick={this.hideMenu}>Hide Menu</Button>
    { showMenu ? <Menu users={this.state.users}/> : null}
    </div>
  );
  }
}

export default App;

