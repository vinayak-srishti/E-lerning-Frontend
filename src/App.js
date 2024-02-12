import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Body from './Component/Body';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Forgot from './Component/Forgot';
import About from './Component/About';
import Login_IS from './Component/Login_IS';
import Signup_Instructor from './Component/Signup_Instructor';
import Model from './Component/Model';
import Login_Instructor from './Component/Login_Instructor';

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
        <Routes>
          <Route path='/loginpage' element={<Login/>}/>
          <Route path='/regpage' element={<SignUp/>}/>
          <Route path='/homepage' element={<Body/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/model' element={<Model/>}/>
          <Route path='/forgotpassword' element={<Forgot/>}/>
          <Route path='/loginis' element={<Login_IS/>}/>
          <Route path='/signupinstructor' element={<Signup_Instructor/>}/>
          <Route path='/logininstructor' element={<Login_Instructor/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
