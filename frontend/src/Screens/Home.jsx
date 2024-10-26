import Cards from "../components/Carts/ListCards.jsx";
import Hero from "../components/Hero/HeroSection.jsx";
import { useAuth } from "../Context/AuthContext.js";

const Home = () => {
  const { user } = useAuth();
  console.log("i am home", user)

  return (
    <>
    
      <Hero />
      <Cards />
    </>
  );
};

export default Home;
