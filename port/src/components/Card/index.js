import React from 'react'
import './index.js';
const Card = ({ name, url }) => {
  return (
    <div>
      <div className=''>
        <div className='about_box'>

          <p class={url}></p>

          <p className='pl-3'>{name}</p>

        </div>
      </div>
    </div>
  )
}

export default Card;






export const Certificate = ({ img }) => {
  return (
    <div>
      <img src={img} className="w-100 mt-4"></img>
    </div>
  )
}



export const Exp_box = (props) => {
  return (
    <div>
       <h4>{props.company}</h4>
      <p>{props.year}</p>
      <i>{props.post}</i>

      <ul>
        <li>{props.pont1}</li>
        <li>{props.point2}</li>
        <li>{props.point3}</li>
        <li>{props.point4}</li>
      </ul>
    </div>
  )
}

