import logo from './logo.svg';
import './App.css';
import AddWorkout from './components/AddWorkout';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ShowActivity from './pages/ShowActivity';
import EditActivity from './pages/EditActivity';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Toastify from './pages/Toastify';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route element={<ProtectedRoute />}>
        <Route path='/' element={<AddWorkout/>} />
        <Route path='/showactivity' element={<ShowActivity/>} />
        <Route path='/editactivity/:id' element={<EditActivity/>} />
        </Route>
        
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/toastify' element={<Toastify/>} />
      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
