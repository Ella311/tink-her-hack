import Home from "./pages/home/Home"
import TopBar from "./TopBar/TopBar"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write"
import User from "./pages/user/User"

import { BrowserRouter as Router,Switch,Route,Routes } from "react-router-dom";

function App() {
  return(
 <>
 <Router>
 <TopBar/>
 <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/write" element={<Write/>}/>
<Route path ='/user' element={<User/>}/>
 </Routes>
 </Router>
 
</>
  );
}
export default App;
