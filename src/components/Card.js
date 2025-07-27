import React from "react";

const Card = ({name, email, id}) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow5">
      <img src={`https://robohash.org/${id}?400x200`} alt={name}></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;