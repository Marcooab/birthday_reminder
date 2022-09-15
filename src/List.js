import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person) => {
const {id, name, age, image} = person
return <article hey={id} className="person">  
  <img src={image} alt=""/>
  <div>
    <h4>{name}</h4>
    <p>{age} years</p>
  </div>
</article> 
      })}
    </>
  );
};

export default List;