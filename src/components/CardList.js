import React from "react";
import Card from '../components/Card';

const CardList = ({ robots }) => {
  // if(true){
  //   throw new Error('Nooooooo!...')
  // }
  const cardComponent = robots.map((user, i) => {
    return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  })
  return (
    <div>
      {cardComponent}
    </div>
  )
}

export default CardList;