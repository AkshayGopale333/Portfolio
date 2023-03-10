import './Nav.css';
import { Link, Outlet } from "react-router-dom";

function Nav() {
    return (
        <div className='Nav'>
            <div class="nav-menu d-none d-lg-block">
                <nav class="navbar1 navbar-expand ">
                    <div class="container">
                        <span className="h1">Akshay Gopale</span>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav nav_padding">
                                <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
                                <Link to="/About" class="nav-link border1" href="about.html">About</Link>
                                <Link to="/Education" class="nav-link a" href="#">Education</Link>
                                <Link to="/Experience" class="nav-link" href="#">Experience</Link>
                                <Link to="/Project" class="nav-link" href="#">Project</Link>
                                <Link to="/Skill" class="nav-link" href="#">Skill</Link>
                                <Link to="/Resume" class="nav-link" href="#">Resume</Link>
                                <Link to="/Contact" class="nav-link" href="#">Contact</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Nav;

