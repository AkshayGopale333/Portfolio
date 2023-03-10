import './Project.css';
import React from 'react';
import Nav from '../Navbar/Nav';
// import { pro_data } from '../../Json/CardList';
// import { Pro } from './components/Card';
import { Project } from '../../components/Card';
import { Certificate_data, project_data } from '../../Json/CardList';

function Projects() {
    return (
        <div>
            <Nav />
            <div className='container'>
                <div className='containerr d-inline-flex'>
                    <div className='about_name'>PROJECTS</div>
                    <div className='hrr'></div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 text-center'>
                            <button className='btn btn-sm'>ALL</button>
                            <button className='btn btn-sm'>WEB_APP</button>
                            <button className='btn btn-sm'>PROJECT</button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {

                        project_data && project_data.map(({ img }) => {
                            return <div className='col-lg-4 col-12 col-md-6 col-sm-12'>
                                <Project img={img} />
                            </div>
                        })
                    }

                </div>

            </div>
        </div>
    )
}
export default Projects;



