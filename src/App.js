import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginSignupToggle from './components/Authentication/LoginSignupToggle';
import Home from './components/Home';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LoginSignupToggle />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Toaster />
    </>

  );
}

export default App;
