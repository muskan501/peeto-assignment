
import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {

   constructor(props) {
       super(props);

       this.state = {
           selectedDish: null
       }
   }

   onSelectedDish(user) {
       alert('Description : '+user.description);
       this.setState({
           selectedDish: user
       })
   }

  
   render() {
       
       const menu = this.props.users.map(user => {
           return (
               
            
               <div key={user.id} className='col-12 col-md-5 m-1'>
                  
                   <Card className="style" style={{marginLeft:100 }} onClick={() => this.onSelectedDish(user)} >
                           <CardTitle >Id: {user.item_id}</CardTitle>
                        <CardTitle >Item Name: {user.item_name}</CardTitle>
                           <CardTitle >Category Name: {user.category_name}</CardTitle>
                           <CardTitle >Is Veg: {user.is_veg}</CardTitle>
                           <CardTitle >Price: {user.price}</CardTitle>
                          
                   </Card>
               </div>
       );
         });
   
       
       return (
           <div className='container'>
               
               <div className='row'>
                   {menu}
               </div>
           </div>
       );
      
   }
   

}


export default Menu; 

