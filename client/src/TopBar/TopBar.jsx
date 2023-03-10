import "./topbar.css"
import {Link} from "react-router-dom"

export default function TopBar(){
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>      
                <i className="topIcon fa-brands fa-twitter"></i>   
                <i className="topIcon fa-brands fa-instagram"></i>  
                <i class=" topIcon fa-brands fa-linkedin-in"></i> 
                <i className="topIcon fa-brands fa-pinterest-p"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                    <Link className="home" to="/" style={{textDecoration: "none", color: "inherit"}}>
                        HOME
                    </Link>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">
                    <Link className="link" to="/write" style={{textDecoration: "none", color: "inherit"}}>
                        WRITE
                    </Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/login" style={{textDecoration: "none", color: "inherit"}}>
                        LOGIN
                    </Link>
                    </li>
                  
                </ul>
            </div>
            <div className="topRight">
                <a href="/user">
                    <img className="topImage"src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_960_720.jpg" alt="" />
                </a>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                <i class="topSearchIcon fa-solid fa-bars"></i>
            </div>
        </div>
    )
}
