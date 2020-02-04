import React, {Component} from 'react'
import defaultBcg from "../images/room-1.jpeg"
import Hero from "../components/Hero";
import  Banner from "../components/Banner"
import {Link} from "react-router-dom";
import {RoomContext} from "../context";
import StyledHero from '../components/StyledHero'

export default class  SingleRoom extends Component{
   constructor(props)
   {
       super(props);
       this.state={
           slug:this.props.match.params.slug,
           defaultBcg
       }
   }

//    //componentDidMount(){
//     this.state={
//         slug:this.props.match.params.slug,
//         defaultBcg
//     }
//    }
   
   static contextType=RoomContext;
   render(){
       const {getRoom}=this.context;
       const room=getRoom(this.state.slug)
      // console.log(room);
      if(!room)
      {
          return(
              <div className="error">
                  <h3>no such room could be found ..</h3>
                  <Link to="/room" classname="btn-primary">
                      back to room
                  </Link>
              </div>
          )
      }

   const {name, description, capacity, size, price, extras,
     breakfast, pets, images}=room
    return(
        // <Hero hero='roomsHero'>
        <StyledHero img={images[0]}>
         <Banner title={`${name} room`}>
             <Link to='/rooms' className="btn-primary" >
                 Bock to rooms
                 </Link>   
                       </Banner>
                        </StyledHero>
            // </Hero>
    )
}
}