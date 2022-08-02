
import './App.css';
import { EntryForm } from './components/EntryForm';
import {  HomePage } from './components/home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Register } from './components/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { AdminPage } from './components/AdminPage';
import {PrivateRoute} from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Admission" element={<PrivateRoute Component={EntryForm} />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminPage />} />
      
     </Routes>
     
     </BrowserRouter>
     {/* <AdminPage /> */}
   
    </div>
  );
}

export default App;
