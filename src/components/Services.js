import React, {Component} from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer}
from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component{

state={
    services:[
        {
            icon:<FaCocktail/>,
            title:"Free Cocktail",
            info:'Lorem ipsum dolor sit amet consectetur  adipisicing elit. angi, corporis! '
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:'Lorem ipsum dolor sit amet consectetur  adipisicing elit. angi, corporis! '
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:'Lorem ipsum dolor sit amet consectetur  adipisicing elit. angi, corporis! '
        },
        {
            icon:<FaBeer/>,
            title:"Strong Beer",
            info:'Lorem ipsum dolor sit amet consectetur  adipisicing elit. angi, corporis! '
        }
        


    ]}
    render(){

        return(
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
{this.state.services.map((item,index) => {
    return ( <article key={index} className="service">
<span>{item.icon}</span>
<h6>{item.title}</h6>
<p>{item.info}</p>
    </article>);
})}
                </div>
            </section>
        );

    }
}
