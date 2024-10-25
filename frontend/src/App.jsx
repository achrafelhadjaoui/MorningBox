import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./Context/AuthContext";
import Home from "./Screens/Home";
import Login from './Screens/Login.jsx';
import Register from './Screens/Register.jsx';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
