import React from 'react'
import './index.css';
const Card = ({ name, url,cssColor }) => {
  return (
    <div>
      <div className=''>
        <div className='about_box'>

          <p class={url} style={{color:cssColor}}></p>

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



export const Exp_box = ({ cssColor, cssColor2, company, year, post, point1, point2, point3, point4 }) => {
  return (
    <div>
      <div className='Exp_box'>
        <h4 style={{ color: cssColor }}>{company}</h4>
        <p style={{ color: cssColor2 }}>{year}</p>
        <i>{post}</i>

        {/*       
      {
        <ul className=''>
        <li>{point1}</li>
        <li>{point2 || point1}</li>
        <li>{point3|| point1}</li>
        <li>{point4 || point1}</li>
      </ul>
} */}
        {
          <ul className=''>
            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>
            <li>{point4}</li>
          </ul>
        }
      </div>
    </div>
  )
}

// export  const Pro = ({title}) => {
//   return (
//     <div>
//       <h3>{title}</h3>

//     </div>
//   )
// }

export function Project({img}){
  return(
    <>
    <img className='w-100 mt-4' src={img}/>
    </>
  );
}