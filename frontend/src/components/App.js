import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBar from './nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './footer';
import SignUp from './SignUp';
import PrivateRoute from './privateRoute';
import Login from './login';
import AddProduct from './addProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter className="App-header">
       <NavBar/>
      <Routes>

        <Route element={<PrivateRoute/>} >

        <Route path="/" element={<AddProduct/>} />
        <Route path="/add" element={<h1>Add Products</h1>} />
        <Route path="/update" element={<h1>Update Products</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        </Route>
        <Route path="/signup" element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
