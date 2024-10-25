import { register as authRegister } from "../Services/Auth/Register";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitRegister = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!name || !email || !password || !cpassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== cpassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true); // Set loading state

    try {
      const register = await authRegister({ name, email, password });
      setTimeout(alert("Registration successful"), 2000)
      console.log("Registration successful:", register.data);
      setName("");
      setEmail("");
      setPassword("");
      setError("");
      navigate("/login"); 
    } catch (err) {
      console.error("Failed to register", err);
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-40 inline-block"
            />
          </a>
        </div>
        <form onSubmit={submitRegister}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <input
                name="name"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required // Optional HTML5 validation
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input
                name="email"
                type="email"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                name="password"
                type="password"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input
                name="cpassword"
                type="password"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter confirm password"
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="text-gray-800 ml-3 block text-sm"
              >
                I accept the{" "}
                <a
                  href="javascript:void(0);"
                  className="text-blue-600 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <div className="!mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Creating account..." : "Create an account"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
          <p className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?{" "}
            <a
              href="javascript:void(0);"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
