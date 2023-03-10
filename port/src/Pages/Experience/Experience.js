import React from 'react';
import './Experience.css';

 import { Exp_data } from '../../Json/CardList';
// import { Exp_box } from './components/Card';
import { Exp_box } from '../../components/Card';
 import Nav from '../Navbar/Nav';

function Experience() {
    let colors = ["red", "green", "blue","yellow","violet"];
    let colors2=["blue","yellow","violet","red", "green" ];
    return (
        <div>
            <Nav />
            <div className='container'>
                <div className='containerr d-inline-flex'>
                    <div className='about_name'>EXPERIENCE</div>
                    <div className='hrr'></div>
                </div>
            </div>
            <div className='container'>
                <div className='row text-white'>
                    {
                        Exp_data && Exp_data.map(({ company, year, post, point1, point2, point3, point4}, index) => {
                            return <div className='col-12'> <Exp_box cssColor={colors[index]} cssColor2={colors2[index]} company={company} year={year} post={post} point1={point1} point2={point2} point3={point3} point4={point4} />  </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Experience;

