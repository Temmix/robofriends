import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {  
    return (
        <div>
          {
              robots.map((x,i) => 
                <Card 
                    key={i} 
                    id={x.id} 
                    email={x.email} 
                    name={x.name}/>
                )
          }
         </div>
        );
}

export default CardList;