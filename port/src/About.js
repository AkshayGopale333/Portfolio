import './About.css';
import Card from './components/Card';
import Nav from './Nav';
import cardList from './CardList';

function About() {
    const mypic = "../mypic.jpg"
    // let cardList = [
    //     {
    //       name: "Software Development",
    //       url: "fa-solid fa-code icon5 text-white",
    //     },
    //     {
    //         name: "Software Development",
    //         url: "fa-solid fa-code icon5 text-white",
    //     },
    //     {
    //         name: "Software Development",
    //         url: "fa-solid fa-code icon5 text-white",
    //     },
    //     {
    //         name: "Software Development",
    //         url: "fa-solid fa-code icon5 text-white",
    //     },
    //   ];

    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className='container'>
                <div className='d-inline-flex'>
                    <div className='about_name'>ABOUT</div>
                    <div className='hrr'></div>
                </div>
                {/* --------------------- */}
            </div>
            <div className='container-lg '>
                <div className='row mb-lg-5 mb-md-4 mb-sm-1'>
                    <div className='col-sm-12 col-md-3 col-lg-3 p-0 m-0 text-center'>

                        <img src={mypic} className="mypic"></img>
                    </div>
                    <div className='col-sm-12 col-md-9 col-lg-9'>
                        <p className='about_para'>Focused and enthusiastic developer with a keen interest in
                            software development and artificial intelligence. By comprehensive exposure to the
                            underlying concepts and applying them vividly to various projects, my love for
                            these domains came into being.I am a passionate individual who thrives to build and
                            apply algorithms to solve real-world industry problems.</p>
                        {/* --------------first row------------- */}
                        <div className='row'>
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div>
                                    <span><b><i class="fa-sharp fa-solid fa-greater-than about_icon pr-2"></i></b>
                                        <b className='text-white '>Birthday : </b>
                                        <small className='text-white'> 10 Apr 1997</small>
                                    </span><br />
                                    <span className=''>
                                        <b><i class="fa-sharp fa-solid fa-greater-than about_icon pr-2"></i></b>
                                        <b className='text-white '>Phone : </b>
                                        <small className='text-white'> 91+ 8975780593</small>
                                    </span>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-8 pt-sm-4 pt-lg-0 pt-md-0'>
                                <div className='about_email'>
                                    <span className=''>
                                        <b><i class="fa-sharp fa-solid fa-greater-than about_icon pr-2"></i></b>
                                        <b className='text-white '>City : </b>
                                        <small className='text-white'> Akole, A-Nagar</small></span><br></br>
                                    <span className=''>
                                        <b><i class="fa-sharp fa-solid fa-greater-than about_icon pr-2"></i></b>
                                        <b className='text-white '>Email : </b>
                                        <small className='text-white'> akshaygopale333@gmail.com</small></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -----------second row------------------- */}



                <div className='d-inline-flex'>
                    <div className='about_name'>INTERESTS</div>
                    <div className='hrr'></div>
                </div>
                <div className='row text-white'>

                    {
                        cardList && cardList.map(({ url, name}) => {

                            return <div className='col-lg-3 col-md-3 col-sm-6 col-12 mt-4'>   <Card url={url} name={name} /></div>
                            
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default About;

