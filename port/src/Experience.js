

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
                <div className='row'>

                    {
                        Exp_data && Exp_data.map(({props}) => {
                            return <div className='col-12'> <Exp_box company={props.company} year={props.year} post={props.post} point1={props.point1} point2={props.point2} point3={props.point3} point4={props.point4} />  </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}
export default Experience;

