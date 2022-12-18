import "./register.css"
import {Link} from "react-router-dom"
export default function Register() {
  return (
    <div className="register_box">
        <div className="register_left">
            <div className="top_link">
                <a href="">
                    <img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home
                </a>
            </div>
            <div className="contact">
                <form action="">
                    <h3>Register</h3>
                    <div className="register__field">
                        <i class="button__icon fa-solid fa-user"></i>
                        <input type="text" className="register__input" placeholder="Username" />
                    </div>
                    <div className="register__field">
                    <i class=" button__icon fa-solid fa-envelope"></i>
                        <input type="text" className="register__input" placeholder="E-mail" />
                    </div>
                    <div className="register__field">
                    <i class=" button__icon fa-solid fa-lock"></i>
                        <input type="password" className="register__input" placeholder="Password"/>
                    </div>
                    <div>
                    <Link className="links" to="/login" style={{textDecoration: "none", color: "inherit"}}>
                        Dont have account?
                    </Link>
                    </div>
                    <button className="register_submit">SUBMIT</button>
                </form>
            </div>
        </div>
        <div className="right">
            <div className="right-text">
                <h2>Blog Space</h2>
                <h5>Redefine Your Boundaries</h5>
            </div>
            
        </div>
    </div>
    )
}
