

import { Exp_data } from './CardList';
import { Exp_box } from './components/Card';
import Nav from './Nav';

function Experience() {
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
                        Exp_data && Exp_data.map(({company,year,post,point1,point2,point3,point4}) => {
                            return <div className='col-12'> <Exp_box company={company} year={year} post={post} point1={point1} point2={point2} point3={point3} point4={point4} />  </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}
export default Experience;

