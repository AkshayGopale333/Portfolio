

import { Exp_data } from './CardList';
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
    Exp_data && Exp_data.map((props)=>{
        return <div className='col-12'> </div>
    })
}

</div>
            </div>
        </div>
    )
}
export default Experience;

