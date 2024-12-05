import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/privateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>

        <Route element={<PrivateComponent/>} >
          <Route path="/" element={<h1>Product Listing component</h1>} />
          <Route path="/add-new" element={<h1>Product Add component</h1>} />
          <Route path="/update" element={<h1>Product Update component</h1>} />
          <Route path="/logout" element={<h1>Logout component</h1>} />
          <Route path="/profile" element={<h1>Profile component</h1>} />
          </Route>
          
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div> 
  );
}

export default App;
