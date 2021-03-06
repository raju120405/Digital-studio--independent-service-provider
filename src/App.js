
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Chackout from './Pages/Chackout/Chackout';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login';
import Register from './Pages/Shared/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/Chackout" element={<Chackout></Chackout>}></Route>
        
        
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
