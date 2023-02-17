import { Certificate_data } from './CardList';
import { Certificate } from './components/Card';
import './Education.css';
import Nav from './Nav';

function Education() {
    const img1 = "./ASU.jpg";
    const img2 = "./au.png";
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className='container'>
                <div className='containerr d-inline-flex'>
                    <div className='about_name'>ABOUT</div>
                    <div className='hrr'></div>
                </div>
            </div>

            <div className='container'>
                <div className='row p-0 m-0'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-9 p-0 m-0 '>
                        <div className='container row pr-0 m-0'>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6 p-0 m-0 '>
                                <img src={img1} className="img1"></img>
                                <div className='edu_box'>
                                    <div className='pl-3'>
                                        <p className=''>MS in Computer Science</p>
                                        <h5>Janurary 2021 - Present</h5>
                                        <h6>Relevant Coursework</h6>
                                        <ul className='text-white mb-4'>
                                            <li><h6>Distributed Database Systems</h6></li>
                                            <li><h6>Cloud Computing</h6></li>
                                            <li><h6>Foundation Of Algorithms</h6></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6 pl-lg-1 pl-md-1 pl-sm-0 pl-0 pt-sm-2 pt-lg-0 pt-md-0 pr-0 m-0 text-center'>
                                <img src={img2} className="img1"></img>
                                <div className='edu_box'>
                                    <div className='pl-3'>
                                        <p className=''>B.Tech. in Information and Communication Technology</p>
                                        <h5>July 2014 - May 2018</h5>
                                        <h6>Relevant Coursework</h6>
                                        <ul className='text-white mb-4'>
                                            <li><h6>Database Management Systems</h6></li>
                                            <li><h6>Algorithms & Optimization for Big Data</h6></li>
                                            <li><h6>Machine Learning</h6></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='containerr d-inline-flex pt-lg-5 pt-md-4 pt-sm-0'>
                    <div className='about_name'>CERTIFICATION</div>
                    <div className='hrr'></div>
                </div>
                {/* --------------------------------------- */}
                <div className='row'>

                    {
                        Certificate_data && Certificate_data.map(({ img }) => {
                            return <div className='col-12 col-sm-12 col-md-6 col-lg-4'> <Certificate img={img} /> </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}
export default Education;

