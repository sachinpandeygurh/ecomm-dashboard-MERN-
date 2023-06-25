import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBar from './nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './footer';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter className="App-header">
       <NavBar/>
      <Routes>
        <Route path="/" element={<h1>Products</h1>} />
        <Route path="/add" element={<h1>Add Products</h1>} />
        <Route path="/update" element={<h1>Update Products</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/signup" element={<SignUp/>} />
        
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
