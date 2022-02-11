
import './assets/css/App.css';
import './assets/css/navbar.css'
import './assets/css/home.css'
import './assets/css/dashboard.css'

import { Routes,Route } from "react-router-dom";
import Home from './views/home';
import Login from './views/login';
import Signup from './views/signup';
import NotFound from './views/notFound';
import Dashboard from './views/dashboard';
import AddContact from './views/addContact';
import EditContact from './views/editContact';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/add" element={<AddContact />} /> 
        <Route path="/edit/:id" element={<EditContact />} /> 
    </Routes>
    </>
  );
}

export default App;
