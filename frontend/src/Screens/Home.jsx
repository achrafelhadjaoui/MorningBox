import Hero from "../components/Hero/HeroSection";
import { useAuth } from "../Context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  console.log("i am home", user)

  return (
    <>
    {user ?
    <h1>{user.user.name}</h1>
    :
    console.log("")
}
      <Hero />
    </>
  );
};

export default Home;
