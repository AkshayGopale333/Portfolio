import './Home.css'
import { Outlet, Link } from "react-router-dom";


function Home() {
    return (
        <div className='home'>
            <div className='container text-white'>
                <h1 className='nm'>Akshay Gopale</h1>
            </div>
            <div class="container ">
                <div className=' im d-inline-flex'>
                    <span>I'm</span>
                    <span>
                        <div class="typewriter fr">&nbsp; Front end Developer</div>
                    </span>
                    <span>
                        <h2 class="typed-cursor typed-cursor-blink cr">|</h2>
                    </span>
                </div>
            </div>
            <div class="container nav-menu d-none d-lg-block">
                <nav class="navbar navbar-expand">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ">
                                <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
                                <Link to="/About" class="nav-link border1" href="about.html">About</Link>
                                <Link to="/Education" class="nav-link" href="#">Education</Link>
                                <Link to="/Experience" class="nav-link" href="#">Experience</Link>
                                <Link to="Project" class="nav-link" href="#">Project</Link>
                                <Link to="Skill" class="nav-link" href="#">Skill</Link>
                                <Link to="Resume" class="nav-link" href="#">Resume</Link>
                                <Link to="Contact" class="nav-link" href="#">Contact</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Outlet></Outlet>

                <div className='container d-inline-flex text-center pt-5'>
                    <button className='btn rounded-pill'><b className='text-white'>in</b></button>
                    <button className='btn rounded-pill'><b className='text-white'><i class="fa-brands fa-github text-white fs-6"></i></b></button>
                    <button className='btn rounded-pill'><b className='text-white'> <i class="fa-brands fa-google fs-6"></i></b></button>
                </div>
            </div>

            {/* side baar */}
        </div>
    );
}
export default Home;


// export function Name() {
//     return (
//         <div className='text-white'>
//             <h1 className='nm'>Akshay Gopale</h1>
//         </div>
//     )
// }



// export function Icon() {
//     return (
//         <div className='d-inline-flex text-center'>
//             <button className='btn rounded-pill'><b className='text-white'>in</b></button>
//             <button className='btn rounded-pill'><b className='text-white'><i class="fa-brands fa-github text-white fs-6"></i></b></button>
//             <button className='btn rounded-pill'><b className='text-white'> <i class="fa-brands fa-google fs-6"></i></b></button>
//         </div>
//     )
// }




