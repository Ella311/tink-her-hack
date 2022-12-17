import "./register.css"

export default function Login() {
  return (
    <div className="login_box">
        <div className="left">
            <div className="top_link">
                <a href="">
                    <img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home
                </a>
            </div>
            <div className="contact">
                <form action="">
                    <h3>Register</h3>
                    <div className="login__field">
                        <i class="button__icon fa-solid fa-user"></i>
                        <input type="text" className="login__input" placeholder="Username" />
                    </div>
                    <div className="login__field">
                    <i class=" button__icon fa-solid fa-envelope"></i>
                        <input type="text" className="login__input" placeholder="E-mail" />
                    </div>
                    <div className="login__field">
                    <i class=" button__icon fa-solid fa-lock"></i>
                        <input type="password" className="login__input" placeholder="Password"/>
                    </div>
                    <button className="submit">SUBMIT</button>
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
