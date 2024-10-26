import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import { AuthProvider } from "./Context/AuthContext.js";
import { RestaurantsProvider } from "./Context/RestaurantContext.js"; 
import Home from "./Screens/Home.jsx";
import Login from './Screens/Login.jsx';
import Register from './Screens/Register.jsx';
import ListRestaurnat from './Admin/Restaurnats/Restaurants_Table.jsx';
import RestaurantForm from './Admin/Restaurnats/RestaurantForm.jsx';
import ListUser from './Admin/Users/ListUseres.jsx';
import { UsersProvider } from './Context/UserContext.js';


const App = () => {
  return (
    <AuthProvider>
      <RestaurantsProvider> 
        <UsersProvider> 
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/restaurant" element={<ListRestaurnat />} />
            <Route path="/add-restaurant" element={<RestaurantForm />} />
            <Route path="/user" element={<ListUser />} /> {/* Route to display the user list */}
          </Routes>
        </UsersProvider>
      </RestaurantsProvider>
    </AuthProvider>
  );
};

export default App;

